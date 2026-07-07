"use client";

import React from 'react';
import { motion } from 'framer-motion';

const IndustryStrategiesMatrix = () => {
  // Staggered clean fade animation presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const crossIndustries = [
    { num: "01", name: "Legal & Professional Services", desc: "Bar association partnerships, CLE credit emphasis, compliance and ethics framing." },
    { num: "02", name: "Human Resources", desc: "SHRM network leverage, DEI and leadership positioning, corporate learning budget targeting." },
    { num: "03", name: "Real Estate & Construction", desc: "Investor summit positioning, developer community outreach, commercial real estate networks." },
    { num: "04", name: "Manufacturing & Supply Chain", desc: "Trade show experience, distributor and vendor targeting, operational ROI framing." },
    { num: "05", name: "Nonprofit & Association", desc: "Member activation, mission-driven messaging, volunteer and community engagement." }
  ];

  return (
    <>
      {/* Inline Scoped CSS - Keeps your architecture clean and self-contained */}
      <style dangerouslySetInnerHTML={{ __html: `
        .matrix-section {
          background-color: #ffffff !important;
          color: #1c1917;
        }
        .matrix-title {
          font-family: Garamond, Baskerville, "Times New Roman", serif;
          letter-spacing: -0.01em;
          color: #0f172a;
          line-height: 1.15;
        }
        .matrix-tag-pill {
          background-color: #f1f5f9 !important;
          color: #0f172a !important;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border: 1px solid #e2e8f0;
        }
        .matrix-lead-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #475569;
        }
        .border-matrix-separator {
          border-color: #e2e8f0 !important;
        }
        .border-left-indicator-matrix {
          border-left: 3px solid #7c3aed !important; /* Premium Purple Accent */
        }
        .matrix-item-row {
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          transition: background-color 0.2s ease, padding 0.2s ease;
        }
        .matrix-item-row:hover {
          background-color: #f8fafc;
        }
        .matrix-mono-num {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          color: #94a3b8;
          font-size: 0.8rem;
          font-weight: bold;
        }
        .matrix-item-row:hover .matrix-mono-num {
          color: #7c3aed;
        }
        .font-mono-tech-matrix {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.75rem;
          color: #94a3b8;
        }
        .text-slate-900 {
          color: #0f172a !important;
        }
        .uppercase {
          text-transform: uppercase;
        }
      `}} />

      {/* Main UI Rendering Layer */}
      <section className="matrix-section py-5 position-relative">
        <div className="container py-5">
          
          {/* Asymmetrical Structural Grid Split */}
          <div className="row g-5 align-items-start">
            
            {/* Left Column: Core Value Proposition & Philosophical Framing */}
            <div className="col-12 col-lg-5 text-start pe-lg-4 sticky-lg-top" style={{ top: "2rem" }}>
              <span className="badge rounded-pill matrix-tag-pill uppercase mb-3">
                Strategic Alignment
              </span>
              
              <h1 className="matrix-title display-4 fw-light mb-4">
                Why Each Industry <br />
                <span className="fw-bold">Needs Event Marketing</span>
              </h1>

              <p className="matrix-lead-text border-start border-left-indicator-matrix ps-3 mb-4 fst-italic">
                Generic conference marketing consistently underperforms.
              </p>

              <p className="matrix-lead-text mb-0">
                Every distinct sector operates on its own event calendar, maps onto its own unique audience behavior loops, and faces its own set of aggressively competing conferences for attendees' limited time and capital. Applying the exact same flat promotional strategy regardless of vertical scale will cap your registration velocity.
              </p>
            </div>

            {/* Right Column: The 5 Cross-Vertical Micro-Strategies */}
            <div className="col-12 col-lg-7 ps-lg-5">
              <div className="text-start mb-3">
                <span className="font-mono-tech-matrix uppercase">// Cross-Sector Operational Capabilities</span>
              </div>

              <motion.div 
                className="border-top border-matrix-separator"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {crossIndustries.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="matrix-item-row py-4 px-2 d-flex flex-column flex-sm-row gap-3 align-items-start text-start"
                  >
                    {/* Monospaced Numeric Code Pointer */}
                    <div className="matrix-mono-num pt-1 flex-shrink-0">
                      // BLOCK_{item.num}
                    </div>
                    
                    {/* Content Strings */}
                    <div>
                      <h4 className="fw-bold text-slate-900 fs-5 mb-2 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="matrix-lead-text mb-0 small">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default IndustryStrategiesMatrix;
