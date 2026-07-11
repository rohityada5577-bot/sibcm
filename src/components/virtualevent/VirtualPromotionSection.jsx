"use client";

import { motion } from "framer-motion";
import { virtualPromotionData } from "./data";
import "./virtual.css";

export default function VirtualPromotionSection() {
  const featuredCard = virtualPromotionData.points[0];
  const sideCards = virtualPromotionData.points.slice(1);

  return (
    <section className="virtual-promotion-section">
      <div className="virtual-bg-shape shape-1"></div>
      <div className="virtual-bg-shape shape-2"></div>

      <div className="container">

        <motion.div
          className="virtual-heading-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="virtual-section-title">
            {virtualPromotionData.title}
          </h2>

          <p className="virtual-section-description">
            {virtualPromotionData.description}
          </p>
        </motion.div>

        <div className="row g-4 align-items-stretch">

          {/* Featured Card */}

          <div className="col-lg-6">

            <motion.div
              className="virtual-featured-card"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="featured-glow"></div>

              <span className="featured-label">
                Virtual Event Strategy
              </span>

              <h3>
                {featuredCard.title}
              </h3>

              <p>
                {featuredCard.description}
              </p>
            </motion.div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <div className="virtual-card-stack">

              {sideCards.map((item, index) => (
                <motion.div
                  key={index}
                  className="virtual-small-card"
                  initial={{
                    opacity: 0,
                    x: 60
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: index * 0.15
                  }}
                  viewport={{ once: true }}
                >
                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.description}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}