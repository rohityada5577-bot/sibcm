"use client";

import React from 'react';
import { motion } from 'framer-motion';

const EducationConferenceHero = () => {
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
      {/* Inline Scoped CSS - Self-contained single-file configuration */}
      <style dangerouslySetInnerHTML={{ __html: `
        .edu-section {
          background-color: #ffffff !important;
          color: #1c1917;
        }
        .edu-title {
          font-family: Garamond, Baskerville, "Times New Roman", serif;
          letter-spacing: -0.01em;
          color: #0f172a;
          line-height: 1.15;
        }
        .edu-tag-pill {
          background-color: #f1f5f9 !important;
          color: #0f172a !important;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border: 1px solid #e2e8f0;
        }
        .edu-lead-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #475569;
        }
        .border-edu-separator {
          border-color: #e2e8f0 !important;
        }
        .border-left-indicator-edu {
          border-left: 3px solid #4f46e5 !important; /* Premium Indigo Accent */
        }
        .edu-strategy-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .edu-strategy-box:hover {
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.05);
        }
        .edu-bullet-num {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          width: 32px;
          height: 32px;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          color: #4f46e5;
          font-size: 0.8rem;
          font-weight: bold;
        }
        .font-mono-tech-edu {
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

      {/* Main UI Rendering Canvas */}
      <section className="edu-section py-5 position-relative">
        <div className="container py-5">
          
          {/* Asymmetrical Split Column Layout Grid */}
          <div className="row g-5 align-items-start mb-5 pb-4 border-bottom border-edu-separator">
            
            {/* Left Column: Audiences, Stagnations & Budget Framing */}
            <div className="col-12 col-lg-5 text-start pe-lg-4">
              <span className="badge rounded-pill edu-tag-pill uppercase mb-3">
                Segment: Academic & EdTech Tracks
              </span>
              
              <h1 className="edu-title display-4 fw-light mb-4">
                Education Conferences <br />
                <span className="fw-bold">Marketing</span>
              </h1>

              <p className="edu-lead-text border-start border-left-indicator-edu ps-3 mb-4 fst-italic">
                Value-for-money positioning is critical under strict institutional budget rules.
              </p>

              <p className="edu-lead-text mb-0">
                Education conferences serve a highly diverse target audience — school administrators, K-12 teachers, edtech vendors, academic researchers, and regional policy makers — requiring sharply segmented messaging tracks. Funding parameters mean your promotions must align perfectly with institutional value frameworks.
              </p>
            </div>

            {/* Right Column: Execution Tactics Index Stacks */}
            <div className="col-12 col-lg-7 ps-lg-5">
              <div className="text-start mb-3">
                <span className="font-mono-tech-edu uppercase">// Strategic Deployment Playbook</span>
              </div>

              <motion.div 
                className="d-flex flex-column gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                
                {/* Tactic Card 01 */}
                <motion.div variants={fadeInUp} className="edu-strategy-box p-4 rounded-3 d-flex gap-3 align-items-start text-start">
                  <div className="edu-bullet-num rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="fw-bold text-slate-900 fs-5 mb-2 tracking-tight">Institutional & Group Incentives</h4>
                    <p className="edu-lead-text mb-0 small">
                      We design targeted early-bird structures and layered tier-group discounts engineered explicitly for schools, colleges, and complete districts sending multiple delegates simultaneously.
                    </p>
                  </div>
                </motion.div>

                {/* Tactic Card 02 */}
                <motion.div variants={fadeInUp} className="edu-strategy-box p-4 rounded-3 d-flex gap-3 align-items-start text-start">
                  <div className="edu-bullet-num rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="fw-bold text-slate-900 fs-5 mb-2 tracking-tight">Professional Development & CPD Mapping</h4>
                    <p className="edu-lead-text mb-0 small">
                      Attendance requires justification. Our copy layers lead heavily with clear professional development parameters and validated CPD credit counts across early conversion funnel touchpoints.
                    </p>
                  </div>
                </motion.div>

                {/* Tactic Card 03 */}
                <motion.div variants={fadeInUp} className="edu-strategy-box p-4 rounded-3 d-flex gap-3 align-items-start text-start">
                  <div className="edu-bullet-num rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="fw-bold text-slate-900 fs-5 mb-2 tracking-tight">Administrator Approval Funnels</h4>
                    <p className="edu-lead-text mb-0 small">
                      Because teacher attendance requires institutional clearance, we engineer specialized toolkits, email templates, and value briefs directed at district administrators to fast-track approvals.
                    </p>
                  </div>
                </motion.div>

              </motion.div>
            </div>

          </div>

          {/* Bottom Compliance Track Note */}
          <div className="row text-start mt-4">
            <div className="col-12">
              <span className="font-mono-tech-edu">
                * Note: All marketing pipelines are configured to align seamlessly with regional school district procurement schedules and academic grant budget tracking windows.
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default EducationConferenceHero;
