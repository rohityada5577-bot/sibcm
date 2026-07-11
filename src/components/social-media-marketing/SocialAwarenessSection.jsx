"use client";

import { motion } from "framer-motion";
import { awarenessData } from "./data";

export default function SocialAwarenessSection() {
  return (
    <section className="social-awareness-section">
      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-5">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="awareness-label">
                Social Media Strategy
              </span>

              <h2 className="awareness-title">
                {awarenessData.title}
              </h2>

              <p>{awarenessData.description1}</p>
              <p>{awarenessData.description2}</p>
              <p>{awarenessData.description3}</p>
            </motion.div>

          </div>

          <div className="col-lg-7">

            <div className="reasons-wrapper">

              <h3 className="reasons-title">
                {awarenessData.reasonsTitle}
              </h3>

              {awarenessData.reasons.map((item, index) => (
                <motion.div
                  key={index}
                  className="reason-row"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                >
                  <div className="reason-number">
                    {(index + 1)
                      .toString()
                      .padStart(2, "0")}
                  </div>

                  <div className="reason-text">
                    {item}
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