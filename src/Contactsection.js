
import "./Style.css";

import ContactForm from "./ContactForm";

function Contactsection() {
  return (
    <section className="Contactsection">
      <div className="container">
        <div className="section-heading">
          <span className="badge">● Healthcare Support</span>

          <h2>We're Here to Help</h2>

          <p>
            Open to new opportunities in Frontend Development and UI/UX Design.
          </p>
        </div>

        <div className="about-grid">
          {/* Left */}
          <div className="contact-info">
            <p className="subtitle">
              <strong>📞 Call Us:</strong> 9818125138, 9810933906
            </p>

            <p className="subtitle">
              <strong>💬 Whatsapp:</strong> 9818125138, 9810933906
            </p>

             <p className="subtitle">
              <strong>🕒 Opening Hours:</strong> 9:00 — 23:00
            </p>

            <p className="subtitle">
              <strong>📍 Address:</strong>
            </p>

            <a
  href="https://maps.google.com/?q=Atul+Medicos+Jeewan+Park+Uttam+Nagar+New+Delhi"
  target="_blank"
  rel="noopener noreferrer"
  className="map-link"
>
  <div className="map-cell">
    <div className="map-bg"></div>

      <div className="pin">
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 14,
          height: 14,
        }}
      >
        <div className="pin-pulse"></div>
        <div className="pin-dot"></div>
      </div>
    </div>

    <div className="map-label">
      <div className="map-address-tag">
        <span className="map-sub">
          Atul Medicos, Jeewan Park, Uttam Nagar
        </span>
        <span className="map-title">New Delhi</span>
      </div>


    </div>
  </div>
</a>
 
          </div>
          
          {/* Right */}
          <div className="form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactsection;







