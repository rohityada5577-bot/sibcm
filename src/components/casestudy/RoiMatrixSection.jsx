"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './SuccessStoriesHero.css'; // Path to the fresh custom CSS file below

const RoiMatrixSection = () => {
  // Staggered child animation presets
  const cardEntrance = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const roiChannels = [
    { type: "Email Marketing", stat: "$36–$42", label: "Return per $1 spent", sub: "The highest yielding channel in our active portfolio.", progress: "w-100" },
    { type: "Conference SEO", stat: "8x Return", label: "Average timeline return", sub: "Measured comprehensively over 12-month campaign cycles.", progress: "w-85" },
    { type: "LinkedIn Paid Ads", stat: "3–5x ROAS", label: "Return on ad spend", sub: "When targeted straight at verified B2B industry leaders.", progress: "w-65" },
    { type: "Full Multi-Channel", stat: "4–6x ROI", label: "Overall return shift", sub: "Achieved comprehensively across full-campaign deployments.", progress: "w-75" }
  ];

  const comparisons = [
    { metric: "Registration Growth", scale: "30% – 120%", label: "Increase in year-one engagements" },
    { metric: "Cost-Per-Registration", scale: "20% – 50%", label: "Decrease achieved through campaign optimization" },
    { metric: "Organic Website Traffic", scale: "150% – 400%", label: "Increase through SEO and content marketing" },
    { metric: "Email List Size", scale: "50% – 200%", label: "Growth through aggressive list-building campaigns" },
    { metric: "Social Media Reach", scale: "200% – 500%", label: "Increase through coordinated organic and paid social" }
  ];

  return (
    <section className="roi-matrix-wrapper py-5 position-relative">
      <div className="container py-5">
        
        {/* BLOCK 1: ROI From Event Marketing Frameworks */}
        <div className="row g-4 align-items-center mb-5 pb-5 border-bottom border-light-matrix">
          <div className="col-12 col-lg-4 text-start">
            <span className="matrix-badge mb-2 d-inline-block">Yield Analytics</span>
            <h2 className="fw-black text-slate-900 tracking-tight display-5 mb-3">
              ROI from Event <br />Marketing
            </h2>
            <p className="text-muted-matrix small-lead">
              The return from conference marketing investment varies based on ticket prices, audience size, and the channels deployed. Here are the clear frameworks our clients typically experience:
            </p>
          </div>

          <div className="col-12 col-lg-8">
            <motion.div 
              className="row g-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {roiChannels.map((item, idx) => (
                <div className="col-12 col-sm-6" key={idx}>
                  <motion.div variants={cardEntrance} className="roi-analytic-card p-4 rounded-4 text-start">
                    <span className="font-monospace text-muted-matrix uppercase x-small d-block mb-1">// {item.type}</span>
                    <div className="fw-black text-slate-900 display-6 tracking-tight mb-1">{item.stat}</div>
                    <div className="fw-bold text-indigo-matrix small mb-2">{item.label}</div>
                    <p className="text-muted-matrix x-small mb-3">{item.sub}</p>
                    
                    {/* Minimalist Tech Performance Indicator Bar */}
                    <div className="matrix-progress-track rounded-pill">
                      <div className={`matrix-progress-fill rounded-pill ${item.progress}`} />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* BLOCK 2: Before and After Precise Comparative System */}
        <div className="row g-5 align-items-stretch mt-4">
          <div className="col-12 col-lg-5 text-start d-flex flex-column justify-content-between">
            <div>
              <span className="matrix-badge purple mb-2 d-inline-block">Performance Baselines</span>
              <h3 className="fw-black text-slate-900 tracking-tight display-5 mb-4">
                Before and After Results
              </h3>
              <p className="text-muted-matrix mb-0 line-height-relaxed">
                Every conference we take on begins with a detailed baseline measurement: current registration numbers, website traffic, email open rates, cost-per-registration, and channel-by-channel attribution. This deep-dive structural baseline makes before-and-after comparisons precise, verified, and highly credible.
              </p>
            </div>

            {/* Split Visual Anchor Block */}
            <div className="p-4 before-after-split-box rounded-4 mt-5 border border-light-matrix d-flex justify-content-between text-center position-relative overflow-hidden">
              <div className="position-absolute split-line" />
              <div className="w-50">
                <span className="text-muted-matrix font-monospace uppercase x-small d-block mb-1">Legacy State</span>
                <span className="fw-bold text-danger fs-5">Before</span>
                <p className="text-muted-matrix x-small mb-0 mt-1">Stagnant Pools & High CPA</p>
              </div>
              <div className="w-50">
                <span className="text-muted-matrix font-monospace uppercase x-small d-block mb-1">Optimised Loop</span>
                <span className="fw-bold text-success fs-5">After</span>
                <p className="text-muted-matrix x-small mb-0 mt-1">Compounding Scale & ROI</p>
              </div>
            </div>
          </div>

          {/* Vertical Index Comparison Track */}
          <div className="col-12 col-lg-7 ps-lg-5 mt-5 mt-lg-0">
            <div className="text-start mb-3">
              <span className="font-monospace text-uppercase text-muted-matrix x-small">// Expectation Benchmarks</span>
            </div>

            <motion.div 
              className="d-flex flex-column gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {comparisons.map((row, idx) => (
                <motion.div 
                  variants={cardEntrance}
                  whileHover={{ x: 6 }}
                  className="comparison-index-row p-3 rounded-3 border border-light-matrix d-flex flex-wrap align-items-center justify-content-between gap-3 text-start"
                  key={idx}
                >
                  <div>
                    <h4 className="fw-bold text-slate-900 fs-6 mb-1 tracking-tight">{row.metric}</h4>
                    <p className="text-muted-matrix x-small mb-0">{row.label}</p>
                  </div>
                  <div className="comparison-scale-blast font-monospace fw-black text-slate-900 px-3 py-1.5 rounded-3">
                    {row.scale}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoiMatrixSection;
