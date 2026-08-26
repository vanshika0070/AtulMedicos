import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

import "./Testimonial.css";

const testimonials = [
  {
    name: "Priya Malhotra",
    tag: "Regular customer, 6 years",
    quote:
      "They know my mother's prescriptions by heart. No matter how busy it is, someone always takes two minutes to explain a new medicine before we leave.",
  },
  {
    name: "Rajesh Kumar",
    tag: "Managing a long-term condition",
    quote:
      "I switched here after my usual pharmacy kept running out of stock. Atul Medicos has never once let me down on availability.",
  },
  {
    name: "Sunita Verma",
    tag: "Neighbourhood resident",
    quote:
      "The BP check-in is such a small thing, but it means I actually get my numbers looked at every month instead of putting it off.",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setActive(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[active];

  return (
    <section className="testimonials-section">

      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="section-heading">

          <span className="badge">● In Their Words</span>

          <h2>Stories From The Families We Serve</h2>

          <p>
            Real experiences from the people and families who trust us
            for their everyday healthcare needs.
          </p>

        </div>


        {/* ================= TESTIMONIAL ================= */}

        <div className="testimonials-wrapper">

          <div className="testimonials-card">

            <Quote
              size={34}
              strokeWidth={1.5}
              className="testimonials-quote-icon"
            />

            <p className="testimonials-quote-text">
              "{currentTestimonial.quote}"
            </p>

            <div className="testimonials-avatar">

              {currentTestimonial.name
                .split(" ")
                .map((name) => name[0])
                .join("")}

            </div>

            <p className="testimonials-name">
              {currentTestimonial.name}
            </p>

            <p className="testimonials-tag">
              {currentTestimonial.tag}
            </p>

          </div>


          {/* ================= NAVIGATION ================= */}

          <div className="testimonials-mobile-controls">

            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="testimonials-arrow-mobile"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="testimonials-arrow-mobile"
            >
              <ChevronRight size={18} />
            </button>

          </div>


          {/* ================= DOTS ================= */}

          <div className="testimonials-dots">

            {testimonials.map((_, index) => (

              <button
                type="button"
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`testimonials-dot ${
                  index === active
                    ? "testimonials-dot--active"
                    : ""
                }`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;