"use client";

import "./about.css";
// import { missionExperienceContent } from "./data";

export default function MissionExperience({data}) {
  const { mission, experience } = data;

  return (
    <section className="mission-section">

      <div className="mission-orb orb-1"></div>
      <div className="mission-orb orb-2"></div>

      <div className="container">

        <div className="row g-5 align-items-stretch">

          {/* Mission */}
          <div className="col-lg-6">

            <div className="mission-card h-100">

              <span className="mission-badge">
                {mission.badge}
              </span>

              <h2 className="mission-title">
                {mission.title}
                <span> {mission.highlight}</span>
              </h2>

              <p className="mission-description">
                {mission.description}
              </p>

              <p className="mission-secondary">
                {mission.secondary}
              </p>

              <div className="mission-callout">
                <h4>{mission.calloutTitle}</h4>
                <p>{mission.calloutText}</p>
              </div>

            </div>

          </div>

          {/* Experience */}
          <div className="col-lg-6">

            <div className="experience-wrapper">

              <span className="mission-badge">
                {experience.badge}
              </span>

              <h2 className="experience-title">
                {experience.title}
              </h2>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="vertical-list">

                {experience.verticals.map((item, index) => (
                  <div className="vertical-card" key={index}>
                    <span className="vertical-dot"></span>
                    <span>{item}</span>
                  </div>
                ))}
                <p>Across these verticals, we have navigated the unique challenges each industry brings, compliance constraints in healthcare marketing, the long sales cycles of executive-level finance events, the technical audience sophistication of developer conferences</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}