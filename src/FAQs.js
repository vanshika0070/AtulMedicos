import { useState, useRef } from "react";
import "./FAQs.css";

const faqs = [
  {
    question: "Can I check medicine availability before visiting?",
    answer:
      "Absolutely. Contact us via WhatsApp or phone to confirm medicine availability before visiting our store.",
  },
    {
    question: "What are your store opening hours?",
    answer:
      "We're open daily from 9:00 AM to 11:00 PM. If you plan to visit close to closing time, feel free to call us beforehand.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept Cash and UPI.",
  },
  {
    question: "How can I contact Atul Medicos?",
    answer:
      "You can reach us by phone, WhatsApp, or by visiting our pharmacy during business hours.",
  },
    {
    question: "Do you have generic alternatives available?",
    answer:
      "Where appropriate, we can let you know if generic alternatives are available. Please consult your doctor before changing any prescribed medication.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section">
      <div className="container">

        <div className="section-heading">
          <span className="badge">● Pharmacy FAQs</span>

          <h2>🌿Questions? We’re Here to Help🌿</h2>

          <p>Get quick answers about medicines, availability, payments, and pharmacy services.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
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