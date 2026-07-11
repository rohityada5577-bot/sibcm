"use client";

import React from "react";
import { motion } from "framer-motion";
import { AccountabilityTrustContent } from "./data";
import "./Testimonials.css";

const AccountabilityTrust = ({
  data = AccountabilityTrustContent,
}) => {
  const {
    accountability = {},
    reputation = {},
  } = data || {};

  const slideUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="accountability-section bg-white py-5 position-relative overflow-hidden">
      <div className="top-accent-line" />

      <div className="container py-5 position-relative z-2">
        <div className="row g-5 align-items-stretch">

          {/* LEFT SIDE */}
          <motion.div
            className="col-12 col-lg-6 d-flex flex-column justify-content-between text-start pe-lg-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <div>
              <span className="badge rounded-pill white-section-badge mb-3">
                {accountability.badge}
              </span>

              <h2 className="fw-black display-5 text-slate-900 mb-4 tracking-tight">
                {accountability.title}
                <br />
                {accountability.titleHighlight}
              </h2>

              <p className="text-muted-editorial font-serif fst-italic fs-5 mb-4 border-start border-3 border-indigo-accent ps-3">
                {accountability.quote}
              </p>

              <p className="text-muted-editorial mb-0 lead-editorial">
                {accountability.description}
              </p>
            </div>

            <div className="row g-3 mt-5 pt-4 border-top border-light-grey">
              {accountability.stats?.map((item, index) => (
                <div key={index} className="col-6 col-sm-4">
                  <div className="fw-black fs-4 text-slate-900 mb-0">
                    {item.value}
                  </div>

                  <div className="text-muted-editorial x-small tracking-wider uppercase">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="col-12 col-lg-6 mt-lg-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <div className="reputation-editorial-card h-100 p-4 p-sm-5 rounded-4 d-flex flex-column justify-content-between">
              <div>
                <span className="badge rounded-pill purple-section-badge mb-3">
                  {reputation.badge}
                </span>

                <h3 className="fw-extrabold text-slate-900 h2 mb-4 tracking-tight">
                  {reputation.title}
                  <br />
                  {reputation.titleHighlight}
                </h3>

                <p className="text-muted-editorial mb-4 line-height-relaxed">
                  {reputation.description1}
                </p>

                <p className="text-muted-editorial mb-0 line-height-relaxed">
                  {reputation.description2}
                </p>
              </div>

              <div className="mt-5 p-4 retention-highlight-box rounded-3 border-start border-3 border-purple-accent">
                <p className="fw-bold text-slate-900 small mb-1">
                  {reputation.retentionTitle}
                </p>

                <p className="text-muted-editorial small mb-0 font-monospace">
                  {reputation.retentionText}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AccountabilityTrust;