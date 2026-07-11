"use client";

import { uxRegistrationData } from "./data";

export default function UXRegistrationSection() {
  const {
    badge,
    title,
    highlightTitle,
    description,
    issues,
    result,
  } = uxRegistrationData;

  return (
    <section className="ux-audit-section">
      <div className="container">
        <div className="ux-header text-center">
          <span>{badge}</span>

          <h2>
            {title} <strong>{highlightTitle}</strong>
          </h2>

          <p>{description}</p>
        </div>

        <div className="ux-dashboard">
          <div className="audit-score">
            <div className="score-circle">
              <span>92%</span>
            </div>

            <h4>UX Audit Score</h4>
          </div>

          <div className="issues-list">
            {issues?.map((item, index) => (
              <div
                key={index}
                className="issue-row"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className="issue-icon">⚠</div>

                <div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ux-result">
          <div className="result-check">✓</div>

          <p>{result}</p>
        </div>
      </div>
    </section>
  );
}