import { Link } from "react-router-dom";
import "./Banner.css";

import {
  FaShieldAlt,
  FaUserMd,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { HiOutlineBadgeCheck } from "react-icons/hi";

function Banner() {
  return (
    <section className="hero">
      <div className="container">

        {/* ================= LEFT ================= */}

        <div className="hero-left">

           <span className="tagged">
             <HiOutlineBadgeCheck />
           Trusted Pharmacy Since 1993
          </span>

          <div className="hero-title">
            <h1>Trusted Medicines.</h1>
            <h1 className="gray">Personal Care.</h1>
            <h1>Since 1993.</h1>

            <p>Quality medicines, wellness products and  professional  <br />pharmacy services to keep you and your family healthy everyday.</p>
          
            <div className="hero-buttons">
              <div className="buttons">

                <div className="button-group">
                  <Link to="/freelance" className="btn-white">
                    Explore Products
                  </Link>
                </div>

                <div className="button-group">
                  <Link to="/hire" className="btn-dark">
                    Visit Our Store
                  </Link>
                </div>

              </div>
            </div>
        </div>

          {/* Features */}

          <div className="hero-features">

            <div className="feature">

              <div className="feature-icon">

                <FaShieldAlt />

              </div>

              <div>

                <h4>100% Genuine <br /> Medicines</h4>

                <p>Quality products you can trust.</p>

              </div>

            </div>

            <div className="feature-divider"></div>

            <div className="feature">

              <div className="feature-icon">

                <FaUserMd />

              </div>

              <div>

                <h4>Expert <br /> Pharmacists</h4>

                <p>Professional guidance every day.</p>

              </div>

            </div>

            <div className="feature-divider"></div>

            <div className="feature">

              <div className="feature-icon">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h4>Convenient <br /> Location</h4>

                <p>Easy to reach whenever needed.</p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="hero-right">

          <div className="image-wrapper">

            <img
              src="/images/banner.webp"
              alt="Atul Medicos"
              className="hero-image"
            />

            {/* Store Card */}

            <div className="store-card">

              <div className="store-item">

                <FaMapMarkerAlt className="store-icon" />

                <div>

                  <h5>Visit Our Store</h5>

                  <small>Jeewan Park, Uttam Nagar, New Delhi</small>

                </div>

              </div>

              <div className="store-item">

                <FaClock className="store-icon" />

                <div>

                  <h5>Open Daily</h5>

                  <small>8:30 AM – 11:00 PM</small>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Banner;












