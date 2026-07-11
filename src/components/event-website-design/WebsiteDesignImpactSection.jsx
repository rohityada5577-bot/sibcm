"use client";

import { websiteImpactData } from "./data";

export default function WebsiteDesignImpactSection() {
  const {
    badge,
    title,
    highlightTitle,
    description,
    comparison,
    impact,
  } = websiteImpactData;

  return (
    <section className="website-impact-section">
      <div className="container">
        <div className="impact-header text-center">
          <span>{badge}</span>

          <h2>
            {title}
            <strong>{highlightTitle}</strong>
          </h2>

          <p>{description}</p>
        </div>

        <div className="comparison-wrapper">
          <div className="comparison-card negative">
            <h3>{comparison.left.title}</h3>

            <div className="conversion-rate">
              {comparison.left.conversion}
            </div>

            {comparison.left.points.map((item, index) => (
              <div key={index} className="comparison-item">
                {item}
              </div>
            ))}
          </div>

          <div className="vs-circle">VS</div>

          <div className="comparison-card positive">
            <h3>{comparison.right.title}</h3>

            <div className="conversion-rate">
              {comparison.right.conversion}
            </div>

            {comparison.right.points.map((item, index) => (
              <div key={index} className="comparison-item">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="impact-result">
          <h3>{impact}</h3>
        </div>
      </div>
    </section>
  );
}