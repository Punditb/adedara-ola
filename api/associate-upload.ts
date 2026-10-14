import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "",
);

const BUCKET = "associate-uploads";
const MAX_BYTES = 4 * 1024 * 1024;
const MAX_FILES = 5;

const TYPES: Record<string, string> = {
  pdf: "application/pdf",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function looksValid(ext: string, data: Buffer): boolean {
  const hex = data.subarray(0, 4).toString("hex");
  if (ext === "pdf") return data.subarray(0, 4).toString("latin1") === "%PDF";
  if (ext === "png") return hex === "89504e47";
  if (ext === "jpg" || ext === "jpeg") return hex.startsWith("ffd8ff");
  if (ext === "docx") return hex === "504b0304";
  if (ext === "doc") return hex === "d0cf11e0";
  return false;
}

// The browser sends ONE file as the raw request body (Content-Type: application/octet-stream).
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const ref = String(req.query.ref || "");
    const rawName = String(req.query.name || "file").slice(0, 200);

    if (!/^[a-f0-9]{48}$/.test(ref)) {
      return res.status(400).json({ error: "This link is not valid." });
    }

    const data = req.body;
    if (!Buffer.isBuffer(data) || data.length === 0) {
      return res.status(400).json({ error: "No file received." });
    }
    if (data.length > MAX_BYTES) {
      return res.status(413).json({ error: "Each file must be 4MB or smaller." });
    }

    const ext = (rawName.split(".").pop() || "").toLowerCase();
    if (!TYPES[ext] || !looksValid(ext, data)) {
      return res.status(400).json({ error: "Only PDF, JPG, PNG, DOC and DOCX files are accepted." });
    }

    const { data: app } = await supabase
      .from("associate_applications")
      .select("id, stage1_status, stage2_submitted_at")
      .eq("token", ref)
      .maybeSingle();

    if (!app || app.stage1_status !== "invited" || app.stage2_submitted_at) {
      return res.status(403).json({ error: "This link cannot accept uploads." });
    }

    const { data: existing } = await supabase.storage.from(BUCKET).list(app.id, { limit: 20 });
    if ((existing?.length || 0) >= MAX_FILES) {
      return res.status(400).json({ error: "You can attach up to 5 files." });
    }

    const safeName = rawName.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(-80);
    const path = `${app.id}/${Date.now()}-${safeName}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, data, { contentType: TYPES[ext], upsert: false });

    if (uploadError) {
      console.error("Associate upload error:", uploadError);
      return res.status(500).json({ error: "Could not upload this file. Please try again." });
    }

    return res.status(200).json({ success: true, path, name: rawName.slice(0, 120), size: data.length });
  } catch (error) {
    console.error("Associate upload handler error:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}