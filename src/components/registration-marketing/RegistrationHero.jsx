"use client";

import { registrationHeroData } from "./data";
import "./regisister.css";

export default function RegistrationHero() {
  const { badge, title, content, metrics, floatingCards } =
    registrationHeroData;

  return (
    <section className="registration-hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100 g-5">
          
          <div className="col-lg-6">
            <div className="registration-content">
              <span className="hero-badge">
                {badge}
              </span>

              <h1>{title}</h1>

              {content?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <div className="hero-btns">
                <button className="btn-primary-custom">
                  Get More Registrations
                </button>

                <button className="btn-outline-custom">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="registration-dashboard">

              <div className="dashboard-card">
                <div className="graph-area">
                  <div className="graph-line"></div>
                </div>

                <h4>Conference Registrations</h4>

                <div className="dashboard-number">
                  450+
                </div>

                <span className="growth-text">
                  ↑ Registration Growth
                </span>

                <div className="metrics-row">
                  {metrics?.map((item, index) => (
                    <div
                      className="metric-box"
                      key={index}
                    >
                      <h5>{item.value}</h5>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="floating-card card-1">
                {floatingCards[0]}
              </div>

              <div className="floating-card card-2">
                {floatingCards[1]}
              </div>

              <div className="floating-card card-3">
                {floatingCards[2]}
              </div>

              <div className="hero-glow"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}