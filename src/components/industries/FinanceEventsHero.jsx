"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FinanceEventsHero = () => {
  // Track which index is open. Set to null if you want them all closed by default.
  const [expandedIndex, setExpandedIndex] = useState(0);

  const accordionData = [
    {
      num: "01",
      title: "Healthcare Event Promotion",
      subtitle: "Navigating regulatory compliance and long institutional approval windows.",
      content: "Healthcare conference marketing operates under unique constraints: strict regulatory requirements around medical claims, highly specialized audience segments (physicians, nurses, hospital administrators, pharma executives), and long institutional planning cycles where professionals get conference attendance approved months in advance."
    },
    {
      num: "02",
      title: "Finance & Business Events",
      subtitle: "Attracting high-authority decision-makers with rigorous credibility metrics.",
      content: "Finance conferences — investment summits, banking events, fintech conferences, and compliance forums — attract senior professionals with significant purchasing authority and demanding standards for event quality. Trust and credibility signals carry exceptional weight in financial services marketing."
    },
    {
      num: "03",
      title: "Technology Summits",
      subtitle: "Engaging highly technical audiences who bypass traditional advertising loops.",
      content: "Technology conferences attract developers, product managers, engineering leaders, CTOs, and startup founders — audiences that are simultaneously highly online and deeply skeptical of traditional advertising. Effective marketing requires community native channels and deep technical content assets."
    }
  ];

  return (
    <>
      {/* Inline Scoped CSS - Keeps your styling completely modular inside this single file */}
      <style dangerouslySetInnerHTML={{ __html: `
        .acc-wrapper-section {
          background-color: #06060c !important; /* Premium Matte Dark Canvas */
          color: #e2e8f0;
        }
        .acc-container-box {
          border-top: 1px solid #1e293b;
        }
        .acc-row-item {
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .acc-row-item:hover {
          background-color: #0c0c16;
        }
        .acc-row-item.is-active {
          background-color: #0e0e1a;
        }
        .acc-index-num {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          color: #475569;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }
        .acc-row-item:hover .acc-index-num,
        .acc-row-item.is-active .acc-index-num {
          color: #818cf8;
        }
        .acc-heading-text {
          color: #ffffff;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .acc-sub-label {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .acc-indicator-glyph {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          color: #475569;
          font-size: 1.15rem;
          user-select: none;
          transition: color 0.2s ease;
        }
        .acc-row-item:hover .acc-indicator-glyph,
        .acc-row-item.is-active .acc-indicator-glyph {
          color: #ffffff;
        }
        .acc-body-copy {
          color: #cbd5e1;
          font-size: 1.025rem;
          line-height: 1.65;
          max-width: 52rem;
        }
        .border-dark-separator {
          border-color: #1e293b !important;
        }
      `}} />

      {/* Main UI Section Markup */}
      <section className="acc-wrapper-section py-5 position-relative">
        <div className="container py-5">
          
          {/* Minimal Section Header */}
          <div className="row mb-5 text-start">
            <div className="col-12 col-md-8">
              <h2 className="text-white fw-black display-6 tracking-tight mb-2">
                Sector Execution Matrices
              </h2>
              <p className="acc-sub-label fs-6 mb-0">
                Click any core focus bracket below to view specific regulatory and channel optimization frameworks.
              </p>
            </div>
          </div>

          {/* Plus-Minus Accordion Structural Stack */}
          <div className="row">
            <div className="col-12">
              <div className="acc-container-box">
                
                {accordionData.map((item, idx) => {
                  const isOpen = idx === expandedIndex;
                  
                  return (
                    <div 
                      key={idx}
                      onClick={() => setExpandedIndex(isOpen ? null : idx)}
                      className={`acc-row-item border-bottom border-dark-separator py-4 px-3 px-sm-4 ${isOpen ? 'is-active' : ''}`}
                    >
                      {/* Master Click Control Bar Layout Grid */}
                      <div className="row align-items-center">
                        
                        {/* 1. Item Index Numerals */}
                        <div className="col-2 col-md-1 text-start">
                          <span className="acc-index-num">
                            // {item.num}
                          </span>
                        </div>

                        {/* 2. Primary Heading String Titles */}
                        <div className="col-8 col-md-10 text-start">
                          <h3 className="acc-heading-text h5 mb-1 m-0">
                            {item.title}
                          </h3>
                          {/* Hide subtitle on open to maintain clean reading flow */}
                          {!isOpen && (
                            <p className="acc-sub-label small mb-0">
                              {item.subtitle}
                            </p>
                          )}
                        </div>

                        {/* 3. Right Aligned Plus-Minus Graphical Indicator Token */}
                        <div className="col-2 col-md-1 text-end">
                          <span className="acc-indicator-glyph">
                            {isOpen ? "[ − ]" : "[ + ]"}
                          </span>
                        </div>

                      </div>

                      {/* Smooth Collapsing Expansion Window Canvas */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: "auto", 
                              opacity: 1, 
                              transition: { 
                                height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, 
                                opacity: { duration: 0.25, delay: 0.05 } 
                              } 
                            }}
                            exit={{ 
                              height: 0, 
                              opacity: 0, 
                              transition: { 
                                height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, 
                                opacity: { duration: 0.15 } 
                              } 
                            }}
                            className="overflow-hidden"
                          >
                            <div className="row pt-4 text-start">
                              {/* Aligns body text cleanly under titles across desktop layouts */}
                              <div className="col-12 col-md-11 offset-md-1">
                                <p className="acc-body-copy mb-2">
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
    </>
  );
};

export default FinanceEventsHero;
