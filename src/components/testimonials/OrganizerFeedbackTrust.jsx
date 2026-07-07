"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const OrganizerFeedbackTrust = () => {
  // Tracks which item is open. Default is the first one (0).
  const [expandedIndex, setExpandedIndex] = useState(0);

  const narrativeItems = [
    {
      category: "Surprise Acceleration",
      title: "Real Feedback from Event Organizers",
      subtitle: "Surprise at registration velocity & complete tracking clarity.",
      content: "The feedback we receive most consistently from conference clients falls into three categories: surprise at how much faster registrations come in when a proper strategy is in place, appreciation for the transparency of our reporting (knowing exactly which channels are generating registrations), and relief at the reduced stress of having professional specialists managing the marketing while they focus on delivering a great event."
    },
    {
      category: "100% Specialization",
      title: "Why Clients Trust Us",
      subtitle: "Exclusively focused on conference and event marketing.",
      content: "We focus entirely on your specific event niche — we do nothing else. No distractions, no generic templates. Our absolute specialization ensures your campaigns map directly to real ticket sales and professional association growth curves."
    },
    {
      category: "Complete Transparency",
      title: "Real-Time Operational Reporting",
      subtitle: "Zero opacity. Direct real-time dashboards mapping conversions.",
      content: "We reject typical monthly performance fluff. Every single campaign channel is piped into real-time dashboards showing exactly what each platform variant is producing. You monitor your registration loops live as they convert."
    },
    {
      category: "No Long-Term Contracts",
      title: "Performance-Earned Retention",
      subtitle: "No multi-year lock-in traps. We earn engagement weekly.",
      content: "We refuse to lock event teams into multi-year commitments. We firmly believe in earning continued strategic engagement based on real numbers and ticket revenue metrics achieved from quarter to quarter."
    },
    {
      category: "Dedicated Account Alignment",
      title: "Rapid Human-to-Human Support",
      subtitle: "One point of alignment. Real technical specialists responsive in hours.",
      content: "Your organization receives a dedicated account manager who understands your specific target audience profile completely. No generic ticket queues, no offshore call desks. Get direct answers within hours, not days."
    }
  ];

  return (
    <section className="narrative-trust-section bg-slate-950 text-slate-200 py-5 position-relative">
      <div className="container py-5">
        
        {/* Simple Editorial Header */}
        <div className="row mb-5">
          <div className="col-12 col-lg-8">
            <span className="narrative-label-pill mb-2 d-inline-block">Agency Standards</span>
            <h2 className="text-white fw-black display-5 tracking-tight">
              Operational Standards & Trust
            </h2>
          </div>
        </div>

        {/* Vertical Accordion Index Container */}
        <div className="row">
          <div className="col-12">
            <div className="narrative-accordion-container border-top border-dark-custom">
              
              {narrativeItems.map((item, idx) => {
                const isExpanded = idx === expandedIndex;
                
                return (
                  <div 
                    key={idx} 
                    className={`narrative-row border-bottom border-dark-custom py-4 cursor-pointer ${isExpanded ? 'active-row' : ''}`}
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  >
                    <div className="row align-items-center">
                      
                      {/* Left: Category Label */}
                      <div className="col-12 col-md-3 mb-2 mb-md-0">
                        <span className={`font-monospace small tracking-wider uppercase ${isExpanded ? 'text-indigo-active' : 'text-muted-narrative'}`}>
                          // {item.category}
                        </span>
                      </div>

                      {/* Middle: Title Summary */}
                      <div className="col-12 col-md-8">
                        <h3 className="text-white h5 fw-bold mb-1 tracking-tight">
                          {item.title}
                        </h3>
                        {!isExpanded && (
                          <p className="text-muted-narrative small mb-0 transition-opacity">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Right: Plus/Minus indicator character */}
                      <div className="col-12 col-md-1 text-md-end d-none d-md-block">
                        <span className="text-white font-monospace fs-5">
                          {isExpanded ? "[ − ]" : "[ + ]"}
                        </span>
                      </div>

                    </div>

                    {/* Expanding Copy Container */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.3 }, opacity: { duration: 0.2, delay: 0.05 } } }}
                          exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3 }, opacity: { duration: 0.1 } } }}
                          className="overflow-hidden"
                        >
                          <div className="row pt-4">
                            <div className="col-12 col-md-9 offset-md-3">
                              <p className="narrative-body-paragraph text-light-custom lead mb-0">
                                {item.content}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OrganizerFeedbackTrust;
