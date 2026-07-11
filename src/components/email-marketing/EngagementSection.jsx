"use client";

import Image from "next/image";

export default function EngagementSection() {
  const features = [
    "Real-time Registration Tracking",
    "Dynamic Personalization Engines",
    "A/B Testing for Subject Lines & CTAs",
  ];

  return (
    <section className="engagement-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-lg-6">
            <div className="engagement-image-wrapper">
              <Image
                src="/email-dashboard.jpg"
                alt="Email Marketing Analytics"
                width={700}
                height={500}
                className="img-fluid engagement-image"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <div className="engagement-content">

              <h2 className="engagement-title">
                Drive Engagement with
                <br />
                Data-Backed Strategies
              </h2>

              <p className="engagement-description">
                Our platform provides the tools you need to capitalize on these
                statistics. From automated drip campaigns to deep-segmentation
                AI, we ensure your email marketing is part of the elite 36x ROI
                bracket.
              </p>

              <div className="engagement-features">
                {features.map((item, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      ✓
                    </div>

                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}