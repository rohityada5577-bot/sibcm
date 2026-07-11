"use client";

import { motion } from "framer-motion";
import { industryPromotionData } from "./data";
import "./industries.css";

export default function IndustryPromotionSection() {
  const { tech, healthcare } = industryPromotionData;

  return (
    <section className="industry-showcase-section">

      <div className="container">

        <div className="row g-0 industry-wrapper">

          {/* Tech */}

          <div className="col-lg-6">

            <motion.div
              className="tech-showcase"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="industry-chip">
                Technology
              </span>

              <h2>{tech.title}</h2>

              <p>{tech.description}</p>

              <div className="industry-points">

                {tech.points.map((item, index) => (
                  <div
                    className="tech-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

          {/* Healthcare */}

          <div className="col-lg-6">

            <motion.div
              className="healthcare-showcase"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="industry-chip healthcare-chip">
                Healthcare
              </span>

              <h2>{healthcare.title}</h2>

              <p>{healthcare.description}</p>

              <div className="healthcare-points">

                {healthcare.points.map((item, index) => (
                  <div
                    className="healthcare-item"
                    key={index}
                  >
                    {item}
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