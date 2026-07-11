"use client";

import "./about.css";
import { trustSectionContent } from "./data";

export default function TrustSection() {
  return (
    <section className="trust-section">

      <div className="trust-orb trust-orb-1"></div>
      <div className="trust-orb trust-orb-2"></div>

      <div className="container">

        <div className="trust-header">

          <span className="trust-badge">
            {trustSectionContent.badge}
          </span>

          <h2 className="trust-title">
            {trustSectionContent.title}
            <span> {trustSectionContent.highlight}</span>
          </h2>

          <p className="trust-description">
            {trustSectionContent.description}
          </p>

        </div>

        <div className="row g-4">

          {trustSectionContent.items.map((item, index) => (
            <div className="col-lg-4" key={index}>

              <div className="trust-card">

                <div className="trust-card-top">

                  <div className="trust-number">
                    {item.index}
                  </div>

                  <span className="trust-label">
                    {item.label}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
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