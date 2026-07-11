
"use client";

import { registrationsNeonContent } from "./data";
import  './homepage.css';

export default function RegistrationsSection() {
  return (
    <section className="registrations-section">

      <div className="bg-grid-pattern"></div>
      <div className="neon-orb-1"></div>
      <div className="neon-orb-2"></div>

      <div className="container position-relative">

        {/* Header */}
        <div className="row align-items-center">

          <div className="col-lg-7">
            <span className="reg-badge">
              {registrationsNeonContent.badge}
            </span>

            <h2 className="reg-title">
              {registrationsNeonContent.headingMain}
              <br />
              <span className="reg-gradient">
                {registrationsNeonContent.headingGradient}
              </span>
            </h2>
          </div>

          <div className="col-lg-5">
            <p className="reg-description">
              {registrationsNeonContent.description}
            </p>
          </div>

        </div>

        {/* Cards */}
        <div className="row g-4">

          {registrationsNeonContent.neonItems.map((item, idx) => {

            let gridClass = "col-lg-6";

            if (idx === 0) gridClass = "col-lg-7";
            if (idx === 1) gridClass = "col-lg-5";
            if (idx === 4) gridClass = "col-lg-12";

            return (
              <div className={gridClass} key={idx}>
                <div className="glass-bento-card">

                  <div className="d-flex justify-content-between align-items-center">

                    <span className="card-number">
                      {item.index}
                    </span>

                    <svg
                      className="arrow-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>

                  </div>

                  <div className="mt-4">

                    <h3 className="card-title">
                      {item.title}
                    </h3>

                    <p className="card-desc">
                      {item.description}
                    </p>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

