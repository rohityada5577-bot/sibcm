"use client";
import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // Default open the first one for high-end preview layouts

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does a conference marketing agency do?",
      answer: "A conference marketing agency handles end-to-end promotion for conferences, summits, and events. This includes SEO to rank your event pages on Google, paid advertising campaigns on Google and LinkedIn, email marketing sequences, social media management, speaker co-marketing, and content strategy — all coordinated to drive registrations and grow event attendance before, during, and after the event."
    },
    {
      question: "How do conferences get more attendees?",
      answer: "The most effective way to grow conference attendance is through a multi-channel marketing approach that starts 6–12 months before the event. Proven tactics include: ranking event pages in Google search for high-intent keywords, running targeted paid ad campaigns, deploying personalized email sequences, leveraging speaker networks for co-promotion, creating FOMO through social media content, and offering early-bird registration pricing.",
      highlight: "72% Attendee Target: Studies indicate that attendees say they are significantly more likely to register when initial invitations feel customized and tailored directly to them."
    },
    {
      question: "How to increase event registrations fast?",
      answer: "To increase registrations quickly, the most effective levers are paid advertising (Google Ads and LinkedIn Ads can start driving registrations within 24–48 hours), urgency-driven email campaigns to warm leads, retargeting campaigns for website visitors who have not yet registered, and personalized outreach to past attendees. A combination of these tactics, properly sequenced, can produce a significant registration spike within 2–4 weeks."
    },
    {
      question: "How much does conference marketing cost?",
      answer: "Conference marketing investment varies widely based on event size, geography, target audience, and timeline. Small conferences (under 500 attendees) typically invest a configured tier base to scale outreach channels safely, while massive conventions optimize around custom acquisition budgets tied directly to target ticket thresholds."
    }
  ];

  return (
    <section 
      className="faq-premium-scope" 
      style={{ 
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#030407",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      {/* Self-Contained High-Fidelity CSS & Layout Engines */}
      <style>{`
        @keyframes subtleRadarPulse {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(30px, -20px) scale(1.1); opacity: 0.5; }
        }
        
        .faq-layout-container {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Split Screen Modern Column Layout */
        .faq-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 992px) {
          .faq-split-grid {
            grid-template-columns: 0.8fr 1.2fr;
            align-items: start;
          }
          .faq-sticky-header-pane {
            position: sticky;
            top: 6rem;
          }
        }

        /* Premium Asymmetrical Accordion Strips */
        .faq-premium-strip-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 24px;
          margin-bottom: 1.25rem;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-premium-strip-card:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        .faq-premium-strip-card.is-active-node {
          background: rgba(13, 15, 24, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-color: var(--faq-accent, #6366f1);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }

        /* Trigger Button Mechanics */
        .faq-trigger-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 700;
          font-size: 1.15rem;
          padding: 2rem;
          border: none;
          text-align: left;
          cursor: pointer;
          gap: 1.5rem;
          transition: color 0.3s ease;
        }
        .faq-premium-strip-card.is-active-node .faq-trigger-btn {
          color: #ffffff;
        }
        
        /* Modern Vector SVG Arrow Transforms */
        .faq-icon-arrow-vector {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
          color: rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
        }
        .faq-premium-strip-card.is-active-node .faq-icon-arrow-vector {
          transform: rotate(135deg);
          color: var(--faq-accent);
        }

        /* Flawless Height Interpolation Grid Hack */
        .faq-collapse-grid-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-premium-strip-card.is-active-node .faq-collapse-grid-wrapper {
          grid-template-rows: 1fr;
        }
        .faq-inner-overflow-node {
          overflow: hidden;
        }
        .faq-body-text-block {
          color: #9ca3af;
          font-size: 1rem;
          line-height: 1.7;
          padding: 0 2rem 2rem 2rem;
          font-weight: 300;
        }

        /* Ambient Glow Spheres */
        .faq-fluid-glow-mesh {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(130px);
          animation: subtleRadarPulse 16s infinite ease-in-out;
        }
      `}</style>

      {/* High-End Fluid Atmospheric Canvas Underlays */}
      <div className="faq-fluid-glow-mesh" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", top: "-10%", left: "-10%" }} />
      <div className="faq-fluid-glow-mesh" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)", bottom: "-10%", right: "-10%", animationDelay: "-6s" }} />

      <div className="faq-layout-container">
        <div className="faq-split-grid">
          
          {/* Left Column: Fixed Sticky Content Billboard Block */}
          <div className="faq-sticky-header-pane">
            <span 
              style={{
                display: "inline-block",
                padding: "0.4rem 1.2rem",
                fontSize: "0.75rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                color: "#a78bfa",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                borderRadius: "50px",
                marginBottom: "1.5rem"
              }}
            >
              Intellectual Core
            </span>
            <h2 style={{ fontSize: "3.5rem", fontWeight: "900", lineHeight: "1.15", letterSpacing: "-0.04em", color: "#ffffff", margin: 0 }}>
              Frequently Asked <br />
              <span style={{ background: "linear-gradient(135deg, #a855f7 20%, #6366f1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Questions
              </span>
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.65", color: "#6b7280", marginTop: "1.5rem", fontWeight: "400", maxWidth: "400px", margin: "1.5rem 0 0 0" }}>
              Can't find the data parameters you are looking for? Contact our event logistics team for real-time channel advice.
            </p>
          </div>

                    {/* Right Column: High-End Grid-Interpolated Accordion Array */}
          <div className="faq-accordion-stack-panel">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              // Localized unique gradient string configuration mapping
              const accentColor = index % 2 === 0 ? "#a855f7" : "#6366f1";

              return (
                <div 
                  key={index} 
                  className={`faq-premium-strip-card ${isOpen ? 'is-active-node' : ''}`}
                  style={{ "--faq-accent": accentColor }}
                >
                  <button 
                    className="faq-trigger-btn"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span style={{ letterSpacing: "-0.01em" }}>{faq.question}</span>
                    
                    {/* Modern Geometric Plus-to-Cross Vector Icon */}
                    <svg className="faq-icon-arrow-vector" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  
                  {/* Flawless height expansion utilizing pure modern css layout properties */}
                  <div className="faq-collapse-grid-wrapper">
                    <div className="faq-inner-overflow-node">
                      <div className="faq-body-text-block">
                        <p style={{ margin: faq.highlight ? "0 0 1.5rem 0" : "0" }}>
                          {faq.answer}
                        </p>
                        
                        {faq.highlight && (
                          <div 
                            style={{ 
                              background: "rgba(99, 102, 241, 0.04)",
                              borderLeft: `3px solid ${accentColor}`,
                              color: "#e2e8f0",
                              padding: "1.25rem 1.5rem",
                              borderRadius: "0 14px 14px 0",
                              fontSize: "0.92rem",
                              lineHeight: "1.6",
                              fontWeight: "400"
                            }}
                          >
                            {faq.highlight}
                          </div>
                        )}
                      </div>
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

