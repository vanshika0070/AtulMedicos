import React from "react";
import "./About.css";

const Pharmacist = () => {
  return (
    <section className="pharmacist-section">
      <div className="pharmacist-container">

        <div className="pharmacist-image">
          <img
            src="/images/pharmacist.png"
            alt="Pharmacist"
          />
        </div>

        <div className="pharmacist-content">
          <span className="badge">● Qualified healthcare professional</span>

          <h2>Your Local Pharmacy Expert</h2>

          <h3>Dinesh Kumar</h3>
          <p className="qualification">
            Licensed Pharmacist | B.Pharm
          </p>

          <p className="message">
            "At our pharmacy, we believe healthcare is more than just
            medicines. It is about trust, guidance, and caring for every
            person who walks through our doors."
          </p>

          <div className="tag">
            <div>
              <span>✓</span> 30+ Years Experience
            </div>
            <div>
              <span>✓</span> Genuine Medicines
            </div>
            <div>
              <span>✓</span> Personalized Guidance
            </div>
          </div>

          <button className="pharmacist-btn">
            Contact Pharmacist
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pharmacist;