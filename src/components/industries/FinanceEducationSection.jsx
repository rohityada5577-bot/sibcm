"use client";

import { motion } from "framer-motion";
import { financeEducationData } from "./data";
import "./industries.css";

export default function FinanceEducationSection() {
  const { finance, education } = financeEducationData;

  return (
    <section className="finance-education-section">

      <div className="container">

        <div className="row g-4">

          {/* Finance */}

          <div className="col-lg-6">

            <motion.div
              className="finance-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="finance-glow"></div>

              <span className="industry-badge finance-badge">
                Finance Industry
              </span>

              <h2>{finance.title}</h2>

              <p>{finance.description}</p>

              <div className="finance-points">

                {finance.points.map((item, index) => (
                  <div
                    className="finance-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

          {/* Education */}

          <div className="col-lg-6">

            <motion.div
              className="education-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="education-glow"></div>

              <span className="industry-badge education-badge">
                Education Industry
              </span>

              <h2>{education.title}</h2>

              <p>{education.description}</p>

              <div className="education-points">

                {education.points.map((item, index) => (
                  <div
                    className="education-item"
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