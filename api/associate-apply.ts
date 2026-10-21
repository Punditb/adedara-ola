import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { randomBytes } from "node:crypto";

const supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "",
);

const resend = new Resend(process.env.RESEND_API_KEY || "");

const SITE_URL =
    process.env.VERCEL_ENV === "production" || !process.env.VERCEL_URL
        ? "https://www.adedaraolaandco.com"
        : `https://${process.env.VERCEL_URL}`;
const CEO_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "";

type Answers = Record<string, string | string[]>;

function esc(value: unknown): string {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function oneLine(value: unknown, max: number): string {
    return String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function cleanAnswers(input: unknown): Answers | null {
    if (!input || typeof input !== "object" || Array.isArray(input)) return null;
    const entries = Object.entries(input as Record<string, unknown>);
    if (entries.length === 0 || entries.length > 80) return null;
    const out: Answers = {};
    for (const [key, value] of entries) {
        const question = key.trim().slice(0, 200);
        if (!question) continue;
        if (Array.isArray(value)) {
            out[question] = value
                .slice(0, 60)
                .map((item) => String(item).trim().slice(0, 300))
                .filter(Boolean);
        } else {
            out[question] = String(value ?? "").trim().slice(0, 4000);
        }
    }
    return out;
}

function rowsHtml(answers: Answers): string {
    return Object.entries(answers)
        .map(([question, answer]) => {
            const text = Array.isArray(answer) ? answer.join(", ") : answer;
            return `<tr><td style="padding:6px 10px;border:1px solid #ddd;vertical-align:top;width:40%"><strong>${esc(question)}</strong></td><td style="padding:6px 10px;border:1px solid #ddd;vertical-align:top">${esc(text || "-").replace(/\n/g, "<br>")}</td></tr>`;
        })
        .join("");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const body = req.body || {};

        // Hidden trap field: real people leave it empty, bots fill it in.
        if (body.website) {
            return res.status(200).json({ success: true });
        }

        const fullName = oneLine(body.fullName, 120);
        const email = oneLine(body.email, 200).toLowerCase();
        const phone = oneLine(body.phone, 40);
        const profession = oneLine(body.profession, 150);
        const answers = cleanAnswers(body.answers);

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (fullName.length < 2 || !emailOk || phone.length < 6 || !profession || body.consent !== true || !answers) {
            return res.status(400).json({ error: "Please complete all required fields." });
        }

        const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
        const { data: existing, error: lookupError } = await supabase
            .from("associate_applications")
            .select("id")
            .eq("email", email)
            .gte("created_at", since)
            .limit(1);

        if (lookupError) {
            console.error("Associate lookup error:", lookupError);
            return res.status(500).json({ error: "Something went wrong. Please try again." });
        }
        if (existing && existing.length > 0) {
            return res.status(409).json({
                error: "We already have an application from this email address. Please wait for our reply.",
            });
        }

        const token = randomBytes(24).toString("hex");
        const { data: saved, error: saveError } = await supabase
            .from("associate_applications")
            .insert({ token, full_name: fullName, email, phone, profession, stage1: answers })
            .select("id")
            .single();

        if (saveError || !saved) {
            console.error("Associate save error:", saveError);
            return res.status(500).json({ error: "Could not save your application. Please try again." });
        }

        const inviteUrl = `${SITE_URL}/api/associate-decision?ref=${token}&d=invite`;
        const declineUrl = `${SITE_URL}/api/associate-decision?ref=${token}&d=decline`;

        const ceoResult = await resend.emails.send({
            from: "Adedara Ola Website <noreply@adedaraolaandco.com>",
            to: CEO_EMAIL,
            subject: `Associate application (Stage 1): ${fullName} - ${profession}`,
            replyTo: email,
            html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#222;max-width:720px">
          <h2>New Associate Application - Stage 1</h2>
          <p><strong>${esc(fullName)}</strong> &middot; ${esc(profession)}<br>${esc(email)} &middot; ${esc(phone)}</p>
          <p>
            <a href="${esc(inviteUrl)}" style="background:#0098D9;color:#fff;padding:10px 16px;text-decoration:none;border-radius:4px;margin-right:8px">Invite to Stage 2</a>
            <a href="${esc(declineUrl)}" style="background:#6b7280;color:#fff;padding:10px 16px;text-decoration:none;border-radius:4px">Decline</a>
          </p>
          <p style="color:#555">Each button opens a confirmation page first. Applicants have been told to expect a reply within 5 business days.</p>
          <table style="border-collapse:collapse;width:100%">${rowsHtml(answers)}</table>
        </div>
      `,
        });

        if (ceoResult.error) {
            console.error("Associate notification error:", ceoResult.error);
            await supabase.from("associate_applications").delete().eq("id", saved.id);
            return res.status(500).json({ error: "Could not submit your application. Please try again." });
        }

        try {
            await resend.emails.send({
                from: "Adedara Ola & Co. <noreply@adedaraolaandco.com>",
                to: email,
                replyTo: "associates@adedaraolaandco.com",
                subject: "We have received your application",
                html: `
          <div style="font-family:Arial,sans-serif;font-size:14px;color:#222;max-width:600px">
            <p>Dear ${esc(fullName.split(" ")[0])},</p>
            <p>Thank you for applying to the <strong>Adedara Ola &amp; Co. Real Estate Associate Platform</strong>. We have received your Stage 1 application.</p>
            <p>Our founder reviews every application personally. You can expect a reply within <strong>5 business days</strong>. If your preliminary details are a good fit, we will email you instructions to continue to Stage 2.</p>
            <p>Please note that applying does not guarantee admission to the platform, and admission does not guarantee any particular project or payment.</p>
            <p>If we do not take your application forward, we delete your details within 3 days of that decision.</p>
            <p>Kind regards,<br>Adedara Ola &amp; Co.<br>associates@adedaraolaandco.com</p>
          </div>
        `,
            });
        } catch (mailError) {
            console.error("Applicant confirmation error:", mailError);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Associate apply error:", error);
        return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
}