"use client";

import { motion } from "framer-motion";
import { rankingConferenceData } from "./dada";
import "./cso.css";

export default function RankingConference() {
  return (
    <section className="ranking-section">

      <div className="container">

        <motion.div
          className="ranking-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="ranking-badge">
            {rankingConferenceData.badge}
          </span>

          <h2 className="ranking-title">
            {rankingConferenceData.title}
          </h2>

          <p className="ranking-description">
            {rankingConferenceData.description}
          </p>
        </motion.div>

        <div className="ranking-line"></div>

        <div className="row g-5 mt-2">

          {rankingConferenceData.items.map((item, index) => (
            <div className="col-lg-4" key={index}>

              <motion.div
                className="ranking-item"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15
                }}
              >
                <div className="ranking-number">
                  {item.number}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </motion.div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}