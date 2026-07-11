"use client";

import { thoughtLeadershipData } from "./data";

export default function ThoughtLeadershipSection() {
  const {
    badge,
    title,
    highlightTitle,
    description,
    featureTitle,
    featureDescription,
    contentTypes,
    stats,
  } = thoughtLeadershipData;

  return (
    <section className="thought-leadership-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="thought-content">
              <span className="thought-badge">{badge}</span>

              <h2>
                {title} <span>{highlightTitle}</span>
              </h2>

              <p>{description}</p>

              <div className="thought-list">
                {contentTypes.map((item, index) => (
                  <div key={index} className="thought-item">
                    <div className="thought-dot"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="authority-panel">
              <div className="authority-glow"></div>

              <h3>{featureTitle}</h3>

              <p>{featureDescription}</p>

              <div className="stats-grid">
                {stats.map((item, index) => (
                  <div key={index} className="stat-card">
                    <h4>{item.value}</h4>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="floating-card card-one">
                Research Driven
              </div>

              <div className="floating-card card-two">
                Industry Authority
              </div>

              <div className="floating-card card-three">
                Thought Leadership
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}