import { useEffect, useRef, useState, type FormEvent } from "react";
import { STAGE2_QUESTIONS, type Values } from "@/lib/associates-options";
import { DataNotice, Honeypot, QuestionList, buildAnswers, countNumbered, validate } from "@/components/associates/FormBits";

type UploadedFile = { path: string; name: string; size: number };

const ALLOWED = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"];
const MAX_BYTES = 4 * 1024 * 1024;
const MAX_FILES = 5;

export function Stage2Form({ token }: { token: string }) {
  const [status, setStatus] = useState<"checking" | "ready" | "invalid" | "done">("checking");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [profession, setProfession] = useState("");
  const [values, setValues] = useState<Values>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");
  const uploaded = useRef<Map<string, UploadedFile>>(new Map());
  const topRef = useRef<HTMLDivElement>(null);
  const firstExtra = countNumbered(STAGE2_QUESTIONS) + 1;

  useEffect(() => {
    if (!/^[a-f0-9]{48}$/.test(token)) {
      setStatus("invalid");
      setMessage("This link is not valid. Please use the link in the email we sent you.");
      return;
    }
    fetch(`/api/associate-stage2?ref=${encodeURIComponent(token)}`)
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          setStatus("invalid");
          setMessage(data.error || "This link is not valid.");
          return;
        }
        setFirstName(data.firstName || "");
        setProfession(data.profession || "");
        setStatus("ready");
      })
      .catch(() => {
        setStatus("invalid");
        setMessage("We could not check your link. Please refresh the page and try again.");
      });
  }, [token]);

  function setValue(id: string, value: string | string[]) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function addFiles(list: FileList | null) {
    if (!list) return;
    const next = [...files];
    let problem = "";
    for (const file of Array.from(list)) {
      const lower = file.name.toLowerCase();
      if (!ALLOWED.some((ext) => lower.endsWith(ext))) {
        problem = `${file.name}: only PDF, JPG, PNG, DOC and DOCX files are accepted.`;
        continue;
      }
      if (file.size > MAX_BYTES) {
        problem = `${file.name} is larger than 4MB.`;
        continue;
      }
      if (next.length >= MAX_FILES) {
        problem = "You can attach up to 5 files.";
        break;
      }
      if (next.some((f) => f.name === file.name && f.size === file.size)) continue;
      next.push(file);
    }
    setFiles(next);
    setFileError(problem);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const problem =
      validate(STAGE2_QUESTIONS, values) ||
      (confirm ? null : "Please confirm that the information you provided is accurate.") ||
      (consent ? null : "Please tick the consent box to continue.");
    if (problem) {
      setError(problem);
      return;
    }

    setSending(true);
    try {
      const finalFiles: UploadedFile[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const key = `${file.name}|${file.size}|${file.lastModified}`;
        let done = uploaded.current.get(key);
        if (!done) {
          setProgress(`Uploading file ${i + 1} of ${files.length}...`);
          const response = await fetch(
            `/api/associate-upload?ref=${encodeURIComponent(token)}&name=${encodeURIComponent(file.name)}`,
            { method: "POST", headers: { "Content-Type": "application/octet-stream" }, body: file },
          );
          const data = await response.json().catch(() => ({}));
          if (!response.ok) throw new Error(`${file.name}: ${data.error || "upload failed. Please try again."}`);
          done = { path: data.path, name: data.name, size: data.size };
          uploaded.current.set(key, done);
        }
        finalFiles.push(done);
      }

      setProgress("Submitting your application...");
      const response = await fetch("/api/associate-stage2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ref: token,
          answers: buildAnswers(STAGE2_QUESTIONS, values),
          files: finalFiles,
          consent: true,
          confirm: true,
          website,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Sorry, your application could not be sent. Please try again.");

      setStatus("done");
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
      setProgress("");
    }
  }

  if (status === "checking") {
    return <p className="text-muted-foreground">Checking your link...</p>;
  }

  if (status === "invalid") {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-[var(--shadow-card)]">
        <p className="font-display text-xl font-bold text-navy">We cannot open this form</p>
        <p className="mt-2 text-muted-foreground">{message}</p>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div ref={topRef} className="rounded-2xl border border-border bg-white p-8 py-14 text-center shadow-[var(--shadow-card)]">
        <p className="font-display text-2xl font-bold text-navy">Stage 2 received</p>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Thank you. Our founder will review your application and we will be in touch by email. Admission to the
          platform does not guarantee any particular project or payment.
        </p>
      </div>
    );
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      <p className="mb-6 text-lg text-secondary">
        Welcome{firstName ? `, ${firstName}` : ""}. {profession ? `You applied as: ${profession}. ` : ""}
        Please complete the full assessment below. It takes about 30 minutes.
      </p>

      <form
        onSubmit={handleSubmit}
        className="relative space-y-6 rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] md:p-8"
      >
        <QuestionList questions={STAGE2_QUESTIONS} values={values} onChange={setValue} />

        <div>
          <h3 className="mb-4 mt-6 border-b border-border pb-2 font-display text-lg font-semibold text-navy">
            Supporting documents
          </h3>
          <p className="text-sm font-semibold text-navy">{firstExtra}. Upload your portfolio, certificates and other documents</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Optional. Examples: professional certificates or trade qualifications, registration or licence, portfolio
            or work samples, business registration documents, evidence of training. Up to 5 files, each 4MB or smaller
            (PDF, JPG, PNG, DOC or DOCX). Only upload documents relevant to your profession.
          </p>
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
            className="mt-3 block w-full text-sm"
          />
          {fileError && <p className="mt-2 text-sm text-red-600">{fileError}</p>}
          {files.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {files.map((file) => (
                <li key={`${file.name}-${file.size}`} className="flex items-center justify-between gap-3 rounded-md bg-muted/40 px-3 py-2 text-sm">
                  <span className="truncate">{file.name} ({Math.max(1, Math.round(file.size / 1024))} KB)</span>
                  <button
                    type="button"
                    onClick={() => setFiles(files.filter((f) => f !== file))}
                    className="shrink-0 font-semibold text-primary"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Honeypot value={website} onChange={setWebsite} />

        <div className="space-y-3 rounded-xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-secondary">
          <p className="font-display font-semibold text-navy">Declaration and consent</p>
          <p>
            I declare that the information provided in this application is accurate and complete to the best of my
            knowledge. I understand that Adedara Ola & Co. may review my application, request additional information,
            verify relevant qualifications or references, and assess my suitability before making an admission decision.
          </p>
          <p>
            I understand that submitting this form does not automatically make me an associate of Adedara Ola & Co. or
            guarantee future project opportunities.
          </p>
          <p>
            I further understand that admission into the Real Estate Associate Platform does not, by itself, constitute
            an offer of employment or guarantee any project, payment or minimum volume of work. Any project engagement
            will be subject to a separate agreement defining the scope of work, deliverables, timelines, fees, payment
            terms and other applicable conditions.
          </p>
          <p>
            I agree to provide professional services honestly and responsibly and to comply with applicable laws,
            relevant professional standards and the terms of any project agreement I subsequently accept.
          </p>
        </div>

        <label className="flex items-start gap-2 text-sm text-secondary">
          <input type="checkbox" checked={confirm} onChange={(e) => setConfirm(e.target.checked)} className="mt-0.5 accent-[var(--primary)]" />
          <span>
            {firstExtra + 1}. Yes, I confirm that the information provided is accurate and that I understand the conditions stated
            above. <span className="text-red-600">*</span>
          </span>
        </label>

        <DataNotice />

        <label className="flex items-start gap-2 text-sm text-secondary">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-[var(--primary)]" />
          <span>
            {firstExtra + 1}. Yes, I consent to Adedara Ola & Co. using the information provided to assess my application and contact
            me regarding recruitment and relevant project opportunities. <span className="text-red-600">*</span>
          </span>
        </label>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
        {progress && <p className="text-sm text-muted-foreground">{progress}</p>}

        <button
          disabled={sending}
          className="w-full rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Please wait..." : "Submit Stage 2 application"}
        </button>
      </form>
    </div>
  );
}