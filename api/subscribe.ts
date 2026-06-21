import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "",
);

const resend = new Resend(process.env.RESEND_API_KEY || "");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Email is required" });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const { error } = await supabase.from("newsletter_subscribers").insert({
      email: normalizedEmail,
    });

    if (error) {
      if (error.code === "23505") {
        return res.status(409).json({ error: "This email is already subscribed" });
      }

      console.error("Newsletter Supabase error:", error);
      return res.status(500).json({ error: "Could not subscribe" });
    }

    await resend.emails.send({
      from: "Adedara Ola Website <noreply@adedaraolaandco.com>",
      to: process.env.CONTACT_RECEIVER_EMAIL || "",
      subject: "New Newsletter Subscriber",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${normalizedEmail}</p>
        <p>This person subscribed through the website footer form.</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}