"use client";

import { motion } from "framer-motion";
import { sponsorValueData } from "./data";
import "./sponor.css";

export default function SponsorValueSection() {
  return (
    <section className="sponsor-value-section">
      <div className="container">

        <motion.div
          className="value-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-heading">
            {sponsorValueData.title}
          </h2>

          <p className="value-intro">
            {sponsorValueData.description}
          </p>
        </motion.div>

        <div className="value-metrics">

          {sponsorValueData.metrics.map((item, index) => (
            <motion.div
              key={index}
              className="metric-row"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
            >
              <div className="metric-number">
                {(index + 1)
                  .toString()
                  .padStart(2, "0")}
              </div>

              <div className="metric-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

        <motion.div
          className="growth-panel"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="growth-content">

            <h2 className="gradient-heading">
              {sponsorValueData.growthTitle}
            </h2>

            <p>
              {sponsorValueData.growthDescription}
            </p>

            <div className="growth-list">

              {sponsorValueData.growthPoints.map(
                (item, index) => (
                  <div
                    key={index}
                    className="growth-item"
                  >
                    <span></span>
                    <p>{item}</p>
                  </div>
                )
              )}

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}