import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "",
);

const BUCKET = "associate-uploads";
const DAY_MS = 24 * 60 * 60 * 1000;
const DECLINED_AFTER_DAYS = 3;
const ABANDONED_AFTER_DAYS = 30;
const BATCH = 50;

// Deletes an applicant's uploaded files. Returns false if anything went wrong.
async function removeFiles(applicationId: string): Promise<boolean> {
  const { data: files, error } = await supabase.storage.from(BUCKET).list(applicationId, { limit: 100 });
  if (error) {
    console.error("Associate cleanup: could not list files", error);
    return false;
  }
  if (files && files.length > 0) {
    const { error: removeError } = await supabase.storage
      .from(BUCKET)
      .remove(files.map((file) => `${applicationId}/${file.name}`));
    if (removeError) {
      console.error("Associate cleanup: could not remove files", removeError);
      return false;
    }
  }
  return true;
}

// Called once a day by Vercel Cron (see vercel.json). Vercel sends: Authorization: Bearer <CRON_SECRET>
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const declinedBefore = new Date(Date.now() - DECLINED_AFTER_DAYS * DAY_MS).toISOString();
    const abandonedBefore = new Date(Date.now() - ABANDONED_AFTER_DAYS * DAY_MS).toISOString();

    const [declinedStage1, declinedFinal, abandoned] = await Promise.all([
      supabase
        .from("associate_applications")
        .select("id")
        .eq("stage1_status", "declined")
        .lt("stage1_decided_at", declinedBefore)
        .limit(BATCH),
      supabase
        .from("associate_applications")
        .select("id")
        .eq("final_status", "declined")
        .lt("final_decided_at", declinedBefore)
        .limit(BATCH),
      supabase
        .from("associate_applications")
        .select("id")
        .eq("stage1_status", "invited")
        .is("stage2_submitted_at", null)
        .lt("stage1_decided_at", abandonedBefore)
        .limit(BATCH),
    ]);

    const lookupErrors = [declinedStage1.error, declinedFinal.error, abandoned.error].filter(Boolean);
    if (lookupErrors.length > 0) {
      console.error("Associate cleanup: lookup failed", lookupErrors);
      return res.status(500).json({ error: "Lookup failed" });
    }

    const ids = Array.from(
      new Set(
        [...(declinedStage1.data || []), ...(declinedFinal.data || []), ...(abandoned.data || [])].map(
          (row) => row.id as string,
        ),
      ),
    );

    let deleted = 0;
    for (const id of ids) {
      const filesRemoved = await removeFiles(id);
      if (!filesRemoved) continue; // keep the record so we try again tomorrow

      const { error } = await supabase.from("associate_applications").delete().eq("id", id);
      if (error) {
        console.error("Associate cleanup: could not delete record", error);
        continue;
      }
      deleted += 1;
    }

    return res.status(200).json({ ok: true, found: ids.length, deleted });
  } catch (error) {
    console.error("Associate cleanup error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}