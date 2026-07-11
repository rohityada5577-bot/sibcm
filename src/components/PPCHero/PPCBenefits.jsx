"use client";

import { motion } from "framer-motion";
import { ppcBenefitsData } from "./data";

export default function PPCBenefits() {
  return (
    <section className="ppc-benefits-section">
      <div className="container">

        <div className="row g-5">

          <div className="col-lg-4">
            <div className="sticky-content">

              <span className="benefit-badge">
                {ppcBenefitsData.badge}
              </span>

              <h2 className="benefit-title">
                {ppcBenefitsData.title}
              </h2>

              <p className="benefit-description">
                {ppcBenefitsData.description}
              </p>

            </div>
          </div>

          <div className="col-lg-8">

            <div className="timeline">

              {ppcBenefitsData.items.map((item, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-number">
                    {item.number}
                  </div>

                  <div className="timeline-content">
                    <h4>{item.title}</h4>
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