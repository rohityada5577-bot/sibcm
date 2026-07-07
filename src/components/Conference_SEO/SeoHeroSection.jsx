"use client";

import { motion } from "framer-motion";
import { seoHeroData } from "./dada";
import "./cso.css";

export default function SeoHeroSection() {
  return (
    <section className="seo-hero">

      <div className="seo-grid-bg"></div>

      <div className="container">

        <div className="row align-items-center min-vh-100">

          <div className="col-lg-6">

            <motion.span
              className="seo-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {seoHeroData.badge}
            </motion.span>

            <motion.h1
              className="seo-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Conference SEO Services to Increase
              <span> Organic Registrations</span>
            </motion.h1>

            <motion.p
              className="seo-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {seoHeroData.description}
            </motion.p>

            <motion.p
              className="seo-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {seoHeroData.content}
            </motion.p>

            <div className="seo-buttons">
              <a href="#" className="seo-btn-primary">
                Get Free SEO Audit
              </a>

              <a href="#" className="seo-btn-secondary">
                View SEO Strategy
              </a>
            </div>

          </div>

          <div className="col-lg-6">

            <motion.div
              className="seo-dashboard"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
            >

              <div className="ranking-card">
                <span>Google Ranking</span>
                <h2>#1</h2>
                <p>Healthcare Conference 2026</p>
              </div>

              <div className="seo-stats">

                {seoHeroData.stats.map((item, index) => (
                  <div key={index} className="seo-stat-box">
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </div>
                ))}

              </div>

              <div className="traffic-card">
                <div className="traffic-line"></div>

                <h4>Organic Traffic Growth</h4>

                <span>+287%</span>
              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}