"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './PricingHero.css'; // Import the custom CSS file below

const PricingHero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="pricing-hero position-relative overflow-hidden text-center py-5">
      {/* Background Gradients and Grid and are handled via CSS */}
      <div className="pricing-hero-bg-glows" />
      <div className="pricing-hero-grid-overlay" />

      <div className="container position-relative z-1 py-5">
        <motion.div 
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="col-12 col-lg-10 col-xl-8">
            
            {/* Badge */}
            <motion.div variants={fadeInUp} className="pricing-badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-1.5 mb-4">
              <span className="badge-pulse-dot rounded-circle" />
              Flexible, ROI-Driven Plans
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={fadeInUp}
              className="display-3 fw-black text-black tracking-tight mb-4 text-gradient-title"
            >
              Conference Marketing <br />
              <span className="text-gradient-accent">Pricing & Packages</span>
            </motion.h1>

            {/* Subtitle / Core Description */}
            <motion.p 
              variants={fadeInUp}
              className="lead text-muted-custom mx-auto mb-5 max-w-2xl"
            >
              Investment varies significantly based on event size, timeline, and channels. We offer transparent pricing built around your <strong className="text-white font-semibold">registration goals</strong> — not our revenue targets.
            </motion.p>

            {/* Value Proposition Tags */}
            <motion.div 
              variants={fadeInUp}
              className="pricing-tags-row d-flex flex-wrap justify-content-center gap-4 py-4 border-top border-bottom border-dark-custom mb-5"
            >
              <div className="d-flex align-items-center gap-2 text-light-custom">
                <svg className="icon-indigo" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Customized for Highest ROI</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-light-custom">
                <svg className="icon-purple" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>No Hidden Revenue Targets</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-light-custom">
                <svg className="icon-pink" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Scales with Event Size</span>
              </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div 
              variants={fadeInUp}
              className="d-flex align-items-center justify-content-center gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-gradient px-4 py-3 font-semibold rounded-3 shadow"
              >
                Explore Tiered Plans
              </motion.button>
              
              <motion.a 
                href="#custom-quote" 
                className="cta-link text-decoration-none font-semibold text-white d-inline-flex align-items-center gap-1 group"
              >
                Calculate Event ROI 
                <span className="arrow-transition">→</span>
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
