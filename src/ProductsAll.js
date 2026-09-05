




import { useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";

import "./ProductsAll.css";

const categoryData = {
  medicines: {
    title: "Medicines",
    intro:
      "Find medicines and healthcare products available at Atul Medicos.",

    categories: [
      "All",
      "Tablets",
      "Capsules",
      "Syrups",
      "Drops",
      "Creams & Ointments",
      "Pain Relief",
      "Cold & Cough",
      "Fever",
    ],

    products: [
      {
        name: "Paracetamol 500mg Tablets",
        category: "Tablets",
        description: "For pain relief and fever.",
        quantity: "10 tablets",
        image: "/images/products/paracetamol.webp",
      },
      {
        name: "Crocin 500mg Tablets",
        category: "Tablets",
        description: "Pain relief and fever reducer.",
        quantity: "10 tablets",
        image: "/images/products/crocin.webp",
      },
      {
        name: "Benadryl Cough Syrup",
        category: "Syrups",
        description: "Relief from cough and cold.",
        quantity: "100 ml",
        image: "/images/products/benadryl.webp",
      },
      {
        name: "Otrivin Nasal Drops",
        category: "Drops",
        description: "Relief from blocked nose.",
        quantity: "10 ml",
        image: "/images/products/otrivin.webp",
      },
      {
        name: "Candid Antifungal Cream",
        category: "Creams & Ointments",
        description: "For fungal skin infections.",
        quantity: "15 gm",
        image: "/images/products/candid.webp",
      },
      {
        name: "Vicks VapoRub",
        category: "Cold & Cough",
        description: "Relief from cold and congestion.",
        quantity: "50 gm",
        image: "/images/products/vicks.webp",
      },
    ],
  },

  "personal-care": {
    title: "Personal Care",
    intro:
      "Everyday personal care products for skin, hair and hygiene.",

    categories: [
      "All",
      "Skincare",
      "Haircare",
      "Oral Care",
      "Body Care",
      "Hygiene",
    ],

    products: [
      {
        name: "Face Wash",
        category: "Skincare",
        description: "Gentle everyday facial cleansing.",
        quantity: "100 ml",
        image: "/images/products/face-wash.webp",
      },
      {
        name: "Moisturizing Lotion",
        category: "Skincare",
        description: "Daily hydration for your skin.",
        quantity: "200 ml",
        image: "/images/products/lotion.webp",
      },
      {
        name: "Shampoo",
        category: "Haircare",
        description: "Everyday hair cleansing care.",
        quantity: "180 ml",
        image: "/images/products/shampoo.webp",
      },
      {
        name: "Toothpaste",
        category: "Oral Care",
        description: "Daily oral hygiene.",
        quantity: "100 gm",
        image: "/images/products/toothpaste.webp",
      },
    ],
  },

  "vitamins-supplements": {
    title: "Vitamins & Supplements",
    intro:
      "Daily vitamins and supplements to support nutrition and wellness.",

    categories: [
      "All",
      "Multivitamins",
      "Vitamin C",
      "Vitamin D",
      "Calcium",
      "Iron",
      "Protein",
    ],

    products: [
      {
        name: "Daily Multivitamin",
        category: "Multivitamins",
        description: "Daily nutritional support.",
        quantity: "30 tablets",
        image: "/images/products/multivitamin.webp",
      },
      {
        name: "Vitamin C Tablets",
        category: "Vitamin C",
        description: "Vitamin C nutritional supplement.",
        quantity: "20 tablets",
        image: "/images/products/vitamin-c.webp",
      },
      {
        name: "Calcium Tablets",
        category: "Calcium",
        description: "Calcium and nutritional support.",
        quantity: "30 tablets",
        image: "/images/products/calcium.webp",
      },
    ],
  },

  "healthcare-essentials": {
    title: "Healthcare Essentials",
    intro:
      "First-aid and everyday healthcare products available in store.",

    categories: [
      "All",
      "First Aid",
      "Wound Care",
      "Bandages",
      "Antiseptics",
      "Medical Devices",
    ],

    products: [
      {
        name: "Digital Thermometer",
        category: "Medical Devices",
        description: "Quick and easy temperature checking.",
        quantity: "1 piece",
        image: "/images/products/thermometer.webp",
      },
      {
        name: "First Aid Kit",
        category: "First Aid",
        description: "Essential supplies for minor injuries.",
        quantity: "1 kit",
        image: "/images/products/first-aid.webp",
      },
      {
        name: "Adhesive Bandages",
        category: "Bandages",
        description: "For minor cuts and wounds.",
        quantity: "20 pieces",
        image: "/images/products/bandages.webp",
      },
      {
        name: "Antiseptic Solution",
        category: "Antiseptics",
        description: "For everyday wound care.",
        quantity: "100 ml",
        image: "/images/products/antiseptic.webp",
      },
    ],
  },

  "baby-care": {
    title: "Baby Care",
    intro:
      "Gentle everyday care products for babies and young children.",

    categories: [
      "All",
      "Diapers",
      "Baby Skincare",
      "Baby Hygiene",
      "Baby Haircare",
      "Baby Feeding",
    ],

    products: [
      {
        name: "Baby Diapers",
        category: "Diapers",
        description: "Soft and comfortable everyday diapers.",
        quantity: "20 pieces",
        image: "/images/products/diapers.webp",
      },
      {
        name: "Baby Lotion",
        category: "Baby Skincare",
        description: "Gentle moisturizing care for babies.",
        quantity: "200 ml",
        image: "/images/products/baby-lotion.webp",
      },
      {
        name: "Baby Shampoo",
        category: "Baby Haircare",
        description: "Gentle cleansing for baby's hair.",
        quantity: "100 ml",
        image: "/images/products/baby-shampoo.webp",
      },
      {
        name: "Baby Wipes",
        category: "Baby Hygiene",
        description: "Gentle wipes for everyday use.",
        quantity: "72 wipes",
        image: "/images/products/baby-wipes.webp",
      },
    ],
  },
};

function ProductsAll() {
  const { slug } = useParams();
  const location = useLocation();

  const category = categoryData[slug];

  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /*
    --------------------------------------------------
    WHERE DID THE USER COME FROM?
    --------------------------------------------------

    Products.js sends:

    From Home:
    state={{ from: "home" }}

    From ProductsPage:
    state={{ from: "products" }}

    If someone directly opens /products/medicines
    or refreshes the page, there may be no state.
    In that case we default to "home".
  */

  const from = location.state?.from || "home";

  // --------------------------------------------------
  // CATEGORY NOT FOUND
  // --------------------------------------------------

  if (!category) {
    return (
      <main className="products-all-page">
        <div className="products-not-found">
          <span>Atul Medicos</span>

          <h2>Category not found</h2>

          <p>
            The category you're looking for doesn't exist.
          </p>

          <Link
            to="/productspage"
            className="back-products-btn"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  // --------------------------------------------------
  // FILTER PRODUCTS
  // --------------------------------------------------

  const filteredProducts =
    activeCategory === "All"
      ? category.products
      : category.products.filter(
          (product) =>
            product.category === activeCategory
        );

  // --------------------------------------------------
  // MOBILE CATEGORY SELECT
  // --------------------------------------------------

  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName);
    setIsFilterOpen(false);
  };

  return (
    <>
      {/* ==================================================
          BREADCRUMB
      ================================================== */}

      <div className="breadcrumb">
        <Link to="/">Home</Link>

        {from === "products" && (
          <>
            <span className="separator">/</span>

            <Link to="/productspage">
              Products
            </Link>
          </>
        )}

        <span className="separator">/</span>

        <span className="current">
          {category.title}
        </span>
      </div>

      {/* ==================================================
          PRODUCTS SECTION
      ================================================== */}

      <section className="products">
        <div className="products-all-page">

          {/* HEADER */}

          <div className="products-header">
            <div className="section-heading">

              <span className="badge">
                Available In Store
              </span>

              <h2>{category.title}</h2>

              <p>{category.intro}</p>

            </div>
          </div>

          {/* ==================================================
              DESKTOP / TABLET CATEGORY BUTTONS
          ================================================== */}

          <div className="category-wrapper desktop-category">
            <div className="category-select">

              {category.categories.map(
                (categoryName) => (
                  <button
                    key={categoryName}
                    type="button"
                    className={
                      activeCategory === categoryName
                        ? "category-btn active"
                        : "category-btn"
                    }
                    onClick={() =>
                      setActiveCategory(
                        categoryName
                      )
                    }
                  >
                    {categoryName}
                  </button>
                )
              )}

            </div>
          </div>

          {/* ==================================================
              MOBILE FIXED FILTER BUTTON
          ================================================== */}

          <button
            type="button"
            className="mobile-filter-btn"
            onClick={() => setIsFilterOpen(true)}
          >
            <span className="filter-icon">
              ↗
            </span>

            <span>
              Filter Products
            </span>
          </button>

          {/* ==================================================
              MOBILE FILTER MODAL
          ================================================== */}

          {isFilterOpen && (
            <div
              className="mobile-filter-overlay"
              onClick={() =>
                setIsFilterOpen(false)
              }
            >

              <div
                className="mobile-filter-modal"
                onClick={(event) =>
                  event.stopPropagation()
                }
              >

                {/* MODAL HEADER */}

                <div className="mobile-filter-header">

                  <div>
                    <span className="mobile-filter-label">
                      FILTER
                    </span>

                    <h3>
                      Choose Category
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="mobile-filter-close"
                    onClick={() =>
                      setIsFilterOpen(false)
                    }
                    aria-label="Close filter"
                  >
                    ×
                  </button>

                </div>

                {/* CATEGORY OPTIONS */}

                <div className="mobile-filter-options">

                  {category.categories.map(
                    (categoryName) => (
                      <button
                        key={categoryName}
                        type="button"
                        className={
                          activeCategory ===
                          categoryName
                            ? "mobile-filter-option active"
                            : "mobile-filter-option"
                        }
                        onClick={() =>
                          handleCategorySelect(
                            categoryName
                          )
                        }
                      >

                        <span>
                          {categoryName}
                        </span>

                        {activeCategory ===
                          categoryName && (
                          <span className="filter-check">
                            ✓
                          </span>
                        )}

                      </button>
                    )
                  )}

                </div>

              </div>

            </div>
          )}

          {/* ==================================================
              PRODUCTS AREA
          ================================================== */}

          <div className="products-area">

            <div className="products-result-count">
              Showing {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "product"
                : "products"}
            </div>

            {filteredProducts.length > 0 ? (

              <div className="store-products-grid">

                {filteredProducts.map((product) => (

                  <article
                    className="store-product-card"
                    key={product.name}
                  >

                    {/* PRODUCT IMAGE */}

                    <div className="store-product-image">

                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />

                    </div>

                    {/* PRODUCT DETAILS */}

                    <div className="store-product-details">

                      <h3 className="store-product-heading">
                        {product.name}
                      </h3>

                      <p className="store-product-description">
                        {product.description}
                      </p>

                      <span className="store-product-quantity">
                        {product.quantity}
                      </span>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              <div className="no-products">

                <h3>
                  No products found
                </h3>

                <p>
                  Try selecting another category.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setActiveCategory("All")
                  }
                >
                  View All Products
                </button>

              </div>

            )}

          </div>

        </div>
      </section>

      {/* ==================================================
          STORE CTA
      ================================================== */}

      <section className="products">

        <div className="store-cta">

          <div className="store-cta-box">

            <div className="store--text">

              <span className="section-label">
                Visit Atul Medicos
              </span>

              <h2>
                Looking for something specific?
              </h2>

              <p>
                Check product availability at our
                store or visit us for assistance.
              </p>

            </div>

            <div className="btn-side">

              <Link
                to="/contact"
                className="find-store-btn"
              >
                Find Our Store
              </Link>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default ProductsAll;