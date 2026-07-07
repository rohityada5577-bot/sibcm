"use client";

import { motion } from "framer-motion";
import { strategyFrameworkData } from "./dada";
import "./Service.css";

export default function StrategySection() {
  return (
    <section className="strategy-section">

      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-5">

            <motion.span
              className="strategy-badge"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {strategyFrameworkData.badge}
            </motion.span>

            <motion.h2
              className="strategy-title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {strategyFrameworkData.title}
            </motion.h2>

            <motion.p
              className="strategy-desc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {strategyFrameworkData.description}
            </motion.p>

          </div>

          <div className="col-lg-7">

            <div className="strategy-timeline">

              {strategyFrameworkData.phases.map((item, index) => (
                <motion.div
                  className="strategy-step"
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="step-number">
                    {item.number}
                  </div>

                  <div className="step-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}