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
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { error: supabaseError } = await supabase
      .from("contact_submissions")
      .insert({ name, email, phone, company, service, message });

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      return res.status(500).json({ error: "Could not save submission" });
    }

    const emailResult = await resend.emails.send({
      from: "Adedara Ola Website <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL || "",
      subject: `New website enquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return res.status(500).json({ error: "Could not send notification email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}