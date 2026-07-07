"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './industries.css'; // Path to your companion stylesheet below

const IndustryHero = () => {
  // Cohesive entrance animations
  const fadeInUp = {
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
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section className="industry-hero bg-slate-950 text-slate-200 py-5 position-relative overflow-hidden">
      {/* Structural matrix meshes and deep ambient light spots */}
      <div className="ind-grid-overlay" />
      <div className="ind-ambient-flare" />

      <div className="container position-relative z-3 py-5">
        <div className="row g-5 align-items-center">
          
          {/* LEFT SIDE: Core Global Agency Philosophy */}
          <motion.div 
            className="col-12 col-lg-5 text-start"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="badge rounded-pill industry-badge mb-3">
              <span className="live-radar-dot" /> Sector Specialization
            </span>
            
            <h1 className="display-4 fw-black text-white mb-4 tracking-tight line-height-tight">
              Conference Marketing <br />
              <span className="ind-text-glow">For All Industries</span>
            </h1>

            <p className="text-muted-ind mb-4 lead-ind">
              Conference marketing is not one-size-fits-all. A healthcare framework is fundamentally different from a tech summit or a finance event.
            </p>

            <p className="text-muted-ind small-ind mb-0">
              Different audiences require different motivations, compliance parameters, and promotion pipelines. We bring deep, data-validated industry expertise to every vertical we scale.
            </p>
          </motion.div>

          {/* RIGHT SIDE: Dedicated Tech Conference Deep-Dive Spread */}
          <div className="col-12 col-lg-7 ps-lg-5">
            <div className="text-start mb-3">
              <span className="font-monospace text-uppercase text-muted-ind x-small-tech">// Active Channel Log: Tech Tracks</span>
            </div>

            <motion.div 
              className="tech-terminal-card p-4 p-sm-5 rounded-4 bg-slate-900 border-dark-custom position-relative"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Terminal Code Brackets styling */}
              <div className="terminal-cross-mark position-absolute top-0 end-0 p-3 font-monospace">[ x ]</div>
              
              <div className="mb-4">
                <span className="badge rounded-pill tech-badge mb-2">Vertical Blueprint</span>
                <h2 className="text-white fw-bold h3 tracking-tight">Marketing for Tech Conferences</h2>
                <p className="text-muted-ind small mb-0 mt-2">
                  Technology conferences attract developers, product leads, CTOs, and founders — audiences that are highly online yet deeply skeptical of traditional corporate advertising.
                </p>
              </div>

              {/* Channel Pillars Breakdown rows */}
              <div className="d-flex flex-column gap-3 border-top border-dark-custom pt-4">
                
                {/* Channel 1 */}
                <motion.div variants={fadeInUp} className="terminal-channel-row p-3 rounded-3">
                  <div className="d-flex gap-3 align-items-start">
                    <div className="channel-tech-avatar font-monospace rounded-2 flex-shrink-0">#01</div>
                    <div>
                      <h4 className="text-white fs-6 fw-bold mb-1">Developer Community Channels</h4>
                      <p className="text-muted-ind x-small-tech mb-0">
                        Strategic, high-affinity placements inside GitHub, Hacker News, specialized Reddit dev networks, and active Discord architectures where your audience naturally communicates.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Channel 2 */}
                <motion.div variants={fadeInUp} className="terminal-channel-row p-3 rounded-3">
                  <div className="d-flex gap-3 align-items-start">
                    <div className="channel-tech-avatar font-monospace rounded-2 flex-shrink-0">#02</div>
                    <div>
                      <h4 className="text-white fs-6 fw-bold mb-1">Technical Content Marketing</h4>
                      <p className="text-muted-ind x-small-tech mb-0">
                        Production-grade engineering case logs, technical tutorials, and video talk previews that authentically demonstrate your event's architectural depth.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
