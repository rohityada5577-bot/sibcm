"use client";

import { motion } from "framer-motion";
import { resultsData } from "./data";
import "./Service.css";

export default function ResultsSection() {
  return (
    <section className="results-section">

      <div className="container">

        <div className="row">

          <div className="col-lg-5">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="results-sticky"
            >
              <span className="results-badge">
                {resultsData.badge}
              </span>

              <h2 className="results-title">
                {resultsData.title}
              </h2>

              <p className="results-desc">
                {resultsData.description}
              </p>
            </motion.div>

          </div>

          <div className="col-lg-7">

            <div className="results-list">

              {resultsData.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="results-item"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1
                  }}
                >
                  <div className="results-number">
                    0{index + 1}
                  </div>

                  <div className="results-content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
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