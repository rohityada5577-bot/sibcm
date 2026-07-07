"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PricingHero.css'; // Uses the same unified CSS file below

const PricingCustomROI = () => {
  // Calculator state variables
  const [ticketPrice, setTicketPrice] = useState(299);
  const [targetAttendees, setTargetAttendees] = useState(800);
  const [estimatedFee, setEstimatedFee] = useState(6000);

  // ROI Math
  const totalRevenue = targetAttendees * ticketPrice;
  const netProfit = totalRevenue - estimatedFee;
  const roiMultiplier = estimatedFee > 0 ? (totalRevenue / estimatedFee).toFixed(1) : 0;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="pricing-custom-roi py-5 position-relative border-top border-dark-custom">
      <div className="container py-5">
        <div className="row g-5 align-items-stretch">
          
          {/* Custom Package Left Column */}
          <motion.div 
            className="col-12 col-lg-6 d-flex flex-column justify-content-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div>
              <span className="badge rounded-pill text-bg-pink mb-2">Tailored Solutions</span>
              <h2 className="text-white fw-bold display-5 mb-4">Custom Event Growth Packages</h2>
              <p className="text-muted-custom mb-5">
                If none of the standard packages match your specific needs, we build fully custom marketing packages around your event's requirements. Factors we consider in custom pricing:
              </p>

              <div className="row g-4">
                <div className="col-12 col-sm-6">
                  <div className="d-flex gap-3">
                    <div className="factor-icon-box rounded-3 flex-shrink-0">⏱️</div>
                    <div>
                      <h4 className="text-white fs-6 fw-bold mb-1">Event Timeline</h4>
                      <p className="text-muted-custom small mb-0">How far out is your event from marketing launch?</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex gap-3">
                    <div className="factor-icon-box rounded-3 flex-shrink-0">🎯</div>
                    <div>
                      <h4 className="text-white fs-6 fw-bold mb-1">Attendee Profile</h4>
                      <p className="text-muted-custom small mb-0">Target personas and the competitive landscape.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex gap-3">
                    <div className="factor-icon-box rounded-3 flex-shrink-0">📊</div>
                    <div>
                      <h4 className="text-white fs-6 fw-bold mb-1">Existing Assets</h4>
                      <p className="text-muted-custom small mb-0">Email list health, website performance, & socials.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex gap-3">
                    <div className="factor-icon-box rounded-3 flex-shrink-0">📈</div>
                    <div>
                      <h4 className="text-white fs-6 fw-bold mb-1">Registration Targets</h4>
                      <p className="text-muted-custom small mb-0">Your final goals vs. current baseline numbers.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex gap-3">
                    <div className="factor-icon-box rounded-3 flex-shrink-0">🌍</div>
                    <div>
                      <h4 className="text-white fs-6 fw-bold mb-1">Geographic Scope</h4>
                      <p className="text-muted-custom small mb-0">Local reach, nationwide target, or international scale.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex gap-3">
                    <div className="factor-icon-box rounded-3 flex-shrink-0">📢</div>
                    <div>
                      <h4 className="text-white fs-6 fw-bold mb-1">Required Channels</h4>
                      <p className="text-muted-custom small mb-0">Specific high-converting platforms for your niche.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button className="btn btn-gradient px-4 py-3 font-semibold rounded-3 shadow">
                Request Custom Proposal
              </button>
            </div>
          </motion.div>

          {/* Interactive Calculator Right Column */}
          <motion.div 
            className="col-12 col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="calculator-card rounded-4 p-4 p-sm-5 bg-slate-900 border-dark-custom h-100">
              <span className="badge rounded-pill text-bg-indigo mb-2">ROI Framework</span>
              <h3 className="text-white fw-bold h4 mb-2">ROI-Based Pricing Strategy</h3>
              <p className="text-muted-custom small mb-4">Evaluate marketing fees against the registration revenue generated.</p>

              {/* Dynamic Sliders */}
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <label className="text-light-custom small">Average Ticket Price ($)</label>
                  <span className="text-white font-semibold small">${ticketPrice}</span>
                </div>
                <input 
                  type="range" className="form-range custom-slider" min="50" max="2000" step="10"
                  value={ticketPrice} onChange={(e) => setTicketPrice(Number(e.target.value))}
                />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <label className="text-light-custom small">Target Attendees</label>
                  <span className="text-white font-semibold small">{targetAttendees} seats</span>
                </div>
                <input 
                  type="range" className="form-range custom-slider" min="50" max="5000" step="50"
                  value={targetAttendees} onChange={(e) => setTargetAttendees(Number(e.target.value))}
                />
              </div>

              <div className="mb-4 pb-3 border-bottom border-dark-custom">
                <div className="d-flex justify-content-between mb-2">
                  <label className="text-light-custom small">Estimated Monthly Marketing Budget ($)</label>
                  <span className="text-white font-semibold small">${estimatedFee}</span>
                </div>
                <input 
                  type="range" className="form-range custom-slider color-purple" min="1000" max="25000" step="500"
                  value={estimatedFee} onChange={(e) => setEstimatedFee(Number(e.target.value))}
                />
              </div>

              {/* Output Metrics */}
              <div className="row g-3 text-center">
                <div className="col-6">
                  <div className="calc-result-box rounded-3 p-3">
                    <span className="text-muted-custom d-block small mb-1">Gross Revenue</span>
                    <span className="h4 text-white fw-bold">${totalRevenue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="calc-result-box rounded-3 p-3">
                    <span className="text-muted-custom d-block small mb-1">Projected ROI</span>
                    <span className="h4 text-indigo-light fw-bold">{roiMultiplier}x Return</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-950 rounded-3 text-center border-dark-custom">
                <span className="text-muted-custom small">Estimated Marketing Net Value: </span>
                <span className="text-white font-semibold ms-1">${netProfit >= 0 ? netProfit.toLocaleString() : 0}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingCustomROI;
