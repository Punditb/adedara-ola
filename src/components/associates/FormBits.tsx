import { OTHER, type Question, type Values } from "@/lib/associates-options";

export const inputClass =
  "mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary";

export function isVisible(q: Question, values: Values): boolean {
  if (!q.showIf) return true;
  const dependency = values[q.showIf.id];
  return typeof dependency === "string" && q.showIf.in.includes(dependency);
}

// Questions that always show get serial numbers (1, 2, 3...).
// Follow-up questions that only appear after another answer carry no number.
export function numberMap(questions: Question[]): Record<string, number> {
  const map: Record<string, number> = {};
  let n = 0;
  for (const q of questions) {
    if (q.showIf) continue;
    n += 1;
    map[q.id] = n;
  }
  return map;
}

export function countNumbered(questions: Question[]): number {
  return questions.filter((q) => !q.showIf).length;
}

function titleFor(q: Question, numbers: Record<string, number>): string {
  return numbers[q.id] ? `${numbers[q.id]}. ${q.label}` : q.label;
}

export function answerKey(questions: Question[], id: string): string {
  const numbers = numberMap(questions);
  const q = questions.find((item) => item.id === id);
  return q ? titleFor(q, numbers) : id;
}

export function buildAnswers(questions: Question[], values: Values): Record<string, string | string[]> {
  const numbers = numberMap(questions);
  const out: Record<string, string | string[]> = {};
  for (const q of questions) {
    if (!isVisible(q, values)) continue;
    const raw = values[q.id];
    const other = String(values[`${q.id}__other`] || "").trim() || "(not specified)";
    const key = titleFor(q, numbers);
    if (q.type === "checkbox") {
      const list = Array.isArray(raw) ? raw : [];
      out[key] = list.map((item) => (item === OTHER ? `Other: ${other}` : item));
    } else {
      const text = typeof raw === "string" ? raw.trim() : "";
      out[key] = text === OTHER ? `Other: ${other}` : text;
    }
  }
  return out;
}

export function validate(questions: Question[], values: Values): string | null {
  const numbers = numberMap(questions);
  for (const q of questions) {
    if (!isVisible(q, values)) continue;
    const title = titleFor(q, numbers);
    const raw = values[q.id];
    const text = typeof raw === "string" ? raw.trim() : "";
    const list = Array.isArray(raw) ? raw : [];
    const empty = q.type === "checkbox" ? list.length === 0 : text === "";

    if (q.required && empty) return `Please answer: ${title}`;
    if (empty) continue;

    if (q.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      return `Please enter a valid email address: ${title}`;
    }
    if (q.type === "tel" && text.length < 6) return `Please enter a valid phone number: ${title}`;
    if (q.type === "url" && !/^https?:\/\//i.test(text)) {
      return `Please start the link with https:// : ${title}`;
    }
    const pickedOther = q.type === "checkbox" ? list.includes(OTHER) : text === OTHER;
    if (pickedOther && !String(values[`${q.id}__other`] || "").trim()) {
      return `Please specify your answer to: ${title}`;
    }
  }
  return null;
}

type OnChange = (id: string, value: string | string[]) => void;

type FieldProps = {
  q: Question;
  title: string;
  values: Values;
  onChange: OnChange;
};

function OtherInput({ q, values, onChange }: Omit<FieldProps, "title">) {
  return (
    <input
      type="text"
      value={String(values[`${q.id}__other`] || "")}
      onChange={(e) => onChange(`${q.id}__other`, e.target.value)}
      placeholder="Please specify"
      className={inputClass}
      maxLength={200}
    />
  );
}

function QuestionField({ q, title, values, onChange }: FieldProps) {
  const value = values[q.id];
  const text = typeof value === "string" ? value : "";
  const list = Array.isArray(value) ? value : [];
  const star = q.required ? <span className="text-red-600"> *</span> : null;
  const help = q.help ? <p className="mt-1 text-xs text-muted-foreground">{q.help}</p> : null;

  if (q.type === "textarea") {
    return (
      <div>
        <label htmlFor={q.id} className="text-sm font-semibold text-navy">{title}{star}</label>
        {help}
        <textarea id={q.id} rows={4} value={text} maxLength={3000} onChange={(e) => onChange(q.id, e.target.value)} className={inputClass} />
      </div>
    );
  }

  if (q.type === "select") {
    return (
      <div>
        <label htmlFor={q.id} className="text-sm font-semibold text-navy">{title}{star}</label>
        {help}
        <select id={q.id} value={text} onChange={(e) => onChange(q.id, e.target.value)} className={inputClass}>
          <option value="">Select...</option>
          {(q.options || []).map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {text === OTHER && <OtherInput q={q} values={values} onChange={onChange} />}
      </div>
    );
  }

  if (q.type === "radio" || q.type === "checkbox") {
    const options = q.options || [];
    const multi = q.type === "checkbox";
    const picked = (opt: string) => (multi ? list.includes(opt) : text === opt);
    const toggle = (opt: string) => {
      if (!multi) return onChange(q.id, opt);
      onChange(q.id, list.includes(opt) ? list.filter((item) => item !== opt) : [...list, opt]);
    };
    return (
      <fieldset>
        <legend className="text-sm font-semibold text-navy">{title}{star}</legend>
        {help}
        <div className={`mt-2 grid gap-x-6 gap-y-2 ${options.length > 6 ? "sm:grid-cols-2" : ""}`}>
          {options.map((opt) => (
            <label key={opt} className="flex items-start gap-2 text-sm text-secondary">
              <input
                type={multi ? "checkbox" : "radio"}
                name={q.id}
                checked={picked(opt)}
                onChange={() => toggle(opt)}
                className="mt-0.5 accent-[var(--primary)]"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
        {picked(OTHER) && <OtherInput q={q} values={values} onChange={onChange} />}
      </fieldset>
    );
  }

  return (
    <div>
      <label htmlFor={q.id} className="text-sm font-semibold text-navy">{title}{star}</label>
      {help}
      <input
        id={q.id}
        type={q.type}
        value={text}
        maxLength={200}
        onChange={(e) => onChange(q.id, e.target.value)}
        className={inputClass}
      />
    </div>
  );
}

export function QuestionList({ questions, values, onChange }: { questions: Question[]; values: Values; onChange: OnChange }) {
  const numbers = numberMap(questions);
  let lastSection = "";
  return (
    <div className="space-y-6">
      {questions
        .filter((q) => isVisible(q, values))
        .map((q) => {
          const showHeading = q.section !== lastSection;
          lastSection = q.section;
          return (
            <div key={q.id}>
              {showHeading && (
                <h3 className="mb-4 border-b border-border pb-2 pt-2 font-display text-lg font-semibold text-navy">
                  {q.section}
                </h3>
              )}
              <div className={q.showIf ? "ml-1 border-l-2 border-primary/30 pl-4" : ""}>
                <QuestionField q={q} title={titleFor(q, numbers)} values={values} onChange={onChange} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}

export function DataNotice() {
  return (
    <div className="rounded-xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-secondary">
      <p className="font-display font-semibold text-navy">How we use your information</p>
      <p className="mt-2">
        We collect the details you enter here, and any documents you upload at Stage 2, to assess your application to
        join the Adedara Ola & Co. Real Estate Associate Platform and to contact you about it. They are seen only by
        people at Adedara Ola & Co. who have access to our application records. If we do not take your application
        forward, we delete your details within 3 days of that decision. If you are invited to Stage 2 but do not complete it within 30 days, we delete your details. If you are admitted, we keep your details for as long as you remain on the platform. To ask about or correct your information, email
        adedaraolaproperties@gmail.com. Our full Privacy Policy is coming soon.
      </p>
    </div>
  );
}