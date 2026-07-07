"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HealthcareRegistryHero = () => {
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
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <>
      {/* Inline Scoped CSS - Keeps everything in one clean file */}
      <style dangerouslySetInnerHTML={{ __html: `
        .clinical-section {
          background-color: #ffffff !important;
          color: #1c1917;
        }
        .clinical-title {
          font-family: Garamond, Baskerville, "Times New Roman", serif;
          letter-spacing: -0.01em;
          color: #0f172a;
          line-height: 1.15;
        }
        .clinical-tag-pill {
          background-color: #f1f5f9 !important;
          color: #0f172a !important;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border: 1px solid #e2e8f0;
        }
        .clinical-lead-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #475569;
        }
        .border-clinical-separator {
          border-color: #e2e8f0 !important;
        }
        .border-left-indicator {
          border-left: 3px solid #0f172a !important;
        }
        .clinical-strategy-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .clinical-strategy-box:hover {
          border-color: #cbd5e1;
        }
        .clinical-bullet-icon {
          width: 28px;
          height: 28px;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          color: #0f172a;
          font-size: 0.8rem;
          font-weight: bold;
        }
        .font-mono-tech {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
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

      {/* Main Structural Render Track */}
      <section className="clinical-section py-5 position-relative">
        <div className="container py-5">
          
          {/* Asymmetrical Typography Header Split */}
          <div className="row g-5 align-items-start mb-5 pb-4 border-bottom border-clinical-separator">
            
            {/* Left Block: The Constraints Frame */}
            <div className="col-12 col-lg-5 text-start pe-lg-4">
              <span className="badge rounded-pill clinical-tag-pill uppercase mb-3">
                Protocol: Compliance & Targeting
              </span>
              
              <h1 className="clinical-title display-4 fw-light mb-4">
                Healthcare Event <br />
                <span className="fw-bold">Promotion</span>
              </h1>

              <p className="clinical-lead-text border-start border-left-indicator ps-3 mb-4 fst-italic">
                Healthcare conference marketing operates strictly under unique institutional constraints.
              </p>

              <p className="clinical-lead-text mb-0">
                Success requires working safely around rigid regulatory parameters on medical claims, addressing highly specialized audience segments (physicians, nurses, hospital administrators, pharma executives), and syncing directly with long planning cycles where professionals secure attendance approvals months in advance.
              </p>
            </div>

            {/* Right Block: The Strategic Approach Panels */}
            <div className="col-12 col-lg-7 ps-lg-5">
              <div className="text-start mb-3">
                <span className="font-mono-tech uppercase">// Operational Action Frameworks</span>
              </div>

              <motion.div 
                className="row g-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                
                {/* Approach Card 01 */}
                <div className="col-12">
                  <motion.div variants={fadeInUp} className="clinical-strategy-box p-4 rounded-3 d-flex gap-3 align-items-start text-start">
                    <div className="clinical-bullet-icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="fw-bold text-slate-900 fs-5 mb-2 tracking-tight">CME / CE Credit Emphasis</h4>
                      <p className="clinical-lead-text mb-0 small">
                        Continuing education accreditation is the primary motivation for healthcare professionals to travel. Our campaigns are structured to always lead heavily with explicit credit approval counts and validation details across early touchpoints.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Approach Card 02 */}
                <div className="col-12">
                  <motion.div variants={fadeInUp} className="clinical-strategy-box p-4 rounded-3 d-flex gap-3 align-items-start text-start">
                    <div className="clinical-bullet-icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="fw-bold text-slate-900 fs-5 mb-2 tracking-tight">Specialty-Specific Targeting</h4>
                      <p className="clinical-lead-text mb-0 small">
                        Broad targeting collapses in medical settings. We deploy granular architectural filters across LinkedIn networks and direct medical association databases, segmenting lists accurately by core medical specialty, active role, and credential codes.
                      </p>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            </div>

          </div>

          {/* Bottom Footnote Data Label for Trust */}
          <div className="row text-start mt-4">
            <div className="col-12">
              <span className="font-mono-tech">
                * Note: All clinical campaign promotional frameworks are cross-verified for HIPAA and data processing compliance before deployment.
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HealthcareRegistryHero;
