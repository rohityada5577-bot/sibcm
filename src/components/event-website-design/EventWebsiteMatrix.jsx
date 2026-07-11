"use client";

import { websiteBestPracticesData } from "./data";

export default function EventWebsiteMatrix() {
  const {
    badge,
    title,
    highlightTitle,
    description,
    items,
  } = websiteBestPracticesData;

  return (
    <section className="website-blueprint-section">
      <div className="container">
        <div className="blueprint-header text-center">
          <span>{badge}</span>

          <h2>
            {title}
            <strong>{highlightTitle}</strong>
          </h2>

          <p>{description}</p>
        </div>

        <div className="blueprint-wrapper">
          <div className="blueprint-center">
            <h3>EVENT</h3>
            <span>WEBSITE</span>
          </div>

          {items?.map((item, index) => (
            <div
              key={index}
              className={`blueprint-card blueprint-card-${index + 1}`}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}