import "./Cards.css";
import {
  ClipboardList,
  Stethoscope,
  HeartPulse,
  Pill,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Prescription Filling",
    desc: "Quick and accurate dispensing of your prescribed medicines by our pharmacists.",
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "Expert Consultation",
    desc: "Personal guidance from experienced pharmacists on medicines and dosage.",
  },
  {
    id: 3,
    icon: HeartPulse,
    title: "BP Check",
    desc: "Convenient in-store blood pressure monitoring with professional advice.",
  },
  {
    id: 4,
    icon: Pill,
    title: "Medicine Availability",
    desc: "Assistance in finding out-of-stock or hard-to-find medicines and suitable alternatives.",
  },
];

function Services() {
  return (
    <section className="products">
      <div className="container">

        <div className="section-heading">
          <span className="badge">● Our Services</span>

          <h2>🌿Healthcare Beyond Medicines🌿</h2>

          <p>
            Supporting your wellbeing with trusted pharmacy services.
          </p>
        </div>

        <div className="grid">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div className="sw-column" key={service.id}>
                <div className="sw-card">

                  <div className="sw-content">

                    <div className="sw-icon">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.desc}</p>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;