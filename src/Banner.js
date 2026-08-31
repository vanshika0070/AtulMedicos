import "./Banner.css";

import {
  FaShieldAlt,
  FaUserMd,
  FaStore,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";

import { HiOutlineBadgeCheck } from "react-icons/hi";

function Banner() {
  return (
    <section className="hero">

      <div className="container">

        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <div className="hero-left">

          {/* Trust Badge */}
          <span className="tagged">
            <HiOutlineBadgeCheck />
            Trusted Pharmacy Since 1993
          </span>


          {/* Hero Content */}
          <div className="hero-title">

            <h1>
              Trusted Medicines.
            </h1>

            <h1 className="gray">
              Personal Care.
            </h1>

            <h1>
              Since 1993.
            </h1>


            <p>
              Quality medicines, wellness products and professional
              <br />
              pharmacy services to keep you and your family healthy everyday.
            </p>


            {/* Hero Buttons */}
            <div className="hero-buttons">

              <div className="buttons">

                {/* Products */}
                <div className="button-group">

                  <a
                    href="#products"
                    className="btn-white"
                  >
                    Explore Products
                  </a>

                </div>


                {/* Enquiry */}
                <div className="button-group">

                  <a
                    href="tel:+919XXXXXXXXX"
                    className="btn-dark"
                  >
                    Enquire Now
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================
              HERO FEATURES
          ================================================== */}

          <div className="hero-features">


            {/* Feature 1 */}
            <div className="feature">

              <div className="feature-icon">
                <FaShieldAlt />
              </div>

              <div>

                <h4>
                  Genuine
                  <br />
                  Medicines
                </h4>

                <p>
                  Quality products you can trust.
                </p>

              </div>

            </div>


            <div className="feature-divider"></div>


            {/* Feature 2 */}
            <div className="feature">

              <div className="feature-icon">
                <FaUserMd />
              </div>

              <div>

                <h4>
                  Expert
                  <br />
                  Pharmacists
                </h4>

                <p>
                  Professional guidance every day.
                </p>

              </div>

            </div>


            <div className="feature-divider"></div>


            {/* Feature 3 */}
            <div className="feature">

              <div className="feature-icon">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h4>
                  Convenient
                  <br />
                  Location
                </h4>

                <p>
                  Easy to reach whenever needed.
                </p>

              </div>

            </div>

          </div>

        </div>



        {/* ==================================================
            RIGHT SIDE
        ================================================== */}

        <div className="hero-right">

          <div className="image-wrapper">


            {/* Decorative Circle */}
            <div className="hero-circle"></div>


            {/* Decorative Dots */}
            <div className="hero-dots"></div>


            {/* Main Image */}
            <img
              src="/images/banner.webp"
              alt="Atul Medicos pharmacy products"
              className="hero-image"
            />



            {/* ==================================================
                STORE CARD
            ================================================== */}

            <div className="store-card">


              {/* Store Header */}
              <div className="store-heading">

                <div className="store-heading-icon">
                  <FaStore />
                </div>

                <div>

                  <h4>
                    Visit Our Store
                  </h4>

                </div>

              </div>



              {/* Divider */}
              <div className="store-divider"></div>



              {/* Location */}
              <div className="store-item">

                <div className="store-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h5>
                    Our Location
                  </h5>

                  <small>
                    Jeewan Park, Uttam Nagar,
                    <br />
                    New Delhi
                  </small>

                </div>

              </div>



              {/* Opening Hours */}
              <div className="store-item">

                <div className="store-icon">
                  <FaClock />
                </div>

                <div>

                  <h5>
                    Open Daily
                  </h5>

                  <small>
                    8:30 AM – 11:00 PM
                  </small>

                </div>

              </div>



              {/* Call Information */}
              <div className="store-call">

                <div className="call-icon">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h5>
                    Need to call us?
                  </h5>

                  <p>
                    Use the
                    <strong> Call For Enquiry </strong>
                    button to connect with us.
                  </p>

                </div>

              </div>



              {/* Google Maps */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jeewan+Park+Uttam+Nagar+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >

                <FaLocationArrow />

                <div>

                  <strong>
                    Get Directions
                  </strong>

                  <span>
                    Find us on Google Maps
                  </span>

                </div>

              </a>


            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Banner;