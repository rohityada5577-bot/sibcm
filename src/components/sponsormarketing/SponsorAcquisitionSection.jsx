"use client";

import { motion } from "framer-motion";
import { sponsorAcquisitionData } from "./data";
import "./sponor.css";

export default function SponsorAcquisitionSection() {
  return (
    <section className="sponsor-acquisition-section">

      <div className="container">

        <div className="row align-items-center gy-5">

          <div className="col-lg-5">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="acquisition-badge">
                {sponsorAcquisitionData.badge}
              </span>

              <h2 className="acquisition-title">
                {sponsorAcquisitionData.title}
              </h2>

              <p className="acquisition-description">
                {sponsorAcquisitionData.description}
              </p>
            </motion.div>

          </div>

          <div className="col-lg-7">

            <div className="acquisition-process">

              {sponsorAcquisitionData.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`process-block process-${index + 1}`}
                  initial={{
                    opacity: 0,
                    y: 40
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15
                  }}
                  viewport={{ once: true }}
                >
                  <div className="process-number">
                    {(index + 1)
                      .toString()
                      .padStart(2, "0")}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}