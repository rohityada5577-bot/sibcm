"use client";

import { motion } from "framer-motion";
import { promotionStrategyData } from "./data";
import "./promotion.css"

export default function PromotionStrategySection() {
  return (
    <section className="promotion-strategy-section">

      <div className="container">

        <motion.div
          className="strategy-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="strategy-badge">
            {promotionStrategyData.badge}
          </span>

          <h2 className="strategy-title">
            {promotionStrategyData.title}
          </h2>

          <p className="strategy-description">
            {promotionStrategyData.description}
          </p>
        </motion.div>

        <div className="timeline-wrapper">

          {promotionStrategyData.steps.map((step, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}