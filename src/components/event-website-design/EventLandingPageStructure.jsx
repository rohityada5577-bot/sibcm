"use client";

import { landingPageStructureData } from "./data";

export default function EventLandingPageStructure() {
  const {
    badge,
    title,
    highlightTitle,
    description,
    sections,
  } = landingPageStructureData;

  return (
    <section className="landing-blueprint-section">
      <div className="container">
        <div className="blueprint-header text-center">
          <span>{badge}</span>

          <h2>
            {title}
            <strong>{highlightTitle}</strong>
          </h2>

          <p>{description}</p>
        </div>

        <div className="blueprint-layout">
          {sections?.map((item, index) => (
            <div
              className="blueprint-block"
              key={index}
            >
              <div className="block-number">
                {item.number}
              </div>

              <div className="block-content">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}