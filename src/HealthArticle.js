import { Link, useParams } from "react-router-dom";
import "./HealthArticle.css";

const articles = {
  "managing-fever-at-home": {
    title: "Managing Fever at Home",
    image: "/images/Managing Fever at Home.webp",
    intro:
      "Fever is a common sign that your body is responding to an infection or illness. Here are some simple ways to care for yourself at home.",

    sections: [
      {
        heading: "Stay Hydrated",
        text:
          "Drink plenty of water and other suitable fluids to help prevent dehydration, especially if you are sweating more than usual.",
      },
      {
        heading: "Get Plenty of Rest",
        text:
          "Give your body time to recover by getting enough rest and avoiding strenuous activities while you have a fever.",
      },
      {
        heading: "Keep Comfortable",
        text:
          "Wear lightweight clothing and keep the room comfortably cool. Avoid excessive layers or heavy blankets.",
      },
      {
        heading: "Take Medicines Responsibly",
        text:
          "If you use a fever-reducing medicine, follow the dosage instructions on the label or your healthcare professional's advice.",
      },
      {
        heading: "When to Seek Medical Advice",
        text:
          "Seek professional medical advice if the fever is severe, persistent, getting worse, or accompanied by concerning symptoms.",
      },
    ],
  },

  "first-aid-essentials": {
    title: "First Aid Essentials for Your Home",
    image: "/images/First Aid Essentials for Your Home.webp",
    intro:
      "Keeping a basic first aid kit at home can help you handle minor cuts, scrapes, burns, and other everyday injuries.",

    sections: [
      {
        heading: "Basic First Aid Supplies",
        text:
          "A useful home kit can include adhesive bandages, sterile gauze, medical tape, antiseptic supplies, scissors, and disposable gloves.",
      },
      {
        heading: "Keep Medicines Organized",
        text:
          "Store commonly needed medicines and first aid supplies in a clean, dry, and easily accessible place.",
      },
      {
        heading: "Check Expiry Dates",
        text:
          "Regularly check the expiry dates of medicines and first aid products. Replace items that are expired or damaged.",
      },
      {
        heading: "Keep It Away From Children",
        text:
          "Store medicines and potentially harmful supplies safely out of the reach of children and pets.",
      },
      {
        heading: "Know When to Get Help",
        text:
          "First aid is not a substitute for professional care. Seek medical attention for serious injuries, heavy bleeding, severe burns, or other emergencies.",
      },
    ],
  },

  "how-to-read-medicine-labels": {
    title: "How to Read Medicine Labels",
    image: "/images/How to Read Medicine Labels.webp",
    intro:
      "Understanding medicine labels can help you use medicines safely and correctly. Always read the label before taking a medicine.",

    sections: [
      {
        heading: "Check the Medicine Name",
        text:
          "Make sure you have the correct medicine and check the active ingredient listed on the package.",
      },
      {
        heading: "Read the Dosage Instructions",
        text:
          "Check how much medicine to take, how often to take it, and any age or weight-related instructions.",
      },
      {
        heading: "Check the Expiry Date",
        text:
          "Always check the expiry date before using a medicine. Do not use medicines that have expired.",
      },
      {
        heading: "Read Warnings and Precautions",
        text:
          "Pay attention to warnings, possible interactions, allergies, and other precautions listed on the package.",
      },
      {
        heading: "Check Storage Instructions",
        text:
          "Follow the storage instructions on the label. Some medicines may require specific temperature or storage conditions.",
      },
    ],
  },
};

function HealthArticle() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <section className="health-article">
        <div className="container">
          <h1>Article Not Found</h1>
          <Link to="/health-tips">← Back to Health Tips</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <Link to="/health-tips">Health Tips</Link>
        <span className="separator">/</span>
        <span className="current">{article.title}</span>
      </div>

      <section className="health-article">
        <div className="container">

          <div className="article-header">

            <h2>{article.title}</h2>

            <p className="article-intro">
              {article.intro}
            </p>
          </div>

          <img
            className="article-image"
            src={article.image}
            alt={article.title}
          />

          <article className="article-content">
            {article.sections.map((section, index) => (
              <section key={index}>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </article>

          <div className="article-disclaimer">
            <strong>Disclaimer:</strong> This information is for general
            educational purposes only and should not replace professional
            medical advice, diagnosis, or treatment. Consult a qualified
            healthcare professional for advice specific to your situation.
          </div>

          <Link to="/healthtips" className="back-link">
            ← Back to Health Tips
          </Link>

        </div>
      </section>
    </>
  );
}

export default HealthArticle;