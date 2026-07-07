"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './PricingHero.css'; // Uses the same unified CSS file below

const PricingCards = () => {
  const cardsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="pricing-cards-section py-5 position-relative">
      <div className="container py-4">
        <motion.div 
          className="row g-4 justify-content-center"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Starter Package Card */}
          <div className="col-12 col-md-6 col-lg-5">
            <motion.div 
              variants={cardItem}
              whileHover={{ y: -8 }}
              className="card h-100 package-card border-dark-custom p-4 bg-slate-900"
            >
              <div className="card-body d-flex flex-column h-100 p-0">
                <div className="mb-4">
                  <span className="badge rounded-pill text-bg-indigo mb-2">Starter Plan</span>
                  <h3 className="card-title h2 text-white fw-bold mb-1">Starter Package</h3>
                  <p className="text-indigo-light small fw-medium">For Small Conferences (up to 500 attendees)</p>
                </div>

                <div className="mb-4">
                  <span className="text-muted-custom small d-block mb-1">Typical Investment Range</span>
                  <div className="h3 text-white fw-bold">$2,500–$5,000<span className="fs-6 text-muted-custom fw-normal">/month</span></div>
                </div>

                <div className="mb-4 flex-grow-1">
                  <p className="text-light-custom small fw-semibold mb-3">
                    Ideal for: <span className="text-muted-custom fw-normal">First-time conferences, regional events, niche professional gatherings</span>
                  </p>
                  
                  <h5 className="text-white fs-6 fw-bold mb-3">Included Services:</h5>
                  <ul className="list-unstyled d-flex flex-column gap-3 p-0 m-0">
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-indigo-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Event website SEO audit and optimization</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-indigo-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Email marketing campaign (up to 4 sends, list up to 5,000 contacts)</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-indigo-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>LinkedIn Ads campaign management (up to $2,000 monthly ad spend)</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-indigo-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Social media content (2 posts per week across 2 platforms)</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-indigo-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Monthly performance reporting</span>
                    </li>
                  </ul>
                </div>

                <button className="btn btn-outline-custom w-100 py-2.5 font-semibold mt-auto">
                  Select Starter Plan
                </button>
              </div>
            </motion.div>
          </div>

          {/* Growth Package Card (Popular Feature Highlighting) */}
          <div className="col-12 col-md-6 col-lg-5">
            <motion.div 
              variants={cardItem}
              whileHover={{ y: -8 }}
              className="card h-100 package-card featured border-purple-custom p-4 bg-slate-900 position-relative"
            >
              {/* Popular Flag tag */}
              <div className="popular-tag position-absolute top-0 end-0 translate-middle-y px-3 py-1 rounded-pill text-white fw-bold">
                Most Popular
              </div>

              <div className="card-body d-flex flex-column h-100 p-0">
                <div className="mb-4">
                  <span className="badge rounded-pill text-bg-purple mb-2">Growth Plan</span>
                  <h3 className="card-title h2 text-white fw-bold mb-1">Growth Package</h3>
                  <p className="text-purple-light small fw-medium">For Mid-Size Conferences (500–2,000 attendees)</p>
                </div>

                <div className="mb-4">
                  <span className="text-muted-custom small d-block mb-1">Typical Investment Range</span>
                  <div className="h3 text-white fw-bold">$6,000–$12,000<span className="fs-6 text-muted-custom fw-normal">/month</span></div>
                </div>

                <div className="mb-4 flex-grow-1">
                  <p className="text-light-custom small fw-semibold mb-3">
                    Ideal for: <span className="text-muted-custom fw-normal">Established conferences seeking significant year-over-year attendance growth</span>
                  </p>
                  
                  <h5 className="text-white fs-6 fw-bold mb-3">Included Services:</h5>
                  <ul className="list-unstyled d-flex flex-column gap-3 p-0 m-0">
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-purple-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Full conference SEO strategy and content marketing (2 blog posts/month)</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-purple-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Multi-channel email campaign with audience segmentation (unlimited sends)</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-purple-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Google Ads + LinkedIn Ads management (up to $8,000 monthly ad spend)</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-purple-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Social media management across 3 platforms with paid amplification</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-purple-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Speaker co-marketing program coordination</span>
                    </li>
                    <li className="d-flex align-items-start gap-2 text-muted-custom small">
                      <svg className="icon-purple-check mt-1 flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>Weekly performance reporting and bi-weekly strategy calls</span>
                    </li>
                  </ul>
                </div>

                <button className="btn btn-gradient w-100 py-2.5 font-semibold mt-auto">
                  Select Growth Plan
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;
