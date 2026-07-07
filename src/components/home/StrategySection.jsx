
"use client";

import { strategyContent } from "./data";
import "./homepage.css";

export default function StrategySection() {
  return (
    <section className="strategy-section">

      {/* Background Effects */}
      <div className="strategy-bg"></div>
      <div className="strategy-orb strategy-orb-1"></div>
      <div className="strategy-orb strategy-orb-2"></div>
      <div className="strategy-grid"></div>

      <div className="container position-relative">

        {/* Header */}
        <div className="strategy-header text-center mx-auto">

          <span className="strategy-badge">
            {strategyContent.badge}
          </span>

          <h2 className="strategy-title">
            {strategyContent.headingMain}
            <br />
            <span className="strategy-gradient-text">
              {strategyContent.headingGradient}
            </span>
          </h2>

          <p className="strategy-description">
            {strategyContent.description}
          </p>

        </div>

        {/* Cards */}
        <div className="row g-4">

          {strategyContent.phases.map((item, idx) => (
            <div
              key={idx}
              className="col-lg-3 col-md-6"
            >
              <div className="strategy-card">

                <div className="strategy-card-top">

                  <div className="strategy-dot"></div>

                  <span className="strategy-index">
                    {item.index}
                  </span>

                </div>

                <span className="strategy-phase">
                  {item.phaseBadge}
                </span>

                <h3 className="strategy-card-title">
                  {item.title}
                </h3>

                <p className="strategy-card-desc">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

