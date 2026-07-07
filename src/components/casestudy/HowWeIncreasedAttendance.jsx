"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './SuccessStoriesHero.css'; // Path to the companion CSS below

const HowWeIncreasedAttendance = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="gallery-case-section py-5 position-relative">
      <div className="container py-5">
        
        {/* Section Segment Header */}
        <div className="row mb-5 align-items-baseline">
          <div className="col-12 col-md-4 text-start">
            <span className="gallery-case-num font-monospace">// DISCOVERY_LOG_01</span>
          </div>
          <div className="col-12 col-md-8 text-start mt-2 mt-md-0">
            <h2 className="gallery-case-supertext text-uppercase font-monospace tracking-widest small">
              Case Study Framework
            </h2>
          </div>
        </div>

        {/* Main Spread Title */}
        <div className="row mb-5">
          <div className="col-12 text-start">
            <h3 className="display-4 fw-light text-serif tracking-tight text-slate-900 mb-2">
              How We Increased Attendance:
            </h3>
            <h4 className="display-5 fw-bold text-serif tracking-tight text-indigo-accent">
              Annual Technology Summit
            </h4>
          </div>
        </div>

        {/* Two-Column Editorial Text Block Layout */}
        <div className="row g-5 text-start pb-5 border-bottom border-gallery-light">
          
          {/* Left Column: The Challenge Narrative */}
          <div className="col-12 col-lg-6">
            <div className="pe-lg-4">
              <span className="font-monospace text-uppercase text-muted-gallery x-small d-block mb-2">
                [ Component: Challenge ]
              </span>
              <h5 className="fw-bold text-slate-900 fs-5 mb-3 tracking-tight">
                Plateaued Pipelines & Static Outreach
              </h5>
              <p className="gallery-case-body text-muted-gallery mb-0">
                A technology conference entering its 3rd year had plateaued at 400 attendees despite maintaining an excellent, high-profile speaker lineup. Previous internal marketing execution was strictly limited to repetitive email blasts sent to their existing static list and occasional manual organic social posts.
              </p>
            </div>
          </div>

          {/* Right Column: The Strategy Deployment */}
          <div className="col-12 col-lg-6 border-start-lg border-gallery-light">
            <div className="ps-lg-4">
              <span className="font-monospace text-uppercase text-muted-gallery x-small d-block mb-2">
                [ Component: Strategy ]
              </span>
              <h5 className="fw-bold text-slate-900 fs-5 mb-3 tracking-tight">
                Multi-Channel Tactical Synchronization
              </h5>
              <p className="gallery-case-body text-muted-gallery mb-0">
                We implemented a comprehensive, multi-channel structural campaign: enterprise conference SEO targeting 35 high-intent keyword phrases, precision LinkedIn Paid Ads architectures targeted straight at verified CTOs and engineering leaders, a hyper-targeted 6-stage email pre-registration sequence, and a formalized speaker amplification program coordinating promotional materials with 8 headline keynote speakers.
              </p>
            </div>
          </div>

        </div>

        {/* High-Contrast Horizontal Metrics Log Spread */}
        <motion.div 
          className="row g-4 pt-5 text-start align-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <div className="col-12 col-lg-3">
            <span className="font-monospace text-uppercase text-muted-gallery x-small d-block mb-1">
              // Core Outcomes
            </span>
            <h5 className="fw-bold text-slate-900 fs-4 tracking-tight mb-0">
              Documented Results
            </h5>
          </div>

          {/* Metrics Blocks */}
          {[
            { value: "+68%", label: "Registration Volume", sub: "Increased in the first year of strategic engagement" },
            { value: "-42%", label: "Cost-Per-Registration", sub: "Decreased versus the client's historical ad spend" },
            { value: "310%", label: "Organic Website Traffic", sub: "Grew over 6 months of active SEO orchestration" }
          ].map((stat, idx) => (
            <div className="col-12 col-sm-4 col-lg-3" key={idx}>
              <motion.div variants={fadeInUp} className="gallery-stat-block py-2">
                <div className="display-4 fw-black text-slate-900 mb-1 tracking-tight">
                  {stat.value}
                </div>
                <h6 className="fw-bold text-slate-900 small mb-1 tracking-tight">
                  {stat.label}
                </h6>
                <p className="x-small text-muted-gallery mb-0 line-height-tight">
                  {stat.sub}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowWeIncreasedAttendance;
