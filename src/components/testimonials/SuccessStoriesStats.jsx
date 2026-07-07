"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css'; // Dedicated companion stylesheet below

const SuccessStoriesStats = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  // Structured metrics data based on your portfolio patterns
  const metrics = [
    { value: "62%", label: "Average Registration Increase", sub: "Achieved in year-one marketing engagements" },
    { value: "-38%", label: "Reduction in Cost-per-Registration", sub: "Driven by continuous campaign optimization" },
    { value: "280%", label: "Organic Search Traffic Growth", sub: "Within 6 months of comprehensive SEO launch" },
    { value: "3.8x", label: "Return on Marketing Investment", sub: "Across all full-campaign client engagements" }
  ];

  return (
    <section className="success-stories-section bg-white text-dark py-5 position-relative">
      <div className="container py-5">
        
        {/* Top Text Content Block */}
        <div className="row justify-content-center text-center mb-5 pb-3">
          <motion.div 
            className="col-12 col-lg-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="badge rounded-pill stats-section-badge mb-3">Portfolio Highlights</span>
            <h2 className="fw-black display-5 text-slate-900 mb-4 tracking-tight">
              Success Stories from Conferences
            </h2>
            <p className="text-muted-stats lead mx-auto max-w-2xl">
              Beyond individual quotes, the pattern across our client success stories is consistent: conferences that commit to professional multi-channel marketing — started early, executed consistently, and measured precisely — grow their attendance year over year.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Metric Grid Blocks */}
        <motion.div 
          className="row g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((item, idx) => (
            <div className="col-12 col-sm-6 col-lg-3" key={idx}>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="stat-card h-100 p-4 rounded-4 border border-light-grey text-center d-flex flex-column justify-content-center"
              >
                {/* Giant Metric Blast */}
                <div className="stat-number fw-extrabold mb-2 tracking-tight">
                  {item.value}
                </div>
                
                {/* Descriptive Headers */}
                <h4 className="fs-6 fw-bold text-slate-900 mb-2 px-1">
                  {item.label}
                </h4>
                
                <p className="text-muted-stats small mb-0 px-2">
                  {item.sub}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Dynamic Bottom Context Note */}
        <motion.div 
          className="row justify-content-center mt-5 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="col-12 col-md-10 col-lg-8">
            <div className="stats-footer-note p-3 rounded-3 d-inline-block border border-light-grey">
              <span className="fw-semibold text-slate-900 small">Across Our Full Portfolio:</span>
              <span className="text-muted-stats small ms-1">All benchmarks are documented via live data across enterprise & association systems.</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessStoriesStats;
