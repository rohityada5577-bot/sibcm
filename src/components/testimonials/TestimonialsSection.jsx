"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css'; // Uses the companion CSS below

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Extend or paste as much long text content here as needed
  const testimonialData = [
    {
      quote: "The team completely transformed our annual healthcare summit from 280 to 620 registered attendees in a single year. Their multi-channel email automation and granular behavioral segmentation alone drove over 40% of our primary registration pipelines. The full project budget paid for itself three times over before our early-bird ticket closing date even arrived.",
      author: "Sarah Jenkins",
      role: "Conference Director",
      org: "Global Health Summit 2026",
      badge: "Healthcare Track"
    },
    {
      quote: "We were highly skeptical about driving business-to-business conversions through targeted LinkedIn infrastructure for our highly specialized engineering niche. They built custom custom-matched audiences that lowered our overall customer acquisition cost by a staggering 34% compared to our historical multi-year enterprise benchmarks.",
      author: "David Chen",
      role: "VP of Digital Events",
      org: "DevOps Horizon Expo",
      badge: "B2B Tech Track"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  // Kinetic card horizontal transition logic
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section className="kinetic-hero position-relative overflow-hidden d-flex align-items-center">
      <div className="kinetic-mesh-overlay" />
      <div className="kinetic-glow-sphere" />

      <div className="container position-relative z-2 py-5">
        <div className="row g-5 align-items-center flex-column-reverse flex-lg-row">
          
          {/* LEFT SIDE: Dynamic Slide Cards for heavy content */}
          <div className="col-12 col-lg-7">
            <div className="position-relative slider-height-constrain">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="kinetic-testimonial-wrapper p-4 p-sm-5 rounded-4 position-relative"
                >
                  <div className="kinetic-giant-quote">“</div>
                  
                  <div className="position-relative z-3">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className="badge rounded-pill testimonial-metric-badge px-3 py-1.5">
                        {testimonialData[activeIndex].badge}
                      </span>
                      <span className="text-muted-kinetic font-monospace small">
                        0{activeIndex + 1} / 0{testimonialData.length}
                      </span>
                    </div>

                    <p className="kinetic-quote-body text-white mb-5 font-monospace">
                      {testimonialData[activeIndex].quote}
                    </p>

                    <div className="d-flex align-items-center gap-3 pt-4 border-top border-kinetic-light">
                      <div className="kinetic-avatar d-flex align-items-center justify-content-center text-black fw-black rounded-3">
                        {testimonialData[activeIndex].author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white fs-6 fw-bold mb-0">{testimonialData[activeIndex].author}</h4>
                        <p className="text-muted-kinetic xs-kinetic mb-0">
                          {testimonialData[activeIndex].role}, <span className="text-kinetic-purple">{testimonialData[activeIndex].org}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Interface Controls */}
            <div className="d-flex gap-2 mt-4 justify-content-start align-items-center px-2">
              <button onClick={handlePrev} className="carousel-control-btn d-flex align-items-center justify-content-center rounded-circle" aria-label="Previous slide">
                ←
              </button>
              <button onClick={handleNext} className="carousel-control-btn d-flex align-items-center justify-content-center rounded-circle" aria-label="Next slide">
                →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Locked Typography Titles and Metrics Banner */}
          <div className="col-12 col-lg-5 text-start ps-lg-5">
            <div className="kinetic-badge d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-4">
              <span className="live-pulse-ring" />
              Verified Case Studies
            </div>

            <h1 className="display-4 fw-black text-white mb-4 line-height-tight">
              What Our <br />
              <span className="kinetic-text-stroke">Clients Say</span>
            </h1>

            <p className="text-muted-kinetic mb-5 lead-kinetic">
              Real organizational transformations documented by directors, enterprise executives, and digital professionals.
            </p>

            <div className="d-flex gap-4 align-items-center border-top border-kinetic-dark pt-4">
              <div>
                <div className="display-5 fw-extrabold text-white mb-0">+121%</div>
                <div className="text-muted-kinetic small uppercase tracking-wider">Attendee Scale</div>
              </div>
              <div className="vertical-divider-line" />
              <div>
                <div className="display-5 fw-extrabold text-kinetic-purple mb-0">3.5x</div>
                <div className="text-muted-kinetic small uppercase tracking-wider">Average ROI</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
