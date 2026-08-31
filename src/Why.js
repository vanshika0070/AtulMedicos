import "./Cards.css";
import {
  ShieldCheck,
  Users,
  Handshake,
  Award,
} from "lucide-react";

const WhyData = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Genuine Medicines",
    desc: "Every medicine is sourced from authorised distributors, ensuring authenticity and quality.",
  },
  {
    id: 2,
    icon: Users,
    title: "Qualified Pharmacists",
    desc: "Our experienced pharmacists provide trusted advice and answer your healthcare questions.",
  },
  {
    id: 3,
    icon: Handshake,
    title: "Personalized Care",
    desc: "We understand your needs and help you choose the right healthcare products.",
  },
  {
    id: 4,
    icon: Award,
    title: "Trusted Since 1993",
    desc: "Serving families with trusted care and reliable healthcare for over 30 years.",
  },
];

function Why() {
  return (
    <section className="products">
      <div className="container">

        <div className="section-heading">
          <span className="badge">● Trusted Care</span>

          <h2>🌿Why Families Trust Us🌿</h2>

          <p>
            Providing trusted healthcare products and friendly service
            you can rely on every day.
          </p>
        </div>

        <div className="grid">
          {WhyData.map((item) => {
            const Icon = item.icon;

            return (
              <div className="products-column" key={item.id}>
                <div className="sw-card">

                  <div className="sw-content">

                    <div className="sw-icon">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

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

export default Why;