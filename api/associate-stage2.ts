import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

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
const BUCKET = "associate-uploads";

type Answers = Record<string, string | string[]>;
type UploadedFile = { path: string; name: string; size: number };

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
    if (entries.length === 0 || entries.length > 100) return null;
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

function cleanFiles(input: unknown, appId: string): UploadedFile[] | null {
    if (input === undefined || input === null) return [];
    if (!Array.isArray(input) || input.length > 5) return null;
    const files: UploadedFile[] = [];
    for (const item of input) {
        const record = (item || {}) as Record<string, unknown>;
        const path = String(record.path || "");
        if (!path.startsWith(`${appId}/`) || path.includes("..")) return null;
        files.push({
            path,
            name: oneLine(record.name, 120) || "file",
            size: Number(record.size) || 0,
        });
    }
    return files;
}

const APP_FIELDS = "id, full_name, email, phone, profession, stage1, stage1_status, stage2_submitted_at";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        // ---- GET: check the private link and greet the applicant ----
        if (req.method === "GET") {
            const ref = String(req.query.ref || "");
            if (!/^[a-f0-9]{48}$/.test(ref)) {
                return res.status(400).json({ error: "This link is not valid." });
            }
            const { data: app } = await supabase
                .from("associate_applications")
                .select(APP_FIELDS)
                .eq("token", ref)
                .maybeSingle();

            if (!app || app.stage1_status !== "invited") {
                return res.status(403).json({ error: "This link is not valid or has not been activated." });
            }
            if (app.stage2_submitted_at) {
                return res.status(410).json({ error: "Stage 2 has already been submitted. Thank you." });
            }
            return res.status(200).json({
                firstName: String(app.full_name).split(" ")[0],
                profession: app.profession,
            });
        }

        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        // ---- POST: receive Stage 2 ----
        const body = req.body || {};
        if (body.website) {
            return res.status(200).json({ success: true });
        }

        const ref = String(body.ref || "");
        if (!/^[a-f0-9]{48}$/.test(ref)) {
            return res.status(400).json({ error: "This link is not valid." });
        }

        const { data: app } = await supabase
            .from("associate_applications")
            .select(APP_FIELDS)
            .eq("token", ref)
            .maybeSingle();

        if (!app || app.stage1_status !== "invited") {
            return res.status(403).json({ error: "This link is not valid or has not been activated." });
        }
        if (app.stage2_submitted_at) {
            return res.status(409).json({ error: "Stage 2 has already been submitted. Thank you." });
        }

        const answers = cleanAnswers(body.answers);
        const files = cleanFiles(body.files, app.id);
        if (!answers || !files || body.consent !== true || body.confirm !== true) {
            return res.status(400).json({ error: "Please complete all required fields and tick both boxes." });
        }

        const submittedAt = new Date().toISOString();
        const { data: updated, error: updateError } = await supabase
            .from("associate_applications")
            .update({ stage2: answers, stage2_files: files, stage2_submitted_at: submittedAt })
            .eq("id", app.id)
            .is("stage2_submitted_at", null)
            .select("id");

        if (updateError || !updated || updated.length === 0) {
            console.error("Associate stage 2 save error:", updateError);
            return res.status(500).json({ error: "Could not save your application. Please try again." });
        }

        // Download links that expire after 7 days
        let fileItems = "<li>No files attached</li>";
        if (files.length > 0) {
            const { data: signed } = await supabase.storage
                .from(BUCKET)
                .createSignedUrls(files.map((f) => f.path), 7 * 24 * 60 * 60);
            const urlByPath = new Map((signed || []).map((s) => [s.path, s.signedUrl]));
            fileItems = files
                .map((f) => {
                    const url = urlByPath.get(f.path);
                    const size = `${Math.max(1, Math.round(f.size / 1024))} KB`;
                    return url
                        ? `<li><a href="${esc(url)}">${esc(f.name)}</a> (${size})</li>`
                        : `<li>${esc(f.name)} (${size}) - link unavailable</li>`;
                })
                .join("");
        }

        const admitUrl = `${SITE_URL}/api/associate-decision?ref=${ref}&d=admit`;
        const rejectUrl = `${SITE_URL}/api/associate-decision?ref=${ref}&d=reject`;

        const ceoResult = await resend.emails.send({
            from: "Adedara Ola Website <noreply@adedaraolaandco.com>",
            to: CEO_EMAIL,
            subject: `Associate application (Stage 2 complete): ${oneLine(app.full_name, 120)} - ${oneLine(app.profession, 150)}`,
            replyTo: app.email,
            html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#222;max-width:760px">
          <h2>Associate Application - Stage 2 Complete</h2>
          <p><strong>${esc(app.full_name)}</strong> &middot; ${esc(app.profession)}<br>${esc(app.email)} &middot; ${esc(app.phone)}</p>
          <p>
            <a href="${esc(admitUrl)}" style="background:#0098D9;color:#fff;padding:10px 16px;text-decoration:none;border-radius:4px;margin-right:8px">Admit</a>
            <a href="${esc(rejectUrl)}" style="background:#6b7280;color:#fff;padding:10px 16px;text-decoration:none;border-radius:4px">Decline</a>
          </p>
          <h3>Stage 2 answers</h3>
          <table style="border-collapse:collapse;width:100%">${rowsHtml(answers)}</table>
          <h3>Attached documents (links expire in 7 days)</h3>
          <ul>${fileItems}</ul>
          <h3>Stage 1 answers</h3>
          <table style="border-collapse:collapse;width:100%">${rowsHtml((app.stage1 || {}) as Answers)}</table>
        </div>
      `,
        });

        if (ceoResult.error) {
            console.error("Associate stage 2 notification error:", ceoResult.error);
            await supabase
                .from("associate_applications")
                .update({ stage2: null, stage2_files: [], stage2_submitted_at: null })
                .eq("id", app.id);
            return res.status(500).json({ error: "Could not submit your application. Please try again." });
        }

        try {
            await resend.emails.send({
                from: "Adedara Ola & Co. <noreply@adedaraolaandco.com>",
                to: app.email,
                replyTo: "associates@adedaraolaandco.com",
                subject: "We have received your Stage 2 application",
                html: `
          <div style="font-family:Arial,sans-serif;font-size:14px;color:#222;max-width:600px">
            <p>Dear ${esc(String(app.full_name).split(" ")[0])},</p>
            <p>Thank you for completing Stage 2 of your application to the <strong>Adedara Ola &amp; Co. Real Estate Associate Platform</strong>. Our founder will review it and we will be in touch by email.</p>
            <p>Please note that admission to the platform does not guarantee any particular project or payment.</p>
            <p>Kind regards,<br>Adedara Ola &amp; Co.<br>associates@adedaraolaandco.com</p>
          </div>
        `,
            });
        } catch (mailError) {
            console.error("Stage 2 confirmation error:", mailError);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Associate stage 2 handler error:", error);
        return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
}