"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './PricingHero.css'; // Uses the same unified CSS file below

const PricingInclusions = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="pricing-inclusions-section position-relative">
      {/* Background color difference structure */}
      <div className="container py-5">
        
        {/* Row 1: Global Features Inclusion */}
        <div className="row g-5 mb-5 pb-5 border-bottom border-dark-custom">
          <motion.div 
            className="col-12 col-lg-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="badge rounded-pill text-bg-indigo mb-2">Standard Features</span>
            <h2 className="text-white fw-bold h1 mb-3">What's Included in Each Plan</h2>
            <p className="text-muted-custom">
              Regardless of package size or scope, every single engagement benefits from our foundational agency framework.
            </p>
          </motion.div>

          <div className="col-12 col-lg-8">
            <motion.div 
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { title: "Discovery & Strategy", desc: "Deep-dive alignment session structured entirely before campaign launch." },
                { title: "Custom Briefs", desc: "Tailored strategic master brief and dynamic global content calendar." },
                { title: "Real-Time Tracking", desc: "24/7 unhindered live access to your marketing performance dashboard." },
                { title: "Regular Strategy Calls", desc: "Consistently scheduled performance alignment and strategic shift reviews." },
                { title: "Direct Communication", desc: "No offshore outsourcing or automated bots. Speak with your dedicated team directly." },
                { title: "Live Optimization", desc: "Continuous iteration and tuning throughout your cycle based on real audience data." }
              ].map((item, idx) => (
                <div className="col-12 col-md-6" key={idx}>
                  <motion.div variants={fadeInUp} className="inclusion-feature-card h-100 p-4 rounded-3">
                    <div className="d-flex gap-3 align-items-start">
                      <div className="inclusion-check-wrapper rounded-circle flex-shrink-0">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="text-white fs-6 fw-bold mb-1">{item.title}</h4>
                        <p className="text-muted-custom small mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2: Recommendation Matrix & ROI Alignment */}
        <div className="row g-5 align-items-center">
          <motion.div 
            className="col-12 col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="framework-matrix-card p-4 p-sm-5 rounded-4 border-dark-custom">
              <span className="badge rounded-pill text-bg-purple mb-2">Recommendation Engine</span>
              <h3 className="text-white fw-bold mb-4 h2">Choosing the Right Package</h3>
              <p className="text-muted-custom mb-4 small">Match your parameters to our recommended deployment track:</p>
              
              <div className="d-flex flex-column gap-3">
                <div className="framework-tier-row d-flex align-items-center justify-content-between p-3 rounded-3">
                  <div>
                    <div className="text-white fw-bold small">Under 300 Attendees</div>
                    <div className="text-muted-custom xs-text">Budget under $50k</div>
                  </div>
                  <span className="badge text-bg-indigo rounded-pill px-3 py-2">Starter Package</span>
                </div>

                <div className="framework-tier-row d-flex align-items-center justify-content-between p-3 rounded-3 active-purple">
                  <div>
                    <div className="text-white fw-bold small">300–1,500 Attendees</div>
                    <div className="text-muted-custom xs-text">Budget $50k–$250k</div>
                  </div>
                  <span className="badge text-bg-purple rounded-pill px-3 py-2">Growth Package</span>
                </div>

                <div className="framework-tier-row d-flex align-items-center justify-content-between p-3 rounded-3">
                  <div>
                    <div className="text-white fw-bold small">1,500+ Attendees</div>
                    <div className="text-muted-custom xs-text">Budget $250k+</div>
                  </div>
                  <span className="badge text-bg-pink rounded-pill px-3 py-2">Enterprise Plan</span>
                </div>

                <div className="framework-tier-row d-flex align-items-center justify-content-between p-3 rounded-3 border-dashed">
                  <div>
                    <div className="text-white fw-bold small">Multi-Event Organization</div>
                    <div className="text-muted-custom xs-text">Or first-time dynamic launch event</div>
                  </div>
                  <a href="#custom-quote" className="text-decoration-none text-purple-light small fw-bold flex-shrink-0">Contact Us →</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="col-12 col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="badge rounded-pill text-bg-pink mb-2">Our Philosophy</span>
            <h3 className="text-white fw-bold display-6 mb-4">Why Pricing Matches Results</h3>
            
            <p className="text-muted-custom mb-3 lead-custom">
              We price our services to reflect the revenue impact we deliver. Conference marketing is not a cost center — <strong className="text-white fw-semibold">it is a revenue generator.</strong>
            </p>
            
            <p className="text-muted-custom small mb-4">
              Every dollar invested in the right marketing strategy should return a multiple in registration revenue. Our pricing is structured so that even at the lowest tier, a single additional cohort of conference registrations pays for the marketing investment.
            </p>

            <div className="p-4 philosophy-quote-box rounded-3 border-start border-3 border-indigo">
              <p className="text-white fst-italic small mb-0">
                "Stop treating your marketing execution as an administrative expense. Treat it as a variable growth loop where revenue velocity tracks investment scale."
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PricingInclusions;
