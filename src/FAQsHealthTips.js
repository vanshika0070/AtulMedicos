import { useState, useRef } from "react";
import "./FAQs.css";

const faqsHealthTips = [
  {
    question: "When should I take my medicine?",
    answer:
      "Take your medicine exactly as directed by your doctor or as instructed on the label. Follow any advice about taking it before or after meals.",
  },
  {
    question: "Can I take medicines on an empty stomach?",
    answer:
      "It depends on the medicine. Some should be taken on an empty stomach, while others should be taken with food. Always follow the instructions provided.",
  },
  {
    question: "Why should I complete my antibiotic course?",
    answer:
      "Finish the full course even if you feel better. Stopping early can allow the infection to return and contribute to antibiotic resistance.",
  },
  {
    question: "Can I use expired medicines?",
    answer:
      "No. Expired medicines may not work properly and could be unsafe. Always check the expiry date before use.",
  },
  {
    question: "How should medicines be stored at home?",
    answer:
      "Store medicines in a cool, dry place away from sunlight and moisture. Keep them out of the reach of children and pets.",
  },
  {
    question: "What's the difference between generic and branded medicines?",
    answer:
      "They contain the same active ingredient and meet the same quality standards. The main differences are usually the brand, packaging, and price.",
  },
  {
    question: "Can I take two medicines together?",
    answer:
      "Some medicines can interact with each other. Always check with your doctor or pharmacist before combining medicines or supplements.",
  },
  {
    question: "What should I do if I miss a dose?",
    answer:
      "Take it as soon as you remember. If it's nearly time for your next dose, skip the missed dose. Never take a double dose unless advised.",
  },
  {
    question: "Can I take medicines with milk or fruit juice?",
    answer:
      "Some medicines interact with milk or certain fruit juices. Unless instructed otherwise, it's usually best to take medicines with water.",
  },
  {
    question: "Should I self-medicate with antibiotics?",
    answer:
      "No. Antibiotics should only be used when prescribed by a qualified healthcare professional to help prevent antibiotic resistance.",
  },
];

export default function FAQsHealthTips() {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section">
      <div className="container">
        <div className="section-heading">
          <span className="badge">● Medicine & Health</span>

          <h2>Medicine & Health FAQs</h2>

          <p>Get clear answers to common questions about using, storing, and understanding medicines safely.</p>
        </div>

        <div className="faq-container">
          {faqsHealthTips.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="faq-answer"
                style={{
                  height:
                    activeIndex === index
                      ? `${answerRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}