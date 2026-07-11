"use client";

import "./about.css";
import { whoWeAreContent } from "./data";

export default function WhoWeAreBento({
  data = whoWeAreContent,
}) {
  return (
    <section className="who-section">

      <div className="who-bg-shape shape-1"></div>
      <div className="who-bg-shape shape-2"></div>

      <div className="container">

        <div className="row align-items-end mb-5">

          <div className="col-lg-6">
            <span className="who-badge">
              {data.badge}
            </span>

            <h2 className="who-title">
              {data.title}
              <span> {data.titleHighlight}</span>
            </h2>
          </div>

          <div className="col-lg-6">
            <p className="who-description">
              {data.description}
            </p>
          </div>

        </div>

        <div className="row g-4">

          {/* Left Card */}
          <div
            className={
              data.rightCard
                ? "col-lg-5"
                : "col-lg-12"
            }
          >
            <div className="who-card danger-card">

              <span className="card-tag danger">
                {data.leftCard.tag}
              </span>

              <h3>
                {data.leftCard.title}
              </h3>

              <p>
                {data.leftCard.description}
              </p>

              {data.leftCard.exclusions && (
                <div className="excluded-list">
                  {data.leftCard.exclusions.map(
                    (item, index) => (
                      <span key={index}>
                        ✕ {item}
                      </span>
                    )
                  )}
                </div>
              )}

            </div>
          </div>

          {/* Right Card */}
          {data.rightCard && (
            <div className="col-lg-7">
              <div className="who-card success-card">

                <span className="card-tag success">
                  {data.rightCard.tag}
                </span>

                <h3>
                  {data.rightCard.title}
                </h3>

                <p className="focus-text">
                  {data.rightCard.description}
                </p>

                {data.rightCard.highlight && (
                  <div className="highlight-box">
                    {data.rightCard.highlight}
                  </div>
                )}

              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}