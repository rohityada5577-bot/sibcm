
"use client";

import { useState } from "react";
import { channelsContent } from "./data";
import "./homepage.css";

export default function ChannelsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="channels-section">
      <div className="container">

        <div className="row g-5">

          {/* Left Side */}
          <div className="col-lg-5">
            <div className="channels-sticky">

              <span className="channels-badge">
                {channelsContent.badge}
              </span>

              <h2 className="channels-title">
                {channelsContent.headingMain}
                <br />
                <span className="channels-gradient">
                  {channelsContent.headingGradient}
                </span>
              </h2>

              <p className="channels-description">
                {channelsContent.description}
              </p>

              <div className="channels-number">
                0{activeIndex + 1}
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-7">

            {channelsContent.items.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`channel-card ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="channel-header">

                    <div className="channel-left">

                      <span className="channel-index">
                        [0{idx + 1}]
                      </span>

                      <h3 className="channel-title">
                        {item.title}
                      </h3>

                    </div>

                    <span className="channel-category">
                      {item.category}
                    </span>

                  </div>

                  <div className="channel-content">

                    <p>
                      {item.description}
                    </p>

                    <div className="channel-metric">

                      <span className="metric-label">
                        {item.metricLabel}
                      </span>

                      <span className="metric-detail">
                        {item.metricDetail}
                      </span>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

