"use client";

import { seoConferenceContent } from "./data";

export default function SeoConferencePages() {
  const { badge, title, highlightTitle, description, items } =
    seoConferenceContent;

  return (
    <section className="seo-pages-section">
      <div className="container">
        <div className="seo-pages-header text-center">
          <span>{badge}</span>

          <h2>
            {title} <strong>{highlightTitle}</strong>
          </h2>

          <p>{description}</p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {items.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="timeline-card">
                <div className="timeline-number">{item.number}</div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}