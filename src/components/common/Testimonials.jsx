"use client";

import { useState, useEffect } from "react";

export default function TestimonialsSplit() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      metrics: "2.2x Attendance Expansion",
      quote: "EventPulse helped us grow our annual healthcare summit from 280 to 620 registered attendees in a single year. Their email marketing strategy alone drove 40% of our registrations. The investment paid for itself three times over.",
      name: "David Sterling",
      role: "Conference Director",
      organization: "Global Health Alliance",
      colorAccent: "#6366f1"
    },
    {
      metrics: "-61% Registration CAC",
      quote: "We had tried running Google Ads ourselves for two years with disappointing results. Their team restructured our entire paid advertising approach and our cost-per-registration dropped from $47 to $18 in 60 days.",
      name: "Amanda Ross",
      role: "Events Manager",
      organization: "Apex Enterprise Tech",
      colorAccent: "#0ea5e9"
    },
    {
      metrics: "200K+ LinkedIn Impressions",
      quote: "The speaker co-marketing program they built for us was a game-changer. Our keynote speakers collectively reached over 200,000 LinkedIn followers with perfectly crafted posts about our event. We had our best registration year ever.",
      name: "Marcus Vance",
      role: "Summit Organizer",
      organization: "FinTech Pioneers Network",
      colorAccent: "#a855f7"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="bg-white text-dark py-5 position-relative overflow-hidden" style={{ fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        .split-card-window {
          position: relative;
          min-height: 320px;
        }
        .split-carousel-pane {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .split-carousel-pane.active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
          position: relative;
        }
        .architect-quote-box {
          background: #f8fafc;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          position: relative;
        }
        .huge-quote-glyph {
          font-size: 5rem;
          font-family: serif;
          line-height: 1;
          opacity: 0.06;
          position: absolute;
          top: 1rem;
          left: 1.5rem;
        }
        .custom-dot {
          width: 8px;
          height: 8px;
          background-color: #cbd5e1;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-dot.active {
          width: 24px;
          border-radius: 4px;
        }
        .notice-tag-box {
          background-color: #fffbeb;
          border: 1px solid #fef3c7;
          border-left: 3px solid #d97706;
          border-radius: 8px;
        }
      `}</style>

      <div className="container px-4 my-5">
        <div className="row g-5 align-items-center">

          <div className="col-lg-5">
            <span className="badge rounded-pill px-3 py-2 mb-3 text-uppercase tracking-wider" style={{ backgroundColor: "rgba(99, 102, 241, 0.06)", color: "#4f46e5" }}>
              Social Proof Index
            </span>
            <h2 className="display-5 fw-black text-dark tracking-tight lh-sm mb-3">
              Conference Marketing Client Reviews
            </h2>
            <p className="text-muted small lh-base mb-4" style={{ fontSize: "0.95rem" }}>
              The most credible measure of our conference marketing expertise is the experiences of the event organizers we have worked with. Read what conference directors, association executives, and event professionals say about working with our agency — and the real results they achieved.
            </p>

            <div className="notice-tag-box p-3">
              <span className="fw-bold d-block text-amber-800 small text-uppercase mb-1" style={{ color: "#92400e", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
                ℹ Production Integration Directive
              </span>
              <span className="text-muted small lh-base d-block" style={{ fontSize: "0.8rem" }}>
                Replace the placeholders above with authentic client testimonials. Genuine specificity (real numbers, real names, real event names) is essential for both SEO credibility and visitor trust.
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="split-card-window">
              {testimonials.map((item, index) => {
                const isPaneActive = index === activeIndex;
                return (
                  <div key={index} className={`split-carousel-pane ${isPaneActive ? "active" : ""}`}>
                    <div className="p-5 architect-quote-box">
                      <div className="huge-quote-glyph" style={{ color: item.colorAccent }}>“</div>
           
                      <div className="mb-4">
                        <span className="badge rounded-pill px-3 py-1.5 fw-bold" style={{ backgroundColor: `${item.colorAccent}10`, color: item.colorAccent, border: `1px solid ${item.colorAccent}25` }}>
                          {item.metrics}
                        </span>
                      </div>


                      <p className="fs-5 text-dark lh-base mb-4" style={{ fontWeight: "400", position: "relative", zIndex: 1 }}>
                        "{item.quote}"
                      </p>

                      <div className="pt-3 border-top border-light">
                        <h3 className="h6 fw-bold text-dark m-0">{item.name}</h3>
                        <small className="text-muted">
                          {item.role}, <span className="fw-semibold" style={{ color: item.colorAccent }}>{item.organization}</span>
                        </small>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            <div className="d-flex justify-content-start gap-2 mt-4 ps-2">
              {testimonials.map((item, index) => (
                <button
                  key={index}
                  className={`custom-dot ${index === activeIndex ? "active" : ""}`}
                  style={{ backgroundColor: index === activeIndex ? item.colorAccent : undefined }}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Navigate directly to slide position ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
  <div className="container">
    <div className="text-center mb-5">
      <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
        Success Stories
      </span>
      <h2 className="display-5 fw-bold mt-3">
      Success Stories from Conferences
      </h2>
      <p className="text-muted col-lg-8 mx-auto">
        Beyond individual quotes, the pattern across our client success stories is consistent: conferences that commit to professional multi-channel marketing — started early, executed consistently, and measured precisely — grow their attendance year over year.
      </p>
    </div>

    {/* Main Highlight Card */}
    <div className="row justify-content-center mb-5">
      <div className="col-lg-10">
        <div className="card border-0 shadow-sm rounded-4 p-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-3">Across our client portfolio, we have seen:</h3>
              <p className="text-muted mb-0">
                registration increase in year-one marketing engagements

              </p>
            </div>

            <div className="col-lg-4 text-center">
              <div className="display-2 fw-bold text-primary">
                %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Statistics Cards */}
    <div className="row g-4">

      <div className="col-md-6 col-lg-3">
        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
          <div className="display-5 fw-bold text-primary mb-3">
            %
          </div>
          <h5 className="fw-semibold">
            Title
          </h5>
          <p className="text-muted small mb-0">
            Description
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
          <div className="display-5 fw-bold text-primary mb-3">
            %
          </div>
          <h5 className="fw-semibold">
            Title
          </h5>
          <p className="text-muted small mb-0">
            Description
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
          <div className="display-5 fw-bold text-primary mb-3">
            %
          </div>
          <h5 className="fw-semibold">
            Title
          </h5>
          <p className="text-muted small mb-0">
            Description
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
          <div className="display-5 fw-bold text-primary mb-3">
            X
          </div>
          <h5 className="fw-semibold">
            Title
          </h5>
          <p className="text-muted small mb-0">
            Description
          </p>
        </div>
      </div>

    </div>

  </div>

    </section>
    
  );
}
