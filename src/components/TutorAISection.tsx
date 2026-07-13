import { useState } from "react";
import {
  ArrowRight,
  Route,
  MessagesSquare,
  Briefcase,
  ClipboardCheck,
  LayoutDashboard,
  Languages,
  Check,
  X,
  Mail,
  CalendarClock,
  Plus,
  Minus,
} from "lucide-react";
// import assessmentAsset from "@/assets/tutor-enterprise/assessment.png";
import lessonAsset from "@/assets/tutor-enterprise/lesson.png";
import dashboardAsset from "@/assets/tutor-enterprise/dashboard.png";

const NAVY = "#071522";
const SECONDARY_BG = "#F6F7F8";
const BORDER = "#E5E8EB";

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const PrimaryButton = ({
  children,
  onClick,
  dark = false,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  dark?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-tight transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
    style={{
      backgroundColor: dark ? "#ffffff" : NAVY,
      color: dark ? NAVY : "#ffffff",
    }}
  >
    {children}
  </button>
);

const SecondaryButton = ({
  children,
  onClick,
  dark = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  dark?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-tight transition-all hover:-translate-y-0.5"
    style={{
      backgroundColor: "transparent",
      color: dark ? "#ffffff" : NAVY,
      border: `1px solid ${dark ? "rgba(255,255,255,0.25)" : BORDER}`,
    }}
  >
    {children}
  </button>
);

const featureList = [
  { icon: Route, title: "Personalized Learning Paths", desc: "Every employee receives a training path calibrated to their starting level and learning style." },
  { icon: MessagesSquare, title: "AI Tutor", desc: "A conversational AI Tutor available throughout the course to clarify concepts on demand." },
  { icon: Briefcase, title: "Practical Business Lessons", desc: "Structured lessons grounded in real business scenarios, not abstract theory." },
  { icon: ClipboardCheck, title: "Knowledge Checks", desc: "Automatic quizzes and exercises that reinforce learning and measure understanding." },
  { icon: LayoutDashboard, title: "Management Dashboard", desc: "A single view for managers to monitor progress, quiz scores and completion rates." },
  { icon: Languages, title: "Multilingual Training", desc: "Deliver the same course across teams and geographies in multiple languages." },
];

const traditional = ["Instructor scheduling", "Manual coordination", "Same lesson for everyone", "Manual follow-up", "Manual progress tracking"];
const tutorAI = ["Personalized learning", "AI Tutor available anytime", "Automatic quizzes", "Real-time progress dashboard", "Self-paced learning"];

const steps = [
  { n: "1", title: "Choose the training topic.", desc: "Select the course that fits your team's objectives." },
  { n: "2", title: "Add your employees.", desc: "Assign licenses to the people who will follow the course." },
  { n: "3", title: "Employees start learning while managers monitor progress.", desc: "Track completion, quiz scores and engagement in real time." },
];

const faqs = [
  { q: "Can training topics be customized?", a: "Yes. Courses are built around your business objectives and can be tailored to specific roles, departments or industries." },
  { q: "Can employees revisit courses?", a: "Yes. Employees retain access to their assigned course and can revisit lessons, quizzes and the AI Tutor whenever they need." },
  { q: "How does the AI Tutor work?", a: "The AI Tutor is available throughout every lesson. Employees can ask questions in natural language and receive clear, contextual explanations aligned with the course material." },
  { q: "Can managers monitor progress?", a: "Yes. The Company Dashboard gives managers a real-time view of employee progress, quiz scores, completion rates and overall engagement." },
  { q: "Does the platform support multiple languages?", a: "Yes. Training can be delivered in multiple languages, making it suitable for international teams." },
  { q: "How does licensing work?", a: "Companies purchase licenses based on the chosen course and the number of employees. There are no subscriptions — employees retain access to their assigned course." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white transition-all" style={{ border: `1px solid ${BORDER}` }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
      >
        <span className="text-base md:text-lg font-medium" style={{ color: NAVY }}>{q}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ border: `1px solid ${BORDER}`, color: NAVY }}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 -mt-1 text-sm md:text-base leading-relaxed" style={{ color: "#4A5460" }}>{a}</div>
      )}
    </div>
  );
};

const inputBase = "w-full px-4 py-3 rounded-xl bg-white text-[15px] transition-all focus:outline-none focus:ring-2";

const EnterpriseContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", employees: "", topic: "", language: "", message: "" });
  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const payload = {
      _subject: `Tutor AI Enterprise - enquiry from ${form.company || form.name}`,
      "Full Name": form.name,
      "Business Email": form.email,
      Company: form.company,
      "Number of Employees": form.employees,
      "Training Topic": form.topic || "Not specified",
      "Preferred Language": form.language || "Not specified",
      Message: form.message || "No message provided",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@aviastudio.group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || data.success !== "true") {
        throw new Error("Email submission failed");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", company: "", employees: "", topic: "", language: "", message: "" });
    } catch {
      setSubmitError("Unable to send right now. Please email us directly at info@aviastudio.group.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const field = { border: `1px solid ${BORDER}`, color: NAVY } as React.CSSProperties;
  const labelCls = "text-xs font-medium uppercase tracking-[0.12em] mb-2 block";
  return (
    <form id="enterprise-form" onSubmit={onSubmit} className="p-6 md:p-10 rounded-3xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} style={{ color: "#6B7280" }}>Full Name</label>
          <input required maxLength={100} value={form.name} onChange={update("name")} className={inputBase} style={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={labelCls} style={{ color: "#6B7280" }}>Business Email</label>
          <input required type="email" maxLength={255} value={form.email} onChange={update("email")} className={inputBase} style={field} placeholder="jane@company.com" />
        </div>
        <div>
          <label className={labelCls} style={{ color: "#6B7280" }}>Company</label>
          <input required maxLength={120} value={form.company} onChange={update("company")} className={inputBase} style={field} placeholder="Acme Inc." />
        </div>
        <div>
          <label className={labelCls} style={{ color: "#6B7280" }}>Number of Employees</label>
          <select required value={form.employees} onChange={update("employees")} className={inputBase} style={field}>
            <option value="">Select a range</option>
            <option>1–10</option>
            <option>11–50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>500+</option>
          </select>
        </div>
        <div>
          <label className={labelCls} style={{ color: "#6B7280" }}>Training Topic</label>
          <input maxLength={120} value={form.topic} onChange={update("topic")} className={inputBase} style={field} placeholder="e.g. AI for Business" />
        </div>
        <div>
          <label className={labelCls} style={{ color: "#6B7280" }}>Preferred Language</label>
          <input maxLength={60} value={form.language} onChange={update("language")} className={inputBase} style={field} placeholder="e.g. English" />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls} style={{ color: "#6B7280" }}>Message</label>
          <textarea maxLength={1000} rows={5} value={form.message} onChange={update("message")} className={inputBase} style={field} placeholder="Tell us about your team and objectives." />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs" style={{ color: submitError ? "#B3261E" : "#7A8394" }}>
          {submitError || (submitted ? "Thanks, your enquiry has been sent." : "We'll get back to you within 1 business day.")}
        </p>
        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"} <ArrowRight className="w-4 h-4" />
        </PrimaryButton>
      </div>
    </form>
  );
};

const TutorAISection = () => {
  const goContact = () => scrollToId("enterprise-contact");
  return (
    <div className="bg-white" style={{ color: NAVY, fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: NAVY, color: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.9)" }}>
              Tutor AI Enterprise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              AI-powered training that adapts to every employee.
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.72)" }}>
              Create personalized corporate training based on each employee's starting level and learning style, with structured lessons, quizzes and an AI Tutor available throughout the learning experience.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton dark onClick={goContact}>Book a Demo <ArrowRight className="w-4 h-4" /></PrimaryButton>
              <SecondaryButton dark onClick={goContact}>Request a Proposal</SecondaryButton>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.6)", background: "rgba(255,255,255,0.02)" }}>
              <img src={lessonAsset} alt="Tutor AI Enterprise — Skill Assessment" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="px-6 lg:px-10 py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[76px] md:text-[128px] lg:text-[160px] font-semibold tracking-tight leading-none" style={{ color: NAVY, letterSpacing: "-0.04em" }}>
            ≈1,100
          </div>
          <div className="mt-6 text-lg md:text-2xl font-medium" style={{ color: NAVY }}>
            Working hours potentially recovered every year*
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base" style={{ color: "#4A5460" }}>
            Illustrative scenario based on a company with 10 employees saving approximately 30 minutes per employee per working day through effective AI adoption.
          </p>
          <div className="mt-16 grid md:grid-cols-2 rounded-3xl overflow-hidden text-left" style={{ border: `1px solid ${BORDER}` }}>
            <div className="p-8 md:p-10" style={{ backgroundColor: SECONDARY_BG }}>
              <div className="text-xs uppercase tracking-[0.14em] font-medium mb-6" style={{ color: "#6B7280" }}>Traditional Training</div>
              <ul className="space-y-4">
                {traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]" style={{ color: "#4A5460" }}>
                    <X className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#9AA3AF" }} strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10 bg-white" style={{ borderLeft: `1px solid ${BORDER}` }}>
              <div className="text-xs uppercase tracking-[0.14em] font-medium mb-6" style={{ color: NAVY }}>Tutor AI Enterprise</div>
              <ul className="space-y-4">
                {tutorAI.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]" style={{ color: NAVY }}>
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: NAVY }} strokeWidth={2.25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs md:text-[13px] leading-relaxed max-w-3xl mx-auto" style={{ color: "#7A8394" }}>
            *Illustrative scenario assuming 10 employees and approximately 30 minutes of productivity improvement per employee per working day after effective AI adoption. Actual results depend on the organization, training topic and employee usage.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 lg:px-10 py-24 md:py-32" style={{ backgroundColor: SECONDARY_BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: NAVY }}>
              Corporate training built around people, not presentations.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureList.map((f) => (
              <div key={f.title} className="p-7 rounded-2xl bg-white transition-all hover:-translate-y-0.5" style={{ border: `1px solid ${BORDER}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: SECONDARY_BG, border: `1px solid ${BORDER}` }}>
                  <f.icon className="w-5 h-5" style={{ color: NAVY }} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-medium mb-2" style={{ color: NAVY }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5460" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT EXPERIENCE */}
      <section className="px-6 lg:px-10 py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: NAVY }}>
              A complete learning experience.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: "#4A5460" }}>
              From the initial skill assessment to daily lessons and practical exercises, every step is designed to make learning measurable and effective.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="rounded-2xl overflow-hidden order-2 lg:order-1" style={{ border: `1px solid ${BORDER}` }}>
              <img src={lessonAsset} alt="Tutor AI Enterprise — Training Lesson with AI Tutor" className="w-full h-auto block" />
            </div>
            <div className="order-1 lg:order-2">
              <ul className="space-y-5">
                {[
                  ["Skill assessment", "Understand each employee's starting level before the course begins."],
                  ["Personalized lessons", "Content adapts to the learner's level and preferred learning style."],
                  ["Practical examples", "Real business scenarios that make concepts immediately usable."],
                  ["Exercises", "Hands-on activities that reinforce what has just been taught."],
                  ["Quizzes", "Automatic knowledge checks with instant feedback."],
                  ["AI Tutor", "A conversational assistant available throughout every lesson."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY }}>
                      <Check className="w-3.5 h-3.5" style={{ color: "#fff" }} strokeWidth={2.5} />
                    </span>
                    <div>
                      <div className="font-medium text-base" style={{ color: NAVY }}>{title}</div>
                      <div className="text-sm mt-1 leading-relaxed" style={{ color: "#4A5460" }}>{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="px-6 lg:px-10 py-24 md:py-32" style={{ backgroundColor: SECONDARY_BG }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: NAVY }}>
              Complete visibility for managers.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: "#4A5460" }}>
              A single dashboard to monitor every employee's journey and measure the impact of training across the organization.
            </p>
            <ul className="mt-8 space-y-3">
              {["Monitor employees", "Track progress", "View quiz scores", "Measure completion", "Everything from one dashboard"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px]" style={{ color: NAVY }}>
                  <Check className="w-4 h-4" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden bg-white" style={{ border: `1px solid ${BORDER}` }}>
            <img src={dashboardAsset} alt="Tutor AI Enterprise — Company Dashboard" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 lg:px-10 py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: NAVY }}>How it works.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="p-8 rounded-2xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-6" style={{ backgroundColor: NAVY, color: "#fff" }}>
                  {s.n}
                </div>
                <h3 className="text-lg font-medium mb-2" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5460" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL MODEL */}
      <section className="px-6 lg:px-10 py-24 md:py-32" style={{ backgroundColor: NAVY, color: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Simple licensing. No subscriptions.</h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Companies purchase licenses based on the chosen course and the number of employees. Employees retain access to their assigned course.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
            {[
              ["Course", "Choose the training topic that matches your team's goals."],
              ["Number of Employees", "Assign licenses to the people who will take the course."],
            ].map(([t, d]) => (
              <div key={t} className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <div className="text-sm font-medium">{t}</div>
                <div className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>{d}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <PrimaryButton dark onClick={goContact}>Request a Proposal <ArrowRight className="w-4 h-4" /></PrimaryButton>
            <SecondaryButton dark onClick={goContact}>Book a Demo</SecondaryButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-12" style={{ color: NAVY }}>
            Frequently asked questions.
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="enterprise-contact" className="px-6 lg:px-10 py-24 md:py-32" style={{ backgroundColor: SECONDARY_BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: NAVY }}>
              Let's discuss your team's training.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: "#4A5460" }}>
              Tell us about your organization and objectives. We'll get back to you with a tailored proposal and a walkthrough of Tutor AI Enterprise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <a href="mailto:info@aviastudio.group" className="p-8 rounded-2xl bg-white transition-all hover:-translate-y-0.5 block" style={{ border: `1px solid ${BORDER}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: SECONDARY_BG, border: `1px solid ${BORDER}` }}>
                <Mail className="w-5 h-5" style={{ color: NAVY }} strokeWidth={1.75} />
              </div>
              <div className="text-xs uppercase tracking-[0.14em] font-medium mb-1" style={{ color: "#6B7280" }}>Email</div>
              <div className="text-lg font-medium" style={{ color: NAVY }}>info@aviastudio.group</div>
              <div className="text-sm mt-2" style={{ color: "#4A5460" }}>Business enquiries</div>
            </a>
            <button type="button" onClick={() => scrollToId("enterprise-form")} className="p-8 rounded-2xl bg-white text-left transition-all hover:-translate-y-0.5" style={{ border: `1px solid ${BORDER}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: SECONDARY_BG, border: `1px solid ${BORDER}` }}>
                <CalendarClock className="w-5 h-5" style={{ color: NAVY }} strokeWidth={1.75} />
              </div>
              <div className="text-xs uppercase tracking-[0.14em] font-medium mb-1" style={{ color: "#6B7280" }}>Schedule a Demo</div>
              <div className="text-lg font-medium" style={{ color: NAVY }}>Book a live walkthrough</div>
              <div className="text-sm mt-2" style={{ color: "#4A5460" }}>Send us your details below</div>
            </button>
          </div>
          <EnterpriseContactForm />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 lg:px-10 py-24 md:py-32" style={{ backgroundColor: NAVY, color: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Start building a smarter workforce.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <PrimaryButton dark onClick={goContact}>Book a Demo <ArrowRight className="w-4 h-4" /></PrimaryButton>
            <SecondaryButton dark onClick={goContact}>Request a Proposal</SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorAISection;