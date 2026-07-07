"use client";

import { motion } from "framer-motion";
import { keywordStrategyData } from "./dada";
import "./cso.css";

export default function SeoKeywordStrategy() {
  return (
    <section className="keyword-section">

      <div className="keyword-grid-bg"></div>

      <div className="container">

        <div className="row align-items-center gy-5">

          {/* Left */}

          <div className="col-lg-5">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <span className="keyword-badge">
                {keywordStrategyData.badge}
              </span>

              <h2 className="keyword-title">
                {keywordStrategyData.title}
              </h2>

              <p className="keyword-description">
                {keywordStrategyData.description}
              </p>

              <p className="keyword-content">
                {keywordStrategyData.content}
              </p>

            </motion.div>

          </div>

          {/* Right */}

          <div className="col-lg-7">

            <div className="keyword-map">

              <div className="keyword-center-node">
                EVENT SEO
              </div>

              {keywordStrategyData.keywords.map((item, index) => (
                <motion.div
                  key={index}
                  className={`keyword-node node-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.15
                  }}
                  viewport={{ once: true }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}