"use client";

import { motion } from "framer-motion";
import { seoBenefitsData } from "./dada";
import "./cso.css";

export default function SeoBenefitsSection() {
  return (
    <section className="seo-benefits-section">

      <div className="container">

        <div className="row align-items-center gy-5">

          {/* Left Side */}

          <div className="col-lg-5">

            <motion.div
              className="seo-visual"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="seo-circle">

                <span>SEO</span>

                <h3>
                  Drives
                  <br />
                  Registrations
                </h3>

              </div>

              <div className="floating-stat stat-1">
                #1 Ranking
              </div>

              <div className="floating-stat stat-2">
                +287% Traffic
              </div>

            </motion.div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="seo-benefit-badge">
                {seoBenefitsData.badge}
              </span>

              <h2 className="seo-benefit-title">
                {seoBenefitsData.title}
              </h2>

              <p className="seo-benefit-desc">
                {seoBenefitsData.description}
              </p>

              <p className="seo-benefit-content">
                {seoBenefitsData.content}
              </p>

              <div className="seo-stats-row">

                {seoBenefitsData.stats.map((item, index) => (
                  <div key={index} className="seo-stat-item">

                    <h3>{item.value}</h3>

                    <p>{item.label}</p>

                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}