"use client";

import { eventWebsiteBestPractices } from "./data";

export default function EventWebsiteStandardsHub() {
  const {
    badge,
    title,
    highlightTitle,
    description,
    practices,
  } = eventWebsiteBestPractices;

  return (
    <section className="standards-hub-section">
      <div className="container">
        <div className="hub-header text-center">
          <span>{badge}</span>

          <h2>
            {title}
            <strong> {highlightTitle}</strong>
          </h2>

          <p>{description}</p>
        </div>

        <div className="standards-hub">
          <div className="hub-center">
            <div className="hub-glow"></div>

            <h3>Event Website</h3>
            <span>Standards</span>
          </div>

          {practices?.map((item, index) => (
            <div
              key={index}
              className={`hub-card hub-card-${index + 1}`}
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