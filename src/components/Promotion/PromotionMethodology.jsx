"use client";

import { motion } from "framer-motion";
import { promotionMethodologyData } from "./data";
import "./promotion.css";

export default function PromotionMethodology() {
  return (
    <section className="methodology-section">

      <div className="container">

        <div className="row align-items-start gy-5">

          <div className="col-lg-5">

            <motion.div
              className="methodology-content"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="methodology-badge">
                {promotionMethodologyData.badge}
              </span>

              <h2 className="methodology-title">
                {promotionMethodologyData.title}
              </h2>

              <p className="methodology-desc">
                {promotionMethodologyData.description}
              </p>

              <p className="methodology-intro">
                {promotionMethodologyData.intro}
              </p>
            </motion.div>

          </div>

          <div className="col-lg-7">

            <div className="methodology-timeline">

              {promotionMethodologyData.points.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="timeline-number">
                    0{index + 1}
                  </div>

                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
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