"use client";

import { contentMarketingData } from "./data";

export default function ContentMarketingImpact() {
  const { badge, title, highlightTitle, points } =
    contentMarketingData;

  return (
    <section className="impact-section">
      <div className="container">
        <div className="impact-header">
          <span>{badge}</span>

          <h2>
            {title} <span>{highlightTitle}</span>
          </h2>
        </div>

        <div className="impact-list">
          {points.map((item, index) => (
            <div className="impact-row" key={index}>
              <div className="impact-number">
                {item.value}
              </div>

              <div className="impact-content">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}