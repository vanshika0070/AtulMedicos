import {
  ClipboardList,
  Stethoscope,
  HeartPulse,
  PillBottle,
  ShieldCheck,
  GraduationCap,
  UserRound,
  Award,
} from "lucide-react";

// ---- Design tokens (matched to existing Atul Medicos brand) ----
// Navy heading:  #1B2559
// Green accent:  #1F9D55
// Green dark:    #15803D
// Body gray:     #5B6B85
// Surface alt:   #EAF1FB
// Surface card:  #FFFFFF

const services = [
  {
    icon: ClipboardList,
    title: "Prescription Filling",
    body: "Quick and accurate dispensing of your prescribed medicines by our experienced pharmacists.",
  },
  {
    icon: Stethoscope,
    title: "Expert Consultation",
    body: "Personal guidance from experienced pharmacists on medicines and dosage.",
  },
  {
    icon: HeartPulse,
    title: "BP Check",
    body: "Convenient in-store blood pressure monitoring with professional advice.",
  },
  {
    icon: PillBottle,
    title: "Medicine Availability",
    body: "Assistance in finding out-of-stock or hard-to-find medicines and suitable alternatives.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Genuine Medicines",
    body: "Every medicine is sourced from authorised distributors, ensuring authenticity and quality.",
  },
  {
    icon: GraduationCap,
    title: "Qualified Pharmacists",
    body: "Our experienced pharmacists provide trusted advice and answer your healthcare questions.",
  },
  {
    icon: UserRound,
    title: "Personalized Care",
    body: "We understand your needs and help you choose the right healthcare products.",
  },
  {
    icon: Award,
    title: "Trusted Since 1993",
    body: "Serving families with trusted care and reliable healthcare for over 30 years.",
  },
];

function Eyebrow({ children }) {
  return (
    <span
      className="text-sm font-semibold px-4 py-1.5 rounded-full border mb-5"
      style={{ borderColor: "#1F9D55", color: "#15803D" }}
    >
      ● {children}
    </span>
  );
}

function Card({ icon: Icon, title, body, accent }) {
  return (
    <div
      className="bg-white rounded-2xl p-7 shadow-sm border border-transparent hover:shadow-lg hover:-translate-y-1 hover:border-[#1F9D55]/25 transition-all duration-200"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: accent ? "#FDEBEF" : "#E6F7EC" }}
      >
        <Icon size={22} color={accent ? "#D63A6A" : "#1F9D55"} strokeWidth={2.1} />
      </div>
      <h3 className="font-bold text-lg mb-2" style={{ color: "#1B2559" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#5B6B85" }}>
        {body}
      </p>
    </div>
  );
}

export default function ServicesAndTrust() {
  return (
    <div style={{ background: "#EAF1FB" }} className="w-full font-sans">
      {/* ---------------- SERVICES ---------------- */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col items-center text-center mb-14">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: "#1B2559" }}>
            Healthcare Beyond Medicines
          </h2>
          <p className="mt-3 max-w-md" style={{ color: "#5B6B85" }}>
            Supporting your wellbeing with trusted pharmacy services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Card key={s.title} {...s} accent={s.title === "BP Check"} />
          ))}
        </div>
      </section>

      {/* thin divider so the two sections read as related but distinct */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: "#CBDCF2" }} />
      </div>

      {/* ---------------- TRUST ---------------- */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="flex flex-col items-center text-center mb-14">
          <Eyebrow>Trusted Care</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: "#1B2559" }}>
            Why Families Trust Us
          </h2>
          <p className="mt-3 max-w-md" style={{ color: "#5B6B85" }}>
            Provide trusted healthcare products and friendly service you can rely on every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((t) => (
            <Card key={t.title} {...t} />
          ))}
        </div>
      </section>
    </div>
  );
}
