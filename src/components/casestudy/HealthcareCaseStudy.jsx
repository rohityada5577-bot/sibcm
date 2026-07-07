"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './SuccessStoriesHero.css'; // Path to the fresh custom CSS file below

const HealthcareCaseStudy = () => {
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="newspaper-section py-5 position-relative">
      <div className="container py-5">
        
        {/* Asymmetrical Top Layout Wrapper */}
        <div className="row g-4 border-top-thick pt-4">
          
          {/* LEFT PANEL: Big Typography Title & Core Challenge Narrative */}
          <div className="col-12 col-lg-8 pe-lg-5 text-start">
            <span className="font-monospace text-uppercase text-muted-news small tracking-wider d-block mb-3">
              // CASE INDEX NO. 02
            </span>
            
            <h3 className="display-4 fw-black text-slate-900 mb-2 tracking-tight text-uppercase">
              Healthcare Marketing
            </h3>
            <h4 className="h2 fw-light font-serif text-serif text-indigo-news mb-5">
              Conference Case Study — Audience Breakout
            </h4>

            {/* The Challenge Block Grid */}
            <div className="mb-5">
              <div className="d-flex align-items-baseline gap-3 mb-2">
                <span className="news-marker">CHALLENGE:</span>
                <h5 className="fw-bold text-slate-900 m-0 fs-6 uppercase tracking-wide">Stalled Acquisition Pipeline</h5>
              </div>
              <p className="news-body-text text-muted-news mb-0">
                A healthcare marketing conference was struggling to reach beyond its existing internal email list. New attendee acquisition had stalled entirely, with a staggering 85% of total registrants being repeat attendees from previous event years. They lacked a clean blueprint to tap outside cohorts.
              </p>
            </div>

            {/* The Strategy Block Grid */}
            <div className="mb-0">
              <div className="d-flex align-items-baseline gap-3 mb-2">
                <span className="news-marker strategy">STRATEGY:</span>
                <h5 className="fw-bold text-slate-900 m-0 fs-6 uppercase tracking-wide">Multi-Tier Integration Layer</h5>
              </div>
              <p className="news-body-text text-muted-news mb-0">
                We engineered a fresh audience acquisition model: custom LinkedIn Ads architectures aimed directly at verified healthcare marketing directors and corporate CMOs, an insights-driven content marketing engine publishing monthly specialized industry reports to attract brand-new subscribers, and a strategic partner ecosystem coordinating outreach arrays across 4 regional healthcare associations.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: The Heavy Vertical Metrics Data Stack */}
          <div className="col-12 col-lg-4 mt-5 mt-lg-0 ps-lg-4 border-left-news">
            <div className="text-start">
              <span className="font-monospace text-uppercase text-muted-news small tracking-wider d-block mb-4">
                [ ATTRIBUTED CONVERSIONS ]
              </span>
              
              <motion.div 
                className="d-flex flex-column gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {/* Stat block 1 */}
                <motion.div variants={slideUp} className="news-stat-row">
                  <div className="news-stat-value fw-black text-slate-900">+125%</div>
                  <div className="news-stat-label fw-bold text-slate-900 uppercase">New Attendee Volume</div>
                  <div className="news-stat-sub text-muted-news small">Acquisition scale increased cleanly in year one.</div>
                </motion.div>

                {/* Stat block 2 */}
                <motion.div variants={slideUp} className="news-stat-row border-top-thin pt-4">
                  <div className="news-stat-value fw-black text-indigo-news">178%</div>
                  <div className="news-stat-label fw-bold text-slate-900 uppercase">Email Pipeline Growth</div>
                  <div className="news-stat-sub text-muted-news small">Expanded lists from 3,200 to 8,900 active subscribers over 9 months.</div>
                </motion.div>

                {/* Stat block 3 */}
                <motion.div variants={slideUp} className="news-stat-row border-top-thin pt-4">
                  <div className="news-stat-value fw-black text-slate-900">+54%</div>
                  <div className="news-stat-label fw-bold text-slate-900 uppercase">Net Conference Size</div>
                  <div className="news-stat-sub text-muted-news small">Total global attendance growth over baseline calculations.</div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthcareCaseStudy;
