import { useState } from "react";
import "./ContactForm.css";
import "./Style.css";

export default function ContactForm() {
  const [topic, setTopic] = useState("");
  const [subTopic, setSubTopic] = useState("");

  const enquiryOptions = {
    "Medicine Availability": [
      "Prescription Medicine",
      "OTC Medicine",
      "Vitamins & Supplements",
      "Baby Care",
      "Diabetes Care",
      "First Aid",
      "Personal Care",
    ],

    "Prescription Medicines": [
      "Need a Prescription",
      "Alternative Medicine",
      "Dosage Information",
      "Medicine Availability",
    ],

    "Healthcare Products": [
      "Vitamins",
      "Skin Care",
      "Hair Care",
      "Baby Care",
      "Women's Health",
      "Men's Health",
    ],

    "Medical Devices": [
      "BP Monitor",
      "Glucometer",
      "Nebulizer",
      "Thermometer",
      "Pulse Oximeter",
    ],

    "Store Information": [
      "Opening Hours",
      "Store Location",
      "Payment Methods",
      "Parking",
      "Contact Details",
    ],
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const details = form.details.value;

    const whatsappNumber = "9266343666";

    const message = `Hello Atul Medicos,

Name: ${name}
Phone: ${phone}

Enquiry Type: ${topic}
Category: ${subTopic || "N/A"}

Additional Details:
${details || "None"}

Thank you.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    form.reset();
    setTopic("");
    setSubTopic("");
  };

  return (
      <form onSubmit={onSubmit}>

        {/* Name */}
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter Your Name"
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            className="form-input"
            placeholder="Enter Phone Number"
            pattern="[0-9]{10}"
            required
          />
        </div>

        {/* First Select */}
        <div className="form-group">
          <select
            className="form-input"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              setSubTopic("");
            }}
            required
          >
            <option value="">What do you need help with?</option>

            {Object.keys(enquiryOptions).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

            <option value="Other">Other</option>
          </select>
        </div>

        {/* Second Select */}
        {topic && topic !== "Other" && (
          <div className="form-group">
            <select
              className="form-input"
              value={subTopic}
              onChange={(e) => setSubTopic(e.target.value)}
              required
            >
              <option value="">Select a category</option>

              {enquiryOptions[topic].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Details */}
        {(topic === "Other" || subTopic) && (
          <div className="form-group full">
            <textarea
              name="details"
              rows="5"
              className="form-textarea"
              placeholder="Additional details (optional)"
            />
          </div>
        )}

        <button className="btn-form" type="submit">
          💬 Send via WhatsApp
        </button>

        <p className="reply">
          Clicking the button will open WhatsApp with your enquiry ready to
          send.
        </p>

      </form>
  );
}