"use client";

import { motion } from "framer-motion";
import { landingSeoData } from "./data";
import "./cso.css";

export default function LandingSeoSection() {
  return (
    <section className="landing-seo-section">

      <div className="seo-glow seo-glow-1"></div>
      <div className="seo-glow seo-glow-2"></div>

      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-5">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="landing-badge">
                {landingSeoData.badge}
              </span>

              <h2 className="landing-title">
                SEO for Landing Pages
                <span>& Event Pages</span>
              </h2>

              <p className="landing-desc">
                {landingSeoData.description}
              </p>

              <div className="landing-highlight">
                Rank higher in Google while increasing registration
                conversions from the same traffic.
              </div>
            </motion.div>

          </div>

          <div className="col-lg-7">

            <div className="seo-feature-list">

              {landingSeoData.points.map((item, index) => (
                <motion.div
                  key={index}
                  className="seo-feature-item"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="seo-number">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <div className="seo-line"></div>

                  <div className="seo-content">
                    {item}
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}