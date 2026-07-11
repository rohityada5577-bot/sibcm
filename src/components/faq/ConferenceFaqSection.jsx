"use client";

import { useState } from "react";
import { conferenceFaqData } from "./data";
import { ImOffice } from "react-icons/im";
import "./faq.css";

export default function ConferenceFaqSection() {
  const [active, setActive] = useState(0);

  const {
    badge,
    title,
    description,
    faqs = [],
  } = conferenceFaqData;

  return (
    <section className="conference-faq-section">
      <div className="container">

        <div className="faq-header text-center">
          <span>{badge}</span>

          <h2>{title}</h2>

          <p>{description}</p>
        </div>

        <div className="faq-wrapper">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${
                active === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
              >
                <span>{faq.question}</span>

                <div className="faq-icon">
                  {active === index ? "−" : "+"}
                </div>
              </button>

              <div
                className={`faq-answer ${
                  active === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}