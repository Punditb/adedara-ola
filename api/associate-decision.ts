import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "",
);

const SITE_URL =
    process.env.VERCEL_ENV === "production" || !process.env.VERCEL_URL
        ? "https://www.adedaraolaandco.com"
        : `https://${process.env.VERCEL_URL}`;
const SIGN_OFF = "Kind regards,\nAdedara Ola & Co.\nassociates@adedaraolaandco.com";

type Decision = "invite" | "decline" | "admit" | "reject";

const TITLES: Record<Decision, string> = {
    invite: "Invite to Stage 2",
    decline: "Decline at Stage 1",
    admit: "Admit to the platform",
    reject: "Decline after Stage 2",
};

function esc(value: unknown): string {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function page(res: VercelResponse, status: number, title: string, bodyHtml: string) {
    res.status(status);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("X-Robots-Tag", "noindex");
    return res.send(
        `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title></head><body style="font-family:Arial,sans-serif;max-width:600px;margin:40px auto;padding:0 16px;color:#222;line-height:1.5">${bodyHtml}</body></html>`,
    );
}

function buildEmail(decision: Decision, firstName: string, token: string) {
    if (decision === "invite") {
        return {
            subject: "Your Adedara Ola & Co. Associate application: next step",
            body: `Dear ${firstName},

Thank you for applying to the Adedara Ola & Co. Real Estate Associate Platform. After reviewing your preliminary details, we would like you to continue to Stage 2 of the application.

Please complete the Stage 2 form here:
${SITE_URL}/associates/stage-2?ref=${token}

The form takes about 30 minutes. You can attach supporting documents (PDF, JPG, PNG, DOC or DOCX, up to 4MB each, five files at most). This link is personal to you, so please do not share it.

${SIGN_OFF}`,
        };
    }
    if (decision === "decline") {
        return {
            subject: "Your Adedara Ola & Co. Associate application",
            body: `Dear ${firstName},

Thank you for your interest in the Adedara Ola & Co. Real Estate Associate Platform and for the time you took to apply. After reviewing your preliminary details, we are unable to take your application forward at this time.

As stated in our data notice, we will delete your application details within 3 days.

We wish you every success.

${SIGN_OFF}`,
        };
    }
    if (decision === "admit") {
        return {
            subject: "Your Adedara Ola & Co. Associate application: successful",
            body: `Dear ${firstName},

We are pleased to inform you that, following our review, your application to join the Adedara Ola & Co. Real Estate Associate Platform has been successful. We will be in touch shortly with the next steps.

Please note that admission to the platform does not guarantee any particular project or payment.

${SIGN_OFF}`,
        };
    }
    return {
        subject: "Your Adedara Ola & Co. Associate application",
        body: `Dear ${firstName},

Thank you for completing both stages of the application for the Adedara Ola & Co. Real Estate Associate Platform. After careful review, we are unable to admit you to the platform at this time.

As stated in our data notice, we will delete your application details within 3 days.

We wish you every success.

${SIGN_OFF}`,
    };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const params: Record<string, unknown> = {
            ...(req.query || {}),
            ...(req.body && typeof req.body === "object" ? req.body : {}),
        };
        const ref = String(params.ref || "");
        const decision = String(params.d || "") as Decision;

        if (!/^[a-f0-9]{48}$/.test(ref) || !Object.prototype.hasOwnProperty.call(TITLES, decision)) {
            return page(res, 400, "Invalid link", "<h2>This link is not valid.</h2>");
        }

        const { data: app, error } = await supabase
            .from("associate_applications")
            .select("id, full_name, email, profession, stage2_submitted_at")
            .eq("token", ref)
            .maybeSingle();

        if (error || !app) {
            return page(res, 404, "Not found", "<h2>We could not find this application.</h2>");
        }

        const isFinal = decision === "admit" || decision === "reject";
        if (isFinal && !app.stage2_submitted_at) {
            return page(res, 409, "Not ready", "<h2>This applicant has not submitted Stage 2 yet.</h2>");
        }
        if (!isFinal && app.stage2_submitted_at) {
            return page(
                res,
                409,
                "Already at Stage 2",
                "<h2>This applicant has already submitted Stage 2.</h2><p>Please use the Admit or Decline buttons in the Stage 2 email.</p>",
            );
        }

        const firstName = String(app.full_name).split(" ")[0];

        if (req.method !== "POST") {
            return page(
                res,
                200,
                TITLES[decision],
                `<h2>${esc(TITLES[decision])}?</h2>
         <p><strong>${esc(app.full_name)}</strong><br>${esc(app.profession)}<br>${esc(app.email)}</p>
         <form method="POST" action="/api/associate-decision">
           <input type="hidden" name="ref" value="${esc(ref)}">
           <input type="hidden" name="d" value="${esc(decision)}">
           <button type="submit" style="background:#0098D9;color:#fff;border:0;padding:12px 20px;border-radius:4px;font-size:16px;cursor:pointer">Confirm</button>
         </form>
         <p style="color:#666;font-size:13px">Nothing is recorded or sent until you press Confirm.</p>`,
            );
        }

        const now = new Date().toISOString();
        const update =
            decision === "invite"
                ? { stage1_status: "invited", stage1_decided_at: now }
                : decision === "decline"
                    ? { stage1_status: "declined", stage1_decided_at: now }
                    : decision === "admit"
                        ? { final_status: "admitted", final_decided_at: now }
                        : { final_status: "declined", final_decided_at: now };

        const { error: updateError } = await supabase
            .from("associate_applications")
            .update(update)
            .eq("id", app.id);

        if (updateError) {
            console.error("Associate decision error:", updateError);
            return page(res, 500, "Error", "<h2>Something went wrong. Please try again.</h2>");
        }

        const mail = buildEmail(decision, firstName, ref);
        const href = `mailto:${app.email}?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`;

        return page(
            res,
            200,
            "Decision recorded",
            `<h2>Decision recorded: ${esc(TITLES[decision])}</h2>
       <p>Now send ${esc(firstName)} the email below.</p>
       <p><a href="${esc(href)}" style="display:inline-block;background:#0098D9;color:#fff;text-decoration:none;padding:12px 20px;border-radius:4px">Open the email, ready to send</a></p>
       <p style="color:#666;font-size:13px">If nothing opens, copy the text below into a new email.</p>
       <p><strong>To:</strong> ${esc(app.email)}<br><strong>Subject:</strong> ${esc(mail.subject)}</p>
       <textarea readonly style="width:100%;height:320px;font-family:Arial,sans-serif;font-size:14px">${esc(mail.body)}</textarea>`,
        );
    } catch (error) {
        console.error("Associate decision handler error:", error);
        return page(res, 500, "Error", "<h2>Something went wrong. Please try again.</h2>");
    }
}