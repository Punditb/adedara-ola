import { useRef, useState, type FormEvent } from "react";
import { STAGE1_QUESTIONS, type Values } from "@/lib/associates-options";
import { DataNotice, Honeypot, QuestionList, answerKey, buildAnswers, validate } from "@/components/associates/FormBits";

export function Stage1Form() {
  const [values, setValues] = useState<Values>({});
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  function setValue(id: string, value: string | string[]) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const problem = validate(STAGE1_QUESTIONS, values) || (consent ? null : "Please tick the consent box to continue.");
    if (problem) {
      setError(problem);
      return;
    }

    const answers = buildAnswers(STAGE1_QUESTIONS, values);
    const professionKey = answerKey(STAGE1_QUESTIONS, "q10");

    setSending(true);
    try {
      const response = await fetch("/api/associate-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: String(values.q1 || ""),
          email: String(values.q4 || ""),
          phone: String(values.q2 || ""),
          profession: String(answers[professionKey] || ""),
          answers,
          consent: true,
          website,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "Sorry, your application could not be sent. Please try again.");
        return;
      }
      setSent(true);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setError("Sorry, your application could not be sent. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      {sent ? (
        <div className="rounded-2xl border border-border bg-white p-8 py-14 text-center shadow-[var(--shadow-card)]">
          <p className="font-display text-2xl font-bold text-navy">Application received</p>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Thank you. Our founder reviews every application personally, and you can expect a reply within 5 business
            days. If your details are a good fit, we will email you instructions to continue to Stage 2. Please check
            your inbox, including your spam folder.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="relative space-y-6 rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] md:p-8"
        >
          <QuestionList questions={STAGE1_QUESTIONS} values={values} onChange={setValue} />
          <Honeypot value={website} onChange={setWebsite} />

          <DataNotice />

          <label className="flex items-start gap-2 text-sm text-secondary">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 accent-[var(--primary)]"
            />
            <span>
              I consent to Adedara Ola & Co. using the information in this form to assess my application and contact me
              about it, as explained in the notice above. <span className="text-red-600">*</span>
            </span>
          </label>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            disabled={sending}
            className="w-full rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Submitting..." : "Submit Stage 1 application"}
          </button>
        </form>
      )}
    </div>
  );
}