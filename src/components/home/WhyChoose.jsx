"use client";

import { useState } from "react";
import { whyChooseDossierContent } from "./data";
import "./homepage.css";

export default function WhyChoose() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="whychoose-section">

      <div className="whychoose-bg"></div>
      <div className="whychoose-orb orb-1"></div>
      <div className="whychoose-orb orb-2"></div>

      <div className="container position-relative">

        <div className="whychoose-header">

          {/* <span className="whychoose-badge">
            {whyChooseDossierContent.badge}
          </span> */}

          <h2 className="whychoose-title">
            {whyChooseDossierContent.headingMain}
            <br />
            <span className="whychoose-gradient">
              {whyChooseDossierContent.headingGradient}
            </span>
          </h2>

          <p className="whychoose-description">
            {whyChooseDossierContent.description}
          </p>

        </div>

        <div className="row g-4 align-items-stretch">

          <div className="col-lg-5">

            {whyChooseDossierContent.pillars.map((item, idx) => (

              <div
                key={idx}
                className={`pillar-item ${
                  activePillar === idx ? "active" : ""
                }`}
                onMouseEnter={() => setActivePillar(idx)}
                onClick={() => setActivePillar(idx)}
              >
                <span className="pillar-number">
                  0{item.index}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <span>{item.tag}</span>
                </div>
              </div>

            ))}

          </div>

          <div className="col-lg-7">

            <div className="display-card">

              <div className="display-status">
                ● ACTIVE
              </div>

              <h3>
                {whyChooseDossierContent.pillars[activePillar]?.title}
              </h3>

              <p>
                {whyChooseDossierContent.pillars[activePillar]?.description}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}