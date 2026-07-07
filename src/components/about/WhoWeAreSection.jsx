"use client";

import "./about.css";
import { whoWeAreContent } from "./dada";

export default function WhoWeAreBento() {
  return (
    <section className="who-section">

      <div className="who-bg-shape shape-1"></div>
      <div className="who-bg-shape shape-2"></div>

      <div className="container">

        <div className="row align-items-end mb-5">

          <div className="col-lg-6">
            <span className="who-badge">
              {whoWeAreContent.badge}
            </span>

            <h2 className="who-title">
              {whoWeAreContent.title}
              <span> {whoWeAreContent.titleHighlight}</span>
            </h2>
          </div>

          <div className="col-lg-6">
            <p className="who-description">
              {whoWeAreContent.description}
            </p>
          </div>

        </div>

        <div className="row g-4">

          {/* Left Card */}
          <div className="col-lg-5">
            <div className="who-card danger-card">

              <span className="card-tag danger">
                {whoWeAreContent.leftCard.tag}
              </span>

              <h3>
                {whoWeAreContent.leftCard.title}
              </h3>

              <p>
                {whoWeAreContent.leftCard.description}
              </p>

              <div className="excluded-list">
                {whoWeAreContent.leftCard.exclusions.map((item, index) => (
                  <span key={index}>
                    ✕ {item}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-7">
            <div className="who-card success-card">

              <span className="card-tag success">
                {whoWeAreContent.rightCard.tag}
              </span>

              <h3>
                {whoWeAreContent.rightCard.title}
              </h3>

              <p className="focus-text">
                {whoWeAreContent.rightCard.description}
              </p>

              <div className="highlight-box">
                {whoWeAreContent.rightCard.highlight}
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}