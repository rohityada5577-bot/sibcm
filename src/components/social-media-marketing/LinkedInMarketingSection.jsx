"use client";

import { motion } from "framer-motion";
import { linkedInMarketingData } from "./data";

export default function LinkedInMarketingSection() {
  return (
    <section className="linkedin-marketing-section">
      <div className="container">

        <div className="row">

          <div className="col-lg-5">
            <div className="linkedin-left">

              <span className="linkedin-badge">
                {linkedInMarketingData.badge}
              </span>

              <h2 className="linkedin-title">
                {linkedInMarketingData.title}
              </h2>

              <p className="linkedin-description">
                {linkedInMarketingData.description}
              </p>

            </div>
          </div>

          <div className="col-lg-7">

            <div className="linkedin-services">

              {linkedInMarketingData.services.map((item, index) => (
                <motion.div
                  key={index}
                  className="linkedin-service-item"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="service-number">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <p>{item}</p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

        <motion.div
          className="linkedin-highlight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>{linkedInMarketingData.highlight}</p>
        </motion.div>

      </div>
    </section>
  );
}