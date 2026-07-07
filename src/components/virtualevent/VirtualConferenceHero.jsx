"use client";

import React from 'react';
import { motion } from 'framer-motion';

const VirtualConferenceHero = () => {
  // Ultra-clean card reveal animation presets
  const cardRevealRight = {
    hidden: { opacity: 0, x: 40, y: 10 },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const cardRevealLeft = {
    hidden: { opacity: 0, x: -40, y: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 } 
    }
  };

  return (
    <>
      {/* Inline Scoped CSS Sheet - Complete design overhaul to light mode canvas */}
      <style dangerouslySetInnerHTML={{ __html: `
        .kinetic-split-section {
          background-color: #fafbfc !important; /* Pristine high-contrast modern light gray */
          color: #0f172a;
          min-height: 85vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          z-index: 1;
        }
        .kinetic-title-header {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #0f172a;
          line-height: 1.05;
        }
        .kinetic-meta-pill {
          background-color: #0f172a !important;
          color: #ffffff !important;
          font-size: 0.725rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 0.35rem 0.8rem;
          border-radius: 4px; /* Industrial sharp edges */
        }
        .kinetic-paragraph-body {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #334155;
        }
        .kinetic-card-stack-wrapper {
          position: relative;
          height: 480px;
          width: 100%;
        }
        /* Card Layer A: Anchored top-right with thick typography layout */
        .kinetic-layer-card-a {
          position: absolute;
          top: 10%;
          right: 5%;
          width: 85%;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.06);
          z-index: 3;
        }
        /* Card Layer B: Off-axis behind card A creating overlapping architecture layout */
        .kinetic-layer-card-b {
          position: absolute;
          bottom: 5%;
          left: 0;
          width: 80%;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.04);
          z-index: 2;
        }
        .kinetic-inner-bullet-dot {
          width: 5px;
          height: 5px;
          background-color: #0f172a;
        }
        .font-mono-industrial {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", Courier, monospace;
          font-size: 0.725rem;
          color: #64748b;
          letter-spacing: 0.02em;
        }
        .btn-kinetic-action {
          background-color: #0f172a;
          color: #ffffff !important;
          border: none;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }
        .btn-kinetic-action:hover {
          background-color: #1e293b;
        }
        .border-light-separator {
          border-color: #f1f5f9 !important;
        }
        .uppercase {
          text-transform: uppercase;
        }
      `}} />

      {/* Main Structural Viewport Grid Track */}
      <section className="kinetic-split-section py-5 position-relative">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            
            {/* LEFT BLOCK PANELS: Stark Left-Justified Text Layout Canvas */}
            <div className="col-12 col-lg-5 text-start">
              <div className="mb-4">
                <span className="badge kinetic-meta-pill uppercase mb-3">
                  Scale Configuration
                </span>
                <h1 className="kinetic-title-header display-4 mb-4">
                  Virtual Conference <br />
                  Marketing Focus
                </h1>
              </div>

              <div className="mb-5">
                <p className="kinetic-paragraph-body mb-3fw-bold text-dark">
                  Virtual and hybrid conferences have expanded the potential reach of professional events dramatically — a well-marketed virtual conference can attract attendees from every corner of the globe, at a fraction of the cost of filling a physical venue.
                </p>
                <p className="kinetic-paragraph-body small text-muted mb-0">
                  But the marketing challenge for virtual events is equally expanded: with no geographic limitation on your audience, your competition is also global. We specialize in virtual conference marketing that cuts through the noise, reaches your global professional audience, and drives registration and participation at scale.
                </p>
              </div>

              {/* Minimal Call to Action link row */}
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-kinetic-action px-4 py-2.5 uppercase tracking-wider">
                  Deploy Global Loop
                </button>
              </div>
            </div>

            {/* RIGHT BLOCK PANELS: Asymmetric Kinetic Overlapping Layer Cards Array */}
            <div className="col-12 col-lg-7 mt-5 mt-lg-0 ps-lg-5">
              <div className="kinetic-card-stack-wrapper">
                
                {/* 1. Forefront Top Layer Floating Card Block */}
                <motion.div 
                  variants={cardRevealRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="kinetic-layer-card-a p-4 p-sm-5 rounded-3 text-start"
                >
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-light-separator">
                    <span className="font-mono-industrial uppercase">[ Operational Challenge ]</span>
                    <span className="font-mono-industrial">// REF_01</span>
                  </div>
                  
                  <h3 className="fw-black h4 text-dark mb-3 tracking-tight">The Borderless Footprint</h3>
                  <p className="text-muted small mb-0 leading-relaxed">
                    Eliminating geographic constraints opens up your acquisition pipeline to international audiences, but it simultaneously forces your event to compete with international networks on a global timeline scale.
                  </p>
                </motion.div>

                {/* 2. Background Offset Layer Intersecting Card Block */}
                <motion.div 
                  variants={cardRevealLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="kinetic-layer-card-b p-4 rounded-3 text-start"
                >
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="kinetic-inner-bullet-dot rounded-circle" />
                    <span className="font-mono-industrial uppercase">Agency Execution Strategy</span>
                  </div>

                  <h4 className="fw-bold h5 text-dark mb-2 tracking-tight">Cutting Through Online Noise</h4>
                  <p className="text-muted x-small mb-0 line-height-tight">
                    We architect localized cross-border paid social infrastructure arrays and content pipelines engineered specifically to out-convert competitive digital spaces.
                  </p>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default VirtualConferenceHero;
