"use client";

import { velocityContent } from "./data";
import  './homepage.css';

export default function VelocitySection() {
  return (
    <section className="velocity-section position-relative overflow-hidden">

      <div className="velocity-bg-shape velocity-shape-1"></div>
      <div className="velocity-bg-shape velocity-shape-2"></div>

      <div className="container py-5 position-relative">
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-6">

            <span className="velocity-badge">
              {velocityContent.badge}
            </span>

            <h2 className="velocity-title">
              {velocityContent.headingMain}
              <br />
              <span className="velocity-gradient-text">
                {velocityContent.headingGradient}
              </span>
            </h2>

            <p className="velocity-description">
              {velocityContent.description}
              <strong> We do the opposite.</strong>
            </p>

            <div className="velocity-timeline-card">
              <div className="d-flex align-items-center gap-4">
                <div className="velocity-number">
                  {velocityContent.timelineValue}
                </div>

                <div>
                  <div className="fw-bold fs-5">
                    {velocityContent.timelineLabel}
                  </div>

                  <div className="velocity-gradient-text fw-bold">
                    {velocityContent.timelineSubLabel}
                  </div>
                </div>
              </div>

              <p className="mt-3 mb-0 text-secondary">
                {velocityContent.timelineDetail}
              </p>
            </div>

          </div>

          {/* Right Cards */}
          <div className="col-lg-6">

            <div className="mb-4">
              <h3 className="velocity-small-title">
                {velocityContent.mapTitle}
              </h3>

              <p className="text-secondary">
                {velocityContent.mapDescription}
              </p>
            </div>

            <div className="row g-4">
              {velocityContent.channels.map((chan, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="velocity-card">

                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="velocity-dot"></span>

                      <h4 className="h6 fw-bold mb-0">
                        {chan.title}
                      </h4>
                    </div>

                    <p className="text-secondary mb-0">
                      {chan.desc}
                    </p>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


