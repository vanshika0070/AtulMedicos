import "./Cards.css";
import {
  ShieldCheck,
  Users,
  Handshake,
  Phone,
} from "lucide-react";

const WhyData = [
 {
  id: 1,
  icon: ShieldCheck,
  title: "Genuine Medicines",
  desc: "Medicines sourced through authorised channels to help ensure authenticity and quality.",
},

{
  id: 2,
  icon: Users,
  title: "Qualified Pharmacists",
  desc: "Our qualified pharmacists are available to assist with medicine-related questions.",
},

{
  id: 3,
  icon: Handshake,
  title: "Personalized Care",
  desc: "We take the time to understand your needs and help you find suitable healthcare products.",
},

{
  id: 4,
  icon: Phone,
  title: "Easy Enquiry",
  desc: "Quickly contact us to enquire about medicine and product availability.",
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