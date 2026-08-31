import { Link, useParams } from "react-router-dom";
import "./Products.css";

const productsData = {
  "pain-relief": {
    title: "Pain Relief",
    intro: "Selected pain relief products available at Atul Medicos.",

    products: [
      {
        name: "Paracetamol Tablets",
        image: "/images/paracetamol.webp",
        description:
          "Commonly used for temporary relief of pain and fever.",
      },
      {
        name: "Pain Relief Gel",
        image: "/images/pain-relief-gel.webp",
        description:
          "Topical gel for temporary relief of muscle and joint discomfort.",
      },
      {
        name: "Pain Relief Spray",
        image: "/images/pain-relief-spray.webp",
        description:
          "Topical spray for temporary relief of minor muscle aches.",
      },
    ],
  },

  "vitamins-and-supplements": {
    title: "Vitamins & Supplements",
    intro:
      "Selected vitamins and supplements available at Atul Medicos.",

    products: [
      {
        name: "Multivitamin Tablets",
        image: "/images/multivitamin.webp",
        description:
          "Daily multivitamin supplement for nutritional support.",
      },
      {
        name: "Vitamin C",
        image: "/images/vitamin-c.webp",
        description:
          "Vitamin C supplement for everyday nutritional support.",
      },
      {
        name: "Calcium & Vitamin D",
        image: "/images/calcium-vitamin-d.webp",
        description:
          "Supplement providing calcium and vitamin D.",
      },
    ],
  },

  "first-aid": {
    title: "First Aid",
    intro:
      "Essential first-aid products available at Atul Medicos.",

    products: [
      {
        name: "Adhesive Bandages",
        image: "/images/bandages.webp",
        description:
          "Useful for covering minor cuts and scrapes.",
      },
      {
        name: "Antiseptic Solution",
        image: "/images/antiseptic.webp",
        description:
          "For cleaning and caring for minor wounds.",
      },
      {
        name: "Sterile Gauze",
        image: "/images/sterile-gauze.webp",
        description:
          "Useful for covering and protecting minor wounds.",
      },
      {
        name: "Medical Tape",
        image: "/images/medical-tape.webp",
        description:
          "Helps secure dressings and gauze in place.",
      },
    ],
  },

  "personal-care": {
    title: "Personal Care",
    intro:
      "Selected personal-care essentials available at Atul Medicos.",

    products: [
      {
        name: "Baby Care Essentials",
        image: "/images/baby-care.webp",
        description:
          "Everyday care products for babies and infants.",
      },
      {
        name: "Personal Hygiene Products",
        image: "/images/personal-hygiene.webp",
        description:
          "Everyday products for personal hygiene and care.",
      },
      {
        name: "Skin Care Essentials",
        image: "/images/skin-care.webp",
        description:
          "Selected products for everyday skin care.",
      },
    ],
  },
};

function ProductsAll() {
  const { slug } = useParams();

  const category = productsData[slug];

  if (!category) {
    return (
      <section className="products-all">
        <div className="container">
          <h1>Product Category Not Found</h1>

          <Link to="/products" className="back-link">
            ← Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>

        <span className="separator">/</span>

        <Link to="/products">Products</Link>

        <span className="separator">/</span>

        <span className="current">
          {category.title}
        </span>
      </div>

      <section className="products-all">
        <div className="container">

          <div className="section-heading">
            <span className="badge">
              ● Available In Store
            </span>

            <h1>{category.title}</h1>

            <p>{category.intro}</p>
          </div>

          <div className="products-all-grid">

            {category.products.map((product, index) => (
              <div
                className="product-item-card"
                key={index}
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-item-image"
                />

                <div className="product-item-info">

                  <span className="product-availability">
                    ● Available In Store
                  </span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default ProductsAll;