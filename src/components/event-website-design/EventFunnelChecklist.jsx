"use client";

import { eventFunnelData } from "./data";

export default function EventFunnelChecklist() {
  const {
    badge,
    title,
    highlightTitle,
    description,
    checklist,
  } = eventFunnelData;

  return (
    <section className="funnel-checklist-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="checklist-content">
              <span>{badge}</span>

              <h2>
                {title}
                <strong>{highlightTitle}</strong>
              </h2>

              <p>{description}</p>

              <div className="conversion-badge">
                <h3>+37%</h3>
                <span>Average Registration Growth</span>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="checklist-panel">
              {checklist?.map((item, index) => (
                <div
                  className="checklist-item"
                  key={index}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <div className="check-icon">
                    ✓
                  </div>

                  <div className="check-text">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}