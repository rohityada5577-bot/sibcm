"use client";

import { motion } from "framer-motion";
import { socialPromotionData } from "./data";

export default function SocialPromotionSection() {
  return (
    <section className="social-promotion-section">
      <div className="container">

        <div className="row g-4">

          {/* TikTok */}
          <div className="col-lg-6">
            <motion.div
              className="promotion-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-top-line"></div>

              <h3>{socialPromotionData.tiktok.title}</h3>

              <p className="card-description">
                {socialPromotionData.tiktok.description}
              </p>

              <div className="promotion-list">
                {socialPromotionData.tiktok.items.map((item, index) => (
                  <div key={index} className="promotion-item">
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Viral */}
          <div className="col-lg-6">
            <motion.div
              className="promotion-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-top-line"></div>

              <h3>{socialPromotionData.viral.title}</h3>

              <p className="card-description">
                {socialPromotionData.viral.description}
              </p>

              <div className="promotion-list">
                {socialPromotionData.viral.items.map((item, index) => (
                  <div key={index} className="promotion-item">
                    <span>✓</span>
                    <p>{item}</p>
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