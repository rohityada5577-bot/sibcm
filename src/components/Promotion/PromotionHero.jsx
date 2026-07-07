"use client";

import { motion } from "framer-motion";
import { promotionHeroData } from "./data";
import "./promotion.css";

export default function PromotionHero() {
  return (
    <section className="promotion-hero">

      <div className="hero-gradient"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container">

        <div className="row align-items-center gy-5">

          {/* LEFT */}
          <div className="col-lg-6">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-badge">
                {promotionHeroData.badge}
              </span>

              <h1 className="hero-title">
                Promote Your Conference
                <span> & Get More Attendees</span>
              </h1>

              <p className="hero-description">
                {promotionHeroData.description}
              </p>

              <div className="hero-buttons">
                <button className="hero-btn-primary">
                  Get Free Strategy Call
                </button>

                <button className="hero-btn-secondary">
                  View Services
                </button>
              </div>
            </motion.div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-6">

            <motion.div
              className="hero-card"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="hero-card-tag">
                Growth Engine
              </div>

              <h3>
                Multi-Channel Promotion System
              </h3>

              <p>
                {promotionHeroData.cardText}
              </p>

              <div className="hero-stats">

                {promotionHeroData.stats.map((item, index) => (
                  <div key={index} className="stat-item">
                    <h4>{item.number}</h4>
                    <span>{item.label}</span>
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