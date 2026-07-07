"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './SuccessStoriesHero.css'; // Path to the companion CSS below

const SuccessStoriesHero = () => {
  // Staggered entrance animation parameters
  const slideUp = {
    hidden: { opacity: 0, y: 35 },
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
      transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
  };

  return (
    <section className="stories-hero bg-slate-950 text-slate-200 py-5 position-relative overflow-hidden">
      {/* Dark Mode Grid Matrix and Light Spheres */}
      <div className="hero-matrix-mesh" />
      <div className="hero-radial-flare" />

      <div className="container position-relative z-3 py-5">
        <motion.div 
          className="row justify-content-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="col-12 col-lg-9 col-xl-8">
            
            {/* Context Badge */}
            <motion.div variants={slideUp} className="badge rounded-pill framework-proof-badge mb-3">
              <span className="live-pulse-dot" /> Proven Outcomes
            </motion.div>

            {/* Main Page Title Header */}
            <motion.h1 
              variants={slideUp}
              className="text-white fw-black display-3 mb-4 tracking-tight hero-gradient-title"
            >
              Conference Marketing <br />
              <span className="accent-text-glow">Success Stories</span>
            </motion.h1>

            {/* Editorial Statement / Descriptive Subtitle */}
            <motion.p 
              variants={slideUp}
              className="text-muted-hero lead mx-auto max-w-2xl mb-4 font-monospace fs-5 text-indigo-light"
            >
              Results are the only thing that matters.
            </motion.p>

            <motion.p 
              variants={slideUp}
              className="text-muted-hero mx-auto max-w-3xl lead-hero mb-5"
            >
              Every strategy, every campaign, and every marketing recommendation we make is validated by real outcomes for real conferences. This page documents how our multi-channel conference marketing approach has driven measurable attendance growth, registration increases, and ROI for conferences across industries.
            </motion.p>

            {/* Production Team Alert Bar */}
            <motion.div 
              variants={slideUp}
              className="p-3 mx-auto max-w-3xl production-notice-box rounded-3 text-start d-flex align-items-start gap-3 border-dashed"
            >
              <span className="info-icon flex-shrink-0">⚙️</span>
              <div>
                <span className="fw-bold text-white small d-block mb-1">Internal Team Deployment Framework:</span>
                <span className="text-muted-hero x-small-text d-block">
                  Replace the sample card frameworks below with your actual case studies once available. The layouts provided serve as SEO-optimized structural templates built explicitly for documenting real client results.
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesHero;
