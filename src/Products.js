


import "./Cards.css";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Medicines",
    image: "/images/Managing Fever at Home.webp",
    description: "Tablets, sprays and gels for fast pain relief.",
    slug: "medicines",
  },
  {
    title: "Personal Care",
    image: "/images/How to Read Medicine Labels.webp",
    description: "Products for newborn and infant healthcare.",
    slug: "personal-care",
  },
  {
    title: "Vitamins & Supplements",
    image: "/images/First Aid Essentials for Your Home.webp",
    description: "Daily nutrition and immunity support products.",
    slug: "vitamins-supplements",
  },
  {
    title: "Healthcare Essentials",
    image: "/images/How to Read Medicine Labels.webp",
    description: "Bandages, antiseptics and wound care essentials.",
    slug: "healthcare-essentials",
  },
  {
    title: "Baby Care",
    image: "/images/How to Read Medicine Labels.webp",
    description: "Products for newborn and infant healthcare.",
    slug: "baby-care",
  },
];

function Products({ from = "home" }) {
  return (
    <section className="products" id="products">
      <div className="container">

        <div className="section-heading">
          <span className="badge">● Available In Store</span>

          <h2>🌿 Popular Healthcare Essentials 🌿</h2>

          <p>
            Browse some of the healthcare products available at Atul Medicos.
          </p>
        </div>

        <div className="products-grid">

          {blogs.map((blog, index) => (
            <div
              className="products-card"
              key={index}
            >

              <div className="products-card-image">
                <img
                  src={blog.image}
                  alt={blog.title}
                />
              </div>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <Link
                to={`/products/${blog.slug}`}
                state={{ from }}
                className="expand"
              >
                Explore Products
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;