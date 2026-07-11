"use client";

import { signupStrategiesData } from "./data";

export default function SignupGrowthEngines() {
  const {
    badge,
    title,
    highlightTitle,
    intro,
    strategies,
  } = signupStrategiesData;

  return (
    <section className="growth-engines-section">
      <div className="container">

        <div className="growth-header text-center">
          <span>{badge}</span>

          <h2>
            {title}
            <strong>{highlightTitle}</strong>
          </h2>

          <p>{intro}</p>
        </div>

        <div className="growth-list">
          {strategies?.map((item, index) => (
            <div
              key={index}
              className={`growth-row ${
                index % 2 === 0 ? "" : "reverse"
              }`}
            >
              <div className="growth-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="growth-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}