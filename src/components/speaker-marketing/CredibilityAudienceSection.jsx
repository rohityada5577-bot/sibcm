"use client";

import { speakerMarketingContent } from "./data";

export default function CredibilityAudienceSection() {
  const {
    credibility,
    audienceGrowth,
    points,
  } = speakerMarketingContent;

  return (
    <section className="credibility-audience-section">
      <div className="container">

        <div className="row g-4">

          {/* Left */}
          <div className="col-lg-6">
            <div className="credibility-card">

              <div className="card-icon">
                🛡️
              </div>

              <h2>{credibility.title}</h2>

              <p>{credibility.description}</p>


            </div>
          </div>

          {/* Right */}
          <div className="col-lg-6">
            <div className="audience-card">

              <div className="network-node node-1"></div>
              <div className="network-node node-2"></div>
              <div className="network-node node-3"></div>

              <h2>{audienceGrowth.title}</h2>

              <p>{audienceGrowth.description}</p>

              
              <ul>
            {audienceGrowth.points.map((point, index) => (
              <li key={index} className="text-white">{point}</li>
            ))}
          </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}