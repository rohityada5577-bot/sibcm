"use client";

import { motion } from "framer-motion";
import { ppcRoiData } from "./data";
import "./PPCHero.css";

export default function ConferencePPCROI() {
  return (
    <section className="roi-section">

      <div className="container">

        <div className="row align-items-start">

          <div className="col-lg-5">

            <div className="roi-left">

              <span className="roi-badge">
                {ppcRoiData.badge}
              </span>

              <h2 className="roi-title">
                {ppcRoiData.title}
              </h2>

              <p className="roi-description">
                {ppcRoiData.description}
              </p>

              <div className="roi-highlight">
                <span>20–40%</span>
                <p>{ppcRoiData.highlight}</p>
              </div>

            </div>

          </div>

          <div className="col-lg-7">

            {ppcRoiData.benefits.map((item, index) => (
              <motion.div
                key={index}
                className="roi-benefit-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >

                <div className="roi-number">
                  {item.number}
                </div>

                <div className="roi-content">

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