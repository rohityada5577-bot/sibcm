"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './SuccessStoriesHero.css'; // Path to the fresh custom CSS file below

const ConferenceFramework = () => {
  const pillars = [
    {
      num: "I.",
      tag: "The Challenge",
      title: "Attendance Stagnation",
      desc: "The explicit registration bottlenecks and pipeline limitations your event faced prior to campaign launch."
    },
    {
      num: "II.",
      tag: "The Strategy",
      title: "Multi-Channel Deployment",
      desc: "The exact promotional channel mix, paid ad asset allocation, and tactical roadmaps deployed for your specific audience."
    },
    {
      num: "III.",
      tag: "The Results",
      title: "Attributed Revenue Metrics",
      desc: "Verifiable ticket enrollment scale, percentage increases, and total gross return on marketing spend."
    },
    {
      num: "IV.",
      tag: "The Timeline",
      title: "Run-Time Windows",
      desc: "The exact duration and continuous optimization tracking required to reach mature campaign velocity."
    }
  ];

  // Clean fade-in animation variables
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="gallery-framework-section py-5 position-relative">
      <div className="container py-5">
        
        {/* Editorial Title Block */}
        <div className="row mb-5 pb-4 align-items-end">
          <div className="col-12 col-md-7 text-start">
            <span className="gallery-meta-label font-monospace text-uppercase d-block mb-2">// Diagnostic Blueprint</span>
            <h2 className="gallery-main-title display-4 fw-light text-serif tracking-tight mb-0">
              Real Conference <br />
              <span className="fw-bold">Growth Results</span>
            </h2>
          </div>
          <div className="col-12 col-md-5 text-start mt-3 mt-md-0 ps-md-4 border-start border-md-light">
            <p className="gallery-lead-text text-muted-gallery mb-0">
              What separates meaningful case studies from empty testimonials is specificity: exact numbers, named strategies, and documented outcomes. Here is the framework we map to every case study.
            </p>
          </div>
        </div>

        {/* Vertical Exhibition Timeline Track */}
        <motion.div 
          className="gallery-timeline-wrapper position-relative mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Centered Timeline Spine Line (Handled by CSS) */}
          <div className="gallery-timeline-spine d-none d-lg-block" />

          {pillars.map((item, idx) => {
            // Alternates rows left and right for asymmetry balance
            const isLeft = idx % 2 === 0;

            return (
              <div className={`row gallery-timeline-row align-items-center mb-5 ${isLeft ? '' : 'flex-lg-row-reverse'}`} key={idx}>
                
                {/* Column 1: Core Text Panel */}
                <div className="col-12 col-lg-5 text-start">
                  <motion.div variants={fadeIn} className="gallery-content-block p-2">
                    <div className="d-flex align-items-baseline gap-2 mb-2">
                      <span className="gallery-roman-numeral font-monospace">{item.num}</span>
                      <span className="gallery-item-tag font-monospace text-uppercase tracking-wider small">{item.tag}</span>
                    </div>
                    <h3 className="gallery-item-title fw-bold h4 mb-3 tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="gallery-item-desc text-muted-gallery mb-0">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Column 2: Central Floating Node Connector Point */}
                <div className="col-12 col-lg-2 d-none d-lg-flex justify-content-center position-relative z-3">
                  <div className="gallery-timeline-node rounded-circle d-flex align-items-center justify-content-center fw-bold">
                    ✓
                  </div>
                </div>

                {/* Column 3: Structural Asymmetry Spacer Panel */}
                <div className="col-12 col-lg-5 d-none d-lg-block" />

              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ConferenceFramework;
