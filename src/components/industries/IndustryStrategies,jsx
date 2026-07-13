"use client";

import { motion } from "framer-motion";
import { industryStrategiesData } from "./data";
import "./industries.css";

export default function IndustryStrategies() {
  return (
    <section className="industry-strategies-section">

      <div className="industry-bg-glow glow-1"></div>
      <div className="industry-bg-glow glow-2"></div>

      <div className="container">

        <div className="row align-items-center gy-5">

          <div className="col-lg-5">

            <motion.div
              className="industry-content-side"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <span className="industry-badge">
                {industryStrategiesData.badge}
              </span>

              <h2 className="industry-main-title">
                {industryStrategiesData.title}
              </h2>

              <p className="industry-main-desc">
                {industryStrategiesData.description}
              </p>

            </motion.div>

          </div>

          <div className="col-lg-7">

            <div className="industry-path-layout">

              {industryStrategiesData.industries.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    className={`industry-path-item item-${index}`}
                    initial={{
                      opacity: 0,
                      y: 50
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      delay: index * 0.15
                    }}
                    viewport={{ once: true }}
                  >

                    <div className="industry-dot"></div>

                    <div className="industry-text">

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                )
              )}

            </div>

          </div>

        </div>

        <motion.div
          className="industry-why-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2>
            {industryStrategiesData.whyTitle}
          </h2>

          <p>
            {industryStrategiesData.whyDescription}
          </p>

        </motion.div>

      </div>

    </section>
  );
}