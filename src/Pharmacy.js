
import "./Style.css";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container">

        <div className="section-heading">
          <span className="badge">● Our Story</span>
          <h2> Your Trusted Local Pharmacy</h2>
          <p>The person, the process, and the thinking behind every project.</p>
        </div>

      <div className="about-grid">

          {/* Left */}

          <div className="about-image-card">

            <img
              src="/images/pharmacy.png"
              alt="Vanshika Manav"
            />


          </div>

          {/* Right */}

          <div className="about-content">

            <p className="subtitle">
              For over 30 years, we've been more than just a pharmacy—we've been a trusted healthcare partner for families in our community. From everyday medicines to expert guidance, our goal has always been to provide genuine care, quality products, and reliable service.
            </p>

            <hr />

            <p className="description">Whether you're managing a long-term condition, picking up a prescription, or looking for wellness essentials, our experienced team is here to help you make informed health decisions with confidence.</p>

          </div>
        </div>
      </div>

<br />
      <div className="products-grid">


          <div className="stat-card">
            <h3>30+</h3>
            <p>Years</p>
          </div>

          <div className="stat-card">
            <h3>10k+</h3>
            <p> Happy Customers</p>
          </div>

          <div className="stat-card">
            <h3>5k+</h3>
            <p>Products</p>
          </div>

          <div className="stat-card">
            <h3>100+ </h3>
            <p>Brands</p>
          </div>

        </div>
    </section>
  );
}

export default About;