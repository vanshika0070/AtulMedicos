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
  desc: "Quick and accurate dispensing of prescribed medicines by our pharmacy team.",
},

{
  id: 2,
  icon: Stethoscope,
  title: "Pharmacist Guidance",
  desc: "Get helpful guidance from our pharmacists about medicines and their proper use.",
},

{
  id: 3,
  icon: HeartPulse,
  title: "Blood Pressure Check",
  desc: "Convenient in-store blood pressure monitoring for your everyday health needs.",
},

{
  id: 4,
  icon: Pill,
  title: "Medicine Availability",
  desc: "Enquire about medicine availability and ask our team about suitable options when needed.",
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