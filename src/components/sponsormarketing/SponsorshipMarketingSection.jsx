"use client";

import { motion } from "framer-motion";
import { sponsorshipMarketingData } from "./data";
import "./sponor.css";

export default function SponsorshipMarketingSection() {
  return (
    <section className="sponsor-hero-section">
      <div className="sponsor-glow sponsor-glow-one"></div>
      <div className="sponsor-glow sponsor-glow-two"></div>

      <div className="container">

        <div className="row align-items-center gy-5">

          <div className="col-lg-7">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="sponsor-badge">
                {sponsorshipMarketingData.badge}
              </span>

              <h2 className="sponsor-title">
                {sponsorshipMarketingData.title}
              </h2>

              <p className="sponsor-description">
                {sponsorshipMarketingData.description}
              </p>

              <p className="sponsor-description">
                {sponsorshipMarketingData.description2}
              </p>

              <div className="sponsor-highlight">
                <span></span>
                <p>{sponsorshipMarketingData.highlight}</p>
              </div>
            </motion.div>

          </div>

          <div className="col-lg-5">

            <motion.div
              className="sponsor-visual"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="visual-circle circle-1"></div>
              <div className="visual-circle circle-2"></div>
              <div className="visual-circle circle-3"></div>

              <div className="visual-core">
                <span>Revenue</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}