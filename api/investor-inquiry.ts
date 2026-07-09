import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

const resend = new Resend(process.env.RESEND_API_KEY || "");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      organization,
      email,
      phone,
      ticketSize,
      investmentFocus,
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        error: "Full name and email are required",
      });
    }

    const { error: supabaseError } = await supabase
      .from("investor_inquiries")
      .insert({
        full_name: fullName,
        organization,
        email,
        phone,
        ticket_size: ticketSize,
        investment_focus: investmentFocus,
      });

    if (supabaseError) {
      console.error("Investor Supabase error:", supabaseError);
      return res.status(500).json({
        error: "Could not save investor inquiry",
      });
    }

    const emailResult = await resend.emails.send({
      from: "Adedara Ola Website <noreply@adedaraolaandco.com>",
      to: process.env.CONTACT_RECEIVER_EMAIL || "",
      subject: `New investor inquiry from ${fullName}`,
      replyTo: email,
      html: `
        <h2>New Investor Inquiry</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Ticket Size:</strong> ${ticketSize || "Not provided"}</p>

        <h3>Investment Focus</h3>
        <p>${investmentFocus || "Not provided"}</p>
      `,
    });

    if (emailResult.error) {
      console.error("Investor Resend error:", emailResult.error);
      return res.status(500).json({
        error: "Could not send notification email",
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Investor inquiry error:", error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
}