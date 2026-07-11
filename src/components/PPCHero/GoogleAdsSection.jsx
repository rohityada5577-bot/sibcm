"use client";

import { motion } from "framer-motion";
import { seoImportanceData } from "./data";
import "./PPCHero.css";

export default function SEOImportance() {
  return (
    <section className="seo-story-section">
      <div className="container">

        <div className="row">

          <div className="col-lg-5">
            <div className="seo-story-left">

              <span className="seo-story-badge">
                {seoImportanceData.badge}
              </span>

              <h2 className="seo-story-title">
                {seoImportanceData.heading}
              </h2>

              <p className="seo-story-description">
                {seoImportanceData.description}
              </p>

            </div>
          </div>

          <div className="col-lg-7">

            {seoImportanceData.points.map((item, index) => (
              <motion.div
                key={index}
                className="seo-story-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <div className="seo-story-number">
                  {item.number}
                </div>

                <div className="seo-story-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}