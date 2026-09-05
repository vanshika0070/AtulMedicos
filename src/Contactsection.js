import "./Style.css";
import ContactForm from "./ContactForm";

import {
  Pill,
  ClipboardList,
  Stethoscope,
  Zap,
} from "lucide-react";

function Contactsection() {
  return (
    <section className="Contactsection" id="contact">
      <div className="container">

        <div className="section-heading">
          <span className="badge">● Healthcare Support</span>

          <h2>🌿 Looking for a Medicine? 🌿</h2>

          <p>
            Can't find what you need? Ask us about availability.
          </p>
        </div>

        <div className="about-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="form-heading">
              <h3>
                How Can We <span>Help?</span>
              </h3>
            </div>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <span className="contact-icon">
                  <Pill />
                </span>

                <div>
                  <small>Medicine Availability</small>

                  <p className="contact-info-text">
                    Check availability of medicines
                  </p>
                </div>
              </div>

              <hr/>

              <div className="contact-info-item">
                <span className="contact-icon">
                  <ClipboardList />
                </span>

                <div>
                  <small>Prescription Exquiry</small>

                  <p className="contact-info-text">
                    Upload your Prescription for assistance
                  </p>
                </div>
              </div>

              <hr/>

              <div className="contact-info-item">
                <span className="contact-icon">
                  <Stethoscope />
                </span>

                <div>
                  <small>Product Guidance</small>

                  <p className="contact-info-text">
                    Get expert advice on theright products
                  </p>
                </div>
              </div>

    <hr/>
              <div className="store-call">
                  <div className="contact-info-item">
                      <div className="call-icon">
                        <Zap />
                      </div>
              
                      <div>          
                        <small>Quick & Easy</small>
                        <p className="contact-info-text"> Send your enquiry and we'll get back to you soon</p>     
                      </div>
                  </div>
              </div>
              
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="form-card">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contactsection;









