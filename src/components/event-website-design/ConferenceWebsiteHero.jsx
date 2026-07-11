"use client";

import { conferenceWebsiteDesignData } from "./data";
import "./eventwebdesign.css";

export default function ConferenceWebsiteDesignSection() {
  const {
    badge,
    title,
    highlightTitle,
    paragraphs,
    highlights,
  } = conferenceWebsiteDesignData;

  return (
    <section className="conversion-design-section">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="conversion-heading">
              <span>{badge}</span>

              <h2>
                {title}
                <strong>{highlightTitle}</strong>
              </h2>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="conversion-content">
              {paragraphs?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}

              <div className="conversion-highlights">
                {highlights?.map((item, index) => (
                  <div key={index} className="highlight-pill">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-word">CONVERT</div>
    </section>
  );
}