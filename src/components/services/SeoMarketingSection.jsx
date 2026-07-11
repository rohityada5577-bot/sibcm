"use client";

import { motion } from "framer-motion";
import { seoServicesData } from "./data";
import "./Service.css";

export default function SeoMarketingSection() {
  return (
    <section className="seo-section">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-5">

            <motion.span
              className="seo-badge"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {seoServicesData.badge}
            </motion.span>

            <motion.h2
              className="seo-title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {seoServicesData.title}
            </motion.h2>

            <motion.p
              className="seo-desc"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {seoServicesData.description}
            </motion.p>

          </div>

          {/* Right Grid */}
          <div className="col-lg-7">

            <div className="row g-4">

              {seoServicesData.services.map((item, index) => (
                <div
                  className="col-md-6"
                  key={index}
                >
                  <motion.div
                    className="seo-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <span className="seo-card-number">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <h3>{item}</h3>
                  </motion.div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}