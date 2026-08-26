import "./Products.css";

const products = [
  {
    id: 1,
    title: "Pain Relief",
    desc: "Tablets, sprays and gels for fast pain relief.",
    image: "/images/pain-relief.png",
    tags: ["OTC Available"],
  },
  {
    id: 2,
    title: "Vitamins & Supplements",
    desc: "Daily nutrition and immunity support products.",
    image: "/images/vitamins.png",
    tags: ["Health Essentials"],
  },
  {
    id: 3,
    title: "First Aid",
    desc: "Bandages, antiseptics and wound care essentials.",
    image: "/images/first-aid.png",
    tags: ["Everyday Care"],
  },
  {
    id: 4,
    title: "Personal Care",
    desc: "Products for newborn and infant healthcare.",
    image: "/images/baby-care.png",
    tags: ["Trusted Brands"],
  },
];

function Products() {
  return (
    <section className="products">
      <div className="container">

        <div className="section-heading">
          <span className="badge">● Available In Store</span>

          <h2>
            Popular Healthcare Essentials
          </h2>

          <p>
            Browse some of the healthcare products available at Atul Medicos.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="project-column" key={product.id}>

              <div className="project-card">

                <div className="project-image">
                  <div className="project-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                </div>

                <div className="project-content">
                  <h3>{product.title}</h3>

                  <p>{product.desc}</p>

                  <div className="tags">
                    {product.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;







