"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css'; // Path to your companion stylesheet

const AccountabilityTrust = () => {
  const slideUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="accountability-section bg-white py-5 position-relative overflow-hidden">
      {/* Structural Top Accent Line */}
      <div className="top-accent-line" />

      <div className="container py-5 position-relative z-2">
        <div className="row g-5 align-items-stretch">
          
          {/* LEFT SIDE: Accountability & Measurable Results */}
          <motion.div 
            className="col-12 col-lg-6 d-flex flex-column justify-content-between text-start pe-lg-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <div>
              <span className="badge rounded-pill white-section-badge mb-3">Core Accountability</span>
              <h2 className="fw-black display-5 text-slate-900 mb-4 tracking-tight">
                Measurable Results <br />from Campaigns
              </h2>
              <p className="text-muted-editorial font-serif fst-italic fs-5 mb-4 border-start border-3 border-indigo-accent ps-3">
                Marketing accountability is non-negotiable. There are no vanity metrics here.
              </p>
              <p className="text-muted-editorial mb-0 lead-editorial">
                Every single client we work with receives full attribution reporting that shows exactly how many registrations each campaign, channel, and individual ad generated — along with the cost-per-registration for each. We look only at the concrete numbers that matter for filling your event seats.
              </p>
            </div>

            {/* Horizontal Micro-Metrics Loop */}
            <div className="row g-3 mt-5 pt-4 border-top border-light-grey">
              <div className="col-6 col-sm-4">
                <div className="fw-black fs-4 text-slate-900 mb-0">100%</div>
                <div className="text-muted-editorial x-small tracking-wider uppercase">Full Attribution</div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="fw-black fs-4 text-slate-900 mb-0">Real-Time</div>
                <div className="text-muted-editorial x-small tracking-wider uppercase">Dashboard Flows</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Reputation, Retention, & Trust Canvas */}
          <motion.div 
            className="col-12 col-lg-6 mt-lg-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <div className="reputation-editorial-card h-100 p-4 p-sm-5 rounded-4 d-flex flex-column justify-content-between">
              <div>
                <span className="badge rounded-pill purple-section-badge mb-3">Our Foundation</span>
                <h3 className="fw-extrabold text-slate-900 h2 mb-4 tracking-tight">
                  Agency Reputation <br />and Trust
                </h3>
                <p className="text-muted-editorial mb-4 line-height-relaxed">
                  Our agency reputation is built entirely on a single foundation: conference organizers who hired us once because they needed to solve an urgent attendance problem, and hired us again because we solved it.
                </p>
                <p className="text-muted-editorial mb-0 line-height-relaxed">
                  Our client retention rate reflects the most critical truth about conference marketing: when the right strategy is deployed by the right specialists, conferences fill seats.
                </p>
              </div>

              {/* High Contrast Impact Callout Box */}
              <div className="mt-5 p-4 retention-highlight-box rounded-3 border-start border-3 border-purple-accent">
                <p className="fw-bold text-slate-900 small mb-1">
                  The Retention Truth:
                </p>
                <p className="text-muted-editorial small mb-0 font-monospace">
                  Compounding long-term event growth tracks directly with consistent specialist execution.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AccountabilityTrust;
