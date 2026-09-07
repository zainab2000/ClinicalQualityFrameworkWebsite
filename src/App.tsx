import { useState } from "react";

const NAV_LINKS = ["Framework", "Assessment", "Core Variables", "Pillars", "HEP"];

const CORE_VARIABLES = [
  {
    label: "Pain Intensity",
    abbr: "VAS / NRS",
    desc: "Numerical Rating Scale (0–10) and Visual Analogue Scale for subjective pain quantification at each session.",
    unit: "0–10",
    color: "border-teal-mid",
  },
  {
    label: "Range of Motion",
    abbr: "ROM",
    desc: "Goniometric measurement of active and passive joint angles to track mobility restoration over the treatment course.",
    unit: "degrees°",
    color: "border-teal",
  },
  {
    label: "Muscle Power",
    abbr: "MRC Scale",
    desc: "Medical Research Council grading (0–5) quantifying motor strength against manual resistance across affected muscle groups.",
    unit: "Grade 0–5",
    color: "border-teal-mid",
  },
  {
    label: "Tissue Strain",
    abbr: "Load Index",
    desc: "Objective assessment of soft tissue load tolerance using standardized provocative tests and algometry where indicated.",
    unit: "kPa / N",
    color: "border-teal",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Patient History",
    desc: "Structured intake capturing chief complaint, mechanism of injury, medical history, medications, and psychosocial factors including fear-avoidance and catastrophizing.",
  },
  {
    num: "02",
    title: "Physical Examination",
    desc: "Systematic regional assessment: posture, gait, palpation, neurological screening, and special orthopaedic tests calibrated to the clinical presentation.",
  },
  {
    num: "03",
    title: "Targeted Testing",
    desc: "Condition-specific validated outcome measures (DASH, KOOS, Oswestry, FABQ) establish objective baselines for ongoing progress benchmarking.",
  },
  {
    num: "04",
    title: "Database Integration",
    desc: "Findings are encoded into a structured clinical database enabling longitudinal tracking, inter-rater comparison, and audit-ready reporting.",
  },
  {
    num: "05",
    title: "Intervention Design",
    desc: "Evidence-guided treatment plan combining manual therapy, therapeutic exercise, electrophysical agents, and patient education matched to ICF categories.",
  },
  {
    num: "06",
    title: "Outcome Review",
    desc: "Regular reassessment against baseline measurements informs discharge planning, HEP progression, and interprofessional communication.",
  },
];

const PILLARS = [
  {
    icon: "◈",
    title: "Valid & Reliable Measurement",
    desc: "Every metric used in clinical decision-making must demonstrate psychometric soundness — acceptable ICC, MDC, and MCID thresholds for the target population.",
  },
  {
    icon: "◈",
    title: "Clinical Expertise",
    desc: "The therapist's reasoning, pattern recognition, and manual proficiency are irreplaceable complements to standardized protocols.",
  },
  {
    icon: "◈",
    title: "Practitioner–Patient Communication",
    desc: "Shared decision-making, motivational interviewing, and plain-language education underpin adherence and therapeutic alliance.",
  },
  {
    icon: "◈",
    title: "Interprofessional Collaboration",
    desc: "Co-ordinated care with physicians, radiologists, sports scientists, and psychologists ensures treatment addresses the whole person.",
  },
  {
    icon: "◈",
    title: "Home Exercise Program",
    desc: "Structured HEP with load progression principles, written instructions, and digital tracking tools extends therapeutic gains beyond the clinic.",
  },
  {
    icon: "◈",
    title: "Continuous Development",
    desc: "Case study analysis, journal club participation, and systematic research application keep clinical practice current with evolving evidence.",
  },
];

const HEP_PHASES = [
  { phase: "Phase I", label: "Acute Protection", weeks: "Wk 1–2", focus: "Pain neuroscience education, gentle AROM, isometric loading below pain threshold." },
  { phase: "Phase II", label: "Controlled Loading", weeks: "Wk 3–6", focus: "Progressive isotonic strengthening, proprioceptive drills, soft tissue mobility." },
  { phase: "Phase III", label: "Functional Integration", weeks: "Wk 7–12", focus: "Sport/task-specific movement patterns, power development, return-to-activity testing." },
  { phase: "Phase IV", label: "Self-Management", weeks: "Ongoing", focus: "Independent maintenance program, activity monitoring, flare-up management protocols." },
];

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "var(--font-sans)", background: "var(--color-warm)", color: "var(--color-ink)" }}
    >
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ borderColor: "var(--color-rule)", background: "var(--color-warm)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-6 flex items-center justify-center text-xs"
              style={{ background: "var(--color-teal)", color: "#fff", fontFamily: "var(--font-mono)" }}
            >
              CQ
            </div>
            <span className="text-sm font-500 tracking-wide uppercase" style={{ letterSpacing: "0.08em" }}>
              CliniqMetrics
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: "var(--color-slate)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-teal)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-slate)")}
              >
                {l}
              </a>
            ))}
          </div>
          <button
            className="hidden md:block text-xs px-4 py-2 font-500 transition-all"
            style={{
              background: "var(--color-teal)",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.06em",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="framework" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p
              className="text-xs uppercase mb-6 tracking-widest"
              style={{ color: "var(--color-teal)", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}
            >
              Clinical Quality Framework — Physical Therapy
            </p>
            <h1
              className="text-5xl lg:text-7xl leading-none mb-8"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.01em", lineHeight: 1.05 }}
            >
              Evidence-Based
              <br />
              <em>Clinical Practice,</em>
              <br />
              Measured Precisely.
            </h1>
            <p className="text-base lg:text-lg leading-relaxed max-w-xl" style={{ color: "var(--color-slate)" }}>
              A structured framework for physical therapists to standardize assessment, track core clinical variables,
              and deliver measurable patient outcomes through interprofessional collaboration.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                className="px-6 py-3 text-sm font-600 transition-all"
                style={{ background: "var(--color-teal)", color: "#fff" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              >
                Explore the Framework
              </button>
              <button
                className="px-6 py-3 text-sm font-500 border transition-all"
                style={{ borderColor: "var(--color-rule)", color: "var(--color-slate)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "var(--color-teal)";
                  (e.target as HTMLElement).style.color = "var(--color-teal)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "var(--color-rule)";
                  (e.target as HTMLElement).style.color = "var(--color-slate)";
                }}
              >
                Download Protocol PDF
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px" style={{ border: "1px solid var(--color-rule)" }}>
            {[
              { val: "4", label: "Core Variables" },
              { val: "6", label: "Process Steps" },
              { val: "4", label: "HEP Phases" },
              { val: "6", label: "Quality Pillars" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-6"
                style={{ background: "var(--color-warm)", borderRight: "1px solid var(--color-rule)", borderBottom: "1px solid var(--color-rule)" }}
              >
                <div
                  className="text-4xl font-300 mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-teal)" }}
                >
                  {s.val}
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "var(--color-slate)", fontFamily: "var(--font-mono)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image strip */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <div className="w-full h-64 lg:h-80 overflow-hidden relative" style={{ background: "var(--color-teal-light)" }}>
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&h=500&fit=crop&auto=format"
              alt="Physical therapist conducting clinical assessment with a patient"
              className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: "var(--color-teal)" }}
            />
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section id="assessment" className="py-20 border-t" style={{ borderColor: "var(--color-rule)", background: "var(--color-mist)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-mono)" }}>
                Clinical Process
              </p>
              <h2 className="text-4xl leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Six-Step Assessment Methodology
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-base leading-relaxed" style={{ color: "var(--color-slate)" }}>
                A reproducible clinical pathway from first contact to outcome review, ensuring no assessment domain is missed and all findings feed into a structured medical database.
              </p>
            </div>
          </div>

          {/* Step selector */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ border: "1px solid var(--color-rule)" }}>
            <div className="lg:col-span-1 border-r" style={{ borderColor: "var(--color-rule)" }}>
              {PROCESS_STEPS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 transition-all border-b"
                  style={{
                    borderColor: "var(--color-rule)",
                    background: activeStep === i ? "var(--color-teal)" : "var(--color-warm)",
                    color: activeStep === i ? "#fff" : "var(--color-ink)",
                  }}
                >
                  <span
                    className="text-xs shrink-0"
                    style={{ fontFamily: "var(--font-mono)", opacity: activeStep === i ? 0.7 : 0.45 }}
                  >
                    {s.num}
                  </span>
                  <span className="text-sm font-500">{s.title}</span>
                </button>
              ))}
            </div>
            <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center" style={{ background: "var(--color-warm)" }}>
              <div
                className="text-6xl font-300 mb-2"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-teal)", opacity: 0.25 }}
              >
                {PROCESS_STEPS[activeStep].num}
              </div>
              <h3 className="text-3xl mb-5" style={{ fontFamily: "var(--font-serif)" }}>
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="text-base leading-relaxed max-w-lg" style={{ color: "var(--color-slate)" }}>
                {PROCESS_STEPS[activeStep].desc}
              </p>
              <div className="mt-8 flex gap-2">
                {PROCESS_STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="h-1 transition-all"
                    style={{
                      width: activeStep === i ? "2rem" : "0.5rem",
                      background: activeStep === i ? "var(--color-teal)" : "var(--color-rule)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Variables */}
      <section id="core-variables" className="py-20 border-t" style={{ borderColor: "var(--color-rule)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-mono)" }}>
                Baseline Measurement
              </p>
              <h2 className="text-4xl" style={{ fontFamily: "var(--font-serif)" }}>
                Four Core Clinical Variables
              </h2>
            </div>
            <p className="hidden lg:block text-sm max-w-xs text-right" style={{ color: "var(--color-slate)" }}>
              Each variable is tracked at every session against the established baseline measurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ border: "1px solid var(--color-rule)" }}>
            {CORE_VARIABLES.map((v, i) => (
              <div
                key={i}
                className="p-8 group cursor-default transition-all"
                style={{ background: "var(--color-warm)", borderLeft: `3px solid var(--color-teal-light)` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--color-teal-light)";
                  (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--color-teal)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--color-warm)";
                  (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--color-teal-light)";
                }}
              >
                <div
                  className="text-xs mb-4 px-2 py-1 inline-block"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--color-teal)",
                    color: "#fff",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {v.abbr}
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {v.label}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-slate)" }}>
                  {v.desc}
                </p>
                <div
                  className="text-xs pt-4 border-t"
                  style={{
                    borderColor: "var(--color-rule)",
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-teal)",
                  }}
                >
                  Unit: {v.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section id="pillars" className="py-20 border-t" style={{ borderColor: "var(--color-rule)", background: "var(--color-ink)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-teal-mid)", fontFamily: "var(--font-mono)" }}>
                Treatment Success Factors
              </p>
              <h2 className="text-4xl leading-tight" style={{ fontFamily: "var(--font-serif)", color: "#fff" }}>
                Six Pillars of Clinical Quality
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Treatment outcomes emerge from the intersection of technical rigor, human skill, and systemic support. Each pillar reinforces the others.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
            {PILLARS.map((p, i) => (
              <div
                key={i}
                className="p-8 border transition-all cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(13,122,110,0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-teal-mid)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  className="text-xs mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal-mid)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg mb-4 font-400" style={{ fontFamily: "var(--font-serif)", color: "#fff" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEP Section */}
      <section id="hep" className="py-20 border-t" style={{ borderColor: "var(--color-rule)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-mono)" }}>
                Patient Self-Management
              </p>
              <h2 className="text-4xl leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Home Exercise Program Phasing
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 flex items-end">
              <p className="text-base leading-relaxed" style={{ color: "var(--color-slate)" }}>
                Structured progression from acute protection through independent self-management, with clear load thresholds and progression criteria at each phase.
              </p>
            </div>
          </div>

          <div className="flex gap-2 mb-8 flex-wrap">
            {HEP_PHASES.map((ph, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className="px-4 py-2 text-xs transition-all"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: activePhase === i ? "var(--color-teal)" : "var(--color-mist)",
                  color: activePhase === i ? "#fff" : "var(--color-slate)",
                  border: `1px solid ${activePhase === i ? "var(--color-teal)" : "var(--color-rule)"}`,
                  letterSpacing: "0.06em",
                }}
              >
                {ph.phase}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px border" style={{ borderColor: "var(--color-rule)" }}>
            <div
              className="lg:col-span-4 p-10 flex flex-col justify-between"
              style={{ background: "var(--color-teal)", color: "#fff" }}
            >
              <div>
                <div className="text-xs mb-2 opacity-60" style={{ fontFamily: "var(--font-mono)" }}>
                  {HEP_PHASES[activePhase].weeks}
                </div>
                <h3 className="text-3xl mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {HEP_PHASES[activePhase].phase}
                </h3>
                <div className="text-lg opacity-80" style={{ fontFamily: "var(--font-serif)" }}>
                  {HEP_PHASES[activePhase].label}
                </div>
              </div>
              <div className="flex gap-2 mt-8">
                {HEP_PHASES.map((_, i) => (
                  <div
                    key={i}
                    className="h-0.5 flex-1 transition-all"
                    style={{ background: activePhase === i ? "#fff" : "rgba(255,255,255,0.25)" }}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 p-10 lg:p-14" style={{ background: "var(--color-warm)" }}>
              <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--color-teal)", fontFamily: "var(--font-mono)" }}>
                Phase Focus
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-slate)" }}>
                {HEP_PHASES[activePhase].focus}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {["Frequency", "Compliance", "Progression Trigger"].map((label) => (
                  <div key={label} className="border-t pt-4" style={{ borderColor: "var(--color-rule)" }}>
                    <div className="text-xs mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal)" }}>
                      {label}
                    </div>
                    <div className="text-sm" style={{ color: "var(--color-slate)" }}>
                      Protocol-defined
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo + CTA */}
      <section className="border-t" style={{ borderColor: "var(--color-rule)", background: "var(--color-mist)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 lg:h-96 overflow-hidden" style={{ background: "var(--color-teal-light)" }}>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&auto=format"
              alt="Interprofessional clinical team reviewing patient case notes"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-teal)", fontFamily: "var(--font-mono)" }}>
              Interprofessional Practice
            </p>
            <h2 className="text-3xl lg:text-4xl mb-6 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Built for Collaboration Across the Medical Team
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-slate)" }}>
              CliniqMetrics integrates seamlessly with physician workflows, radiology reporting, and sports science data pipelines — enabling co-ordinated care plans that are grounded in shared, reproducible measurements.
            </p>
            <ul className="space-y-3">
              {[
                "Standardized referral and discharge summaries",
                "Shared measurement language across disciplines",
                "Case study and audit trail for CPD compliance",
                "Research integration via validated outcome tools",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-slate)" }}>
                  <span style={{ color: "var(--color-teal)", marginTop: "2px", flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t py-16" style={{ borderColor: "var(--color-rule)", background: "var(--color-warm)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b pb-12 mb-10" style={{ borderColor: "var(--color-rule)" }}>
            <div className="lg:col-span-7">
              <h2 className="text-4xl lg:text-5xl mb-4 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Standardize your clinical quality.
                <br />
                <em>Start measuring what matters.</em>
              </h2>
              <p className="text-base" style={{ color: "var(--color-slate)" }}>
                Join clinicians using CliniqMetrics to deliver reproducible, evidence-based physical therapy outcomes.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-sm mb-3 border outline-none"
                style={{ borderColor: "var(--color-rule)", background: "var(--color-mist)", fontFamily: "var(--font-sans)" }}
              />
              <button
                className="w-full py-3 text-sm font-600 transition-all"
                style={{ background: "var(--color-teal)", color: "#fff" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              >
                Request Early Access
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-5 h-5 flex items-center justify-center"
                style={{ background: "var(--color-teal)", color: "#fff", fontSize: "0.55rem", fontFamily: "var(--font-mono)" }}
              >
                CQ
              </div>
              <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--color-slate)" }}>
                CliniqMetrics
              </span>
            </div>
            <p className="text-xs" style={{ color: "var(--color-rule)", fontFamily: "var(--font-mono)" }}>
              © 2026 CliniqMetrics. Evidence-Based Clinical Quality Framework.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
