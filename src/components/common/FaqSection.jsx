"use client";

import { useState } from "react";
import "./common.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does a conference marketing agency do?",
      answer:
        "A conference marketing agency handles end-to-end promotion for conferences, summits, and events."
    },
    {
      question: "How do conferences get more attendees?",
      answer:
        "The most effective way is through a multi-channel marketing approach.",
      highlight:
        "72% Attendee Target: Personalized invitations significantly improve registrations."
    },
    {
      question: "How to increase event registrations fast?",
      answer:
        "Paid advertising, email campaigns, retargeting and speaker promotions."
    },
    {
      question: "How much does conference marketing cost?",
      answer:
        "Investment varies based on event size, audience and goals."
    }
  ];

  return (
    <section className="faq-section">

      <div className="container">

        <div className="row g-5">

          <div className="col-lg-5">
            <div className="faq-sticky">

              <span className="faq-badge">
                Frequently Asked Questions
              </span>

              <h2 className="faq-title">
                Questions &
                <span> Answers</span>
              </h2>

              <p className="faq-subtitle">
                Everything you need to know about conference marketing,
                registrations and attendee growth.
              </p>

            </div>
          </div>

          <div className="col-lg-7">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-card ${
                  openIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="faq-button"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`faq-content ${
                    openIndex === index ? "show" : ""
                  }`}
                >
                  <p>{faq.answer}</p>

                  {faq.highlight && (
                    <div className="faq-highlight">
                      {faq.highlight}
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}