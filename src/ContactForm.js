import { useState } from "react";
import "./ContactForm.css";
import "./Style.css";

export default function ContactForm() {
  const [topic, setTopic] = useState("");
  const [subTopic, setSubTopic] = useState("");
  const [image, setImage] = useState(null);

  const whatsappNumber = "919266343666";

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

    "Prescription Enquiry": [
      "Medicine Availability",
      "Alternative Medicine",
      "Dosage Information",
      "Prescription Assistance",
    ],

    "Product Guidance": [
      "Vitamins & Supplements",
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
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const details = form.details?.value?.trim() || "";

    const message = `Hello Atul Medicos 👋

I have an enquiry.

Name: ${name}
Phone: ${phone}
Enquiry: ${topic}
${subTopic ? `Category: ${subTopic}` : ""}

${details ? `Details:\n${details}` : ""}

${
  image
    ? "📎 I have selected an image/prescription. I will attach it here."
    : ""
}

Please let me know about this.`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  const openDirectChat = () => {
    const message = `Hello Atul Medicos 👋

I need some assistance.`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-info">

      <form onSubmit={onSubmit} className="contact-form">

        <div className="form-heading">
          <h3>
            Send Your Enquiry <span>on WhatsApp</span>
          </h3>

          <p>
            Tell us what you need and we'll help you as quickly as possible.
          </p>
        </div>


        {/* Name + Phone */}
        <div className="form-row">

          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="Phone Number"
              inputMode="numeric"
              autoComplete="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </div>

        </div>


        {/* Main Enquiry */}
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
            <option value="">
              What do you need help with?
            </option>

            {Object.keys(enquiryOptions).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

            <option value="Other">
              Other Enquiry
            </option>
          </select>

        </div>


        {/* Category */}
        {topic && topic !== "Other" && (

          <div className="form-group">

            <select
              className="form-input"
              value={subTopic}
              onChange={(e) => setSubTopic(e.target.value)}
              required
            >
              <option value="">
                Select a category
              </option>

              {enquiryOptions[topic].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select>

          </div>

        )}


        {/* Message */}
        {topic && (

          <div className="form-group full">

            <textarea
              name="details"
              rows="4"
              className="form-textarea"
              placeholder={
                topic === "Other"
                  ? "Tell us what you need help with..."
                  : "Add medicine name, product name or any other details..."
              }
            />

          </div>

        )}


        {/* IMAGE UPLOAD */}
        <div className="form-group full">

          <label className="upload-box">

            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  setImage(file);
                }
              }}
            />


            <div className="upload-content">

              <strong>
                {image
                  ? image.name
                  : "Upload Prescription (Optional)"}
              </strong>

              <span>
                JPG, PNG or WEBP (Max 5MB)
              </span>

            </div>

            <div className="upload-action">
              Browse
            </div>

          </label>

          {image && (
            <button
              type="button"
              className="remove-image"
              onClick={() => setImage(null)}
            >
              Remove image
            </button>
          )}

        </div>


        {/* WhatsApp Submit */}
        <button
          className="btn-form"
          type="submit"
        >Send Enquiry on WhatsApp</button>

        <p className="reply">
          Your enquiry will open in WhatsApp ready for you to send.
        </p>

      </form>


      {/* Direct WhatsApp */}
      <div className="direct-whatsapp">

        <div>
          <strong>
            Prefer to chat directly?
          </strong>

          <p>
            Start a WhatsApp conversation with us.
          </p>
        </div>

        <button
          type="button"
          className="chat-whatsapp-btn"
          onClick={openDirectChat}
        >
          Chat on WhatsApp →
        </button>

      </div>

    </div>
  );
}