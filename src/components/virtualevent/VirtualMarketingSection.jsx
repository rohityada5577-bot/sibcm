"use client";

import { motion } from "framer-motion";
import { virtualMarketingData } from "./data";
import "./virtual.css";

export default function VirtualMarketingSection() {
  const { channels, challenges, whyMarketing } =
    virtualMarketingData;

  return (
    <section className="virtual-marketing-section">

      <div className="marketing-glow marketing-glow-1"></div>
      <div className="marketing-glow marketing-glow-2"></div>

      <div className="container">

        {/* Top Featured Card */}

        <motion.div
          className="promotion-master-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{channels.title}</h2>

          <div className="promotion-tags">

            {channels.points.map((item, index) => (
              <span key={index}>
                {item}
              </span>
            ))}

          </div>
        </motion.div>

        {/* Middle Cards */}

        <div className="row g-4 mt-3">

          <div className="col-lg-6">

            <motion.div
              className="challenge-card left-card"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>{challenges.title}</h3>

              {challenges.points
                .slice(0, 2)
                .map((item, index) => (
                  <div
                    className="challenge-item"
                    key={index}
                  >
                    <strong>
                      {item.objection}
                    </strong>

                    <p>{item.answer}</p>
                  </div>
                ))}
            </motion.div>

          </div>

          <div className="col-lg-6">

            <motion.div
              className="challenge-card right-card"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {challenges.points
                .slice(2, 4)
                .map((item, index) => (
                  <div
                    className="challenge-item"
                    key={index}
                  >
                    <strong>
                      {item.objection}
                    </strong>

                    <p>{item.answer}</p>
                  </div>
                ))}
            </motion.div>

          </div>

        </div>

        {/* Bottom Full Card */}

        <motion.div
          className="why-marketing-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{whyMarketing.title}</h2>

          <p>{whyMarketing.description}</p>
        </motion.div>

      </div>

    </section>
  );
}