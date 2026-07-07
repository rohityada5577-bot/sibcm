"use client";

import { motion } from "framer-motion";
import { customMarketingData } from "./dada";
import "./Service.css";

export default function CustomMarketingPlans() {
  return (
    <section className="custom-marketing-section">

      <div className="custom-grid"></div>

      <div className="container">

        {/* Header */}

        <motion.div
          className="cmp-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="cmp-badge">
            {customMarketingData.badge}
          </span>

          <h2 className="cmp-title">
            {customMarketingData.title}
          </h2>

          <p className="cmp-description">
            {customMarketingData.description}
          </p>
        </motion.div>

        {/* Strategy Rows */}

        <div className="cmp-strategy-list">

          {customMarketingData.strategyItems.map((item, index) => (
            <motion.div
              key={index}
              className="cmp-strategy-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="cmp-item-number">
                0{index + 1}
              </div>

              <div className="cmp-item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Framework */}

        <motion.div
          className="cmp-framework"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>
            {customMarketingData.frameworkTitle}
          </h3>

          <p>
            {customMarketingData.frameworkText1}
          </p>

          <p>
            {customMarketingData.frameworkText2}
          </p>
        </motion.div>

      </div>
    </section>
  );
}