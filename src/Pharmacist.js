import React from "react";
import "./About.css";

const Pharmacist = () => {
  return (
    <section className="pharmacist-section">
      <div className="pharmacist-container">
        <div className="about-grid">
          

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
              <span>✓</span> Expert Pharmacist
            </div>
            <div>
              <span>✓</span> Trusted Advice
            </div>
          </div>

          <a href="tel:+919818125138" ><button className="btn-white" >Call For Enquiry </button></a>
        </div>
        </div>


      </div>
    </section>
  );
};

export default Pharmacist;