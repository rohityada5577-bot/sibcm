"use client";

import { motion } from "framer-motion";
import { promotionServicesData } from "./dada";
import "./Service.css"

export default function PromotionServicesSection() {
  return (
    <section className="promotion-section section-space">

      <div className="container">

        <motion.div
          className="promotion-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">
            {promotionServicesData.badge}
          </span>

          <h2 className="section-title">
            {promotionServicesData.title}
          </h2>

          <p className="section-desc">
            {promotionServicesData.description}
          </p>
        </motion.div>

        <div className="row g-4 mt-4">

          {promotionServicesData.services.map((item, index) => (
            <div
              className="col-lg-6 col-md-6"
              key={index}
            >
              <motion.div
                className="promotion-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05
                }}
              >
                <div className="service-index">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <h3>{item}</h3>

                <div className="service-arrow">
                  →
                </div>
              </motion.div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}