"use client";

import { speakerImpactContent } from "./data";

export default function SpeakerImpactSection() {
  const { expertPromotion, attendanceDriver } =
    speakerImpactContent;

  return (
    <section className="speaker-impact-section">
      <div className="container">

        <div className="row g-4 align-items-stretch">

          {/* Left Side */}
          <div className="col-lg-6">
            <div className="expert-card">

              <div className="spotlight"></div>

              <span className="section-badge">
                {expertPromotion.badge}
              </span>

              <h2>{expertPromotion.title}</h2>

              <p>{expertPromotion.description}</p>

              <ul>
                {expertPromotion.points.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="attendance-card">

              <div className="pulse-ring ring-1"></div>
              <div className="pulse-ring ring-2"></div>

              <span className="section-badge blue">
                {attendanceDriver.badge}
              </span>

              <h2>{attendanceDriver.title}</h2>

              <p>{attendanceDriver.description}</p>

              <ul>
                {attendanceDriver.stats.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}