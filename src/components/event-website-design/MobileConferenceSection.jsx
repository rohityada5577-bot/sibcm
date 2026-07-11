"use client";

import { mobileConferenceData } from "./data";

export default function MobileConferenceSection() {
  const { badge, title, highlightTitle, paragraphs, features } =
    mobileConferenceData;

  return (
    <section className="mobile-conference-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="mobile-content">
              <span className="mobile-badge">{badge}</span>

              <h2>
                {title}
                <span>{highlightTitle}</span>
              </h2>

              {paragraphs?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}

              <div className="mobile-features">
                {features?.map((item, index) => (
                  <div key={index} className="feature-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mobile-showcase">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="screen-header"></div>
                  <div className="screen-card"></div>
                  <div className="screen-card"></div>
                  <div className="screen-btn"></div>
                </div>
              </div>

              <div className="floating-ui ui-one">
                Thumb Friendly
              </div>

              <div className="floating-ui ui-two">
                Fast Checkout
              </div>

              <div className="floating-ui ui-three">
                Mobile First
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}