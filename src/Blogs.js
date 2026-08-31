import "./HealthArticle.css";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "🌡️ Managing Fever at Home",
    image: "/images/Managing Fever at Home.webp",
    description:
      "Learn simple ways to manage fever safely at home and know when it's important to seek medical attention.",
    link: "/health-tips/managing-fever-at-home",
  },
  {
    title: "🩹 First Aid Essentials for Home",
    image: "/images/First Aid Essentials for Your Home.webp",
    description:
      "Discover the essential items every household should keep in a first aid kit for minor injuries and emergencies.",
    link: "/health-tips/first-aid-essentials",
  },
  {
    title: "💊 How to Read Medicine Labels",
    image: "/images/How to Read Medicine Labels.webp",
    description:
      "Know how to read dosage instructions, expiry dates, storage guidelines, and important medicine warnings.",
    link: "/health-tips/how-to-read-medicine-labels",
  },
];

function Blogs() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>

        <span className="separator">/</span>

        <span className="current">Health Tips</span>
      </div>

      <section className="testimonials">
        <div className="container">

          <div className="section-heading">
            <span className="badge">● Health Tips</span>

            <h2>🌿Health Tips & Wellness Guides🌿</h2>

            <p>
              Explore trusted health advice, medicine safety tips, and simple
              wellness guides for everyday care.
            </p>
          </div>


          <div className="blogs-grid">

            {blogs.map((blog, index) => (

              <Link
                to={blog.link}
                className="blogs-card"
                key={index}
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                />

                <h3>
                  {blog.title}
                </h3>

                <p>
                  {blog.description}
                </p>

                <span className="read-more">
                  Read Article
                  <span className="arrow">→</span>
                </span>

              </Link>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Blogs;