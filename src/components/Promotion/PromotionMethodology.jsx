"use client";

import { motion } from "framer-motion";
import { promotionMethodologyData } from "./data";
import "./promotion.css";

export default function PromotionMethodology({
  data = promotionMethodologyData,
}) {
  return (
    <section className="editorial-section">
      <div className="container">

        <div className="editorial-header">
          <span className="editorial-badge">
            {data.badge}
          </span>

          <h2 className="editorial-title">
            {data.title}
          </h2>

          <p className="editorial-description">
            {data.description}
          </p>
        </div>

        <div className="editorial-layout">

          {data.points.map((item, index) => (
            <motion.div
              key={index}
              className="editorial-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="editorial-number">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <div className="editorial-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}