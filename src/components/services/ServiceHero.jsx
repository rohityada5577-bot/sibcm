"use client";

import "./Service.css";
import { conferenceServicesHero } from "./data";

export default function HeroSection() {
  return (
    <section className="service-hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container">
        <div className="row align-items-center gy-5">

          {/* Left Content */}
          <div className="col-lg-6">

            <span className="hero-badge">
              {conferenceServicesHero.badge}
            </span>

            <h1 className="hero-title">
              {conferenceServicesHero.title}
              <span>{conferenceServicesHero.highlight}</span>
            </h1>

            <p className="hero-description">
              {conferenceServicesHero.description}
            </p>

            <div className="hero-btns">
              <a href="#" className="hero-btn-primary">
                {conferenceServicesHero.buttons.primary}
              </a>

              <a href="#" className="hero-btn-secondary">
                {conferenceServicesHero.buttons.secondary}
              </a>
            </div>

          </div>

          {/* Right Content */}
          <div className="col-lg-6">

            <div className="hero-feature-box">

              <span className="feature-badge">
                {conferenceServicesHero.featureBox.badge}
              </span>

              <h3>
                {conferenceServicesHero.featureBox.title}
              </h3>

              <p>
                {conferenceServicesHero.featureBox.description}
              </p>

              <div className="feature-list">

                {conferenceServicesHero.featureBox.items.map(
                  (item, index) => (
                    <div
                      className="feature-item"
                      key={index}
                    >
                      <span>✓</span>
                      {item}
                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}