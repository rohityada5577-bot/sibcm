"use client";

import { Accordion } from "react-bootstrap";
import "./common.css";

export default function FAQSection({ data }) {
  return (
    <section className="site-section">
      <div className="site-container">

        <div className="site-heading-wrap">
          <span className="site-badge">
            Frequently Asked Questions
          </span>

          <h2 className="site-title-lg">
            {data.title}
          </h2>

          <p className="site-text">
            {data.subtitle}
          </p>
        </div>

        <Accordion flush>
          {data.faqs.map((faq, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
            >
              <Accordion.Header>
                {faq.question}
              </Accordion.Header>

              <Accordion.Body>
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

      </div>
    </section>
  );
}