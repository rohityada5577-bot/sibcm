"use client";

import { motion } from "framer-motion";
import { sponsorInvestmentData } from "./data";
import "./sponor.css";

export default function SponsorInvestmentSection() {
  return (
    <section className="marquee-sponsor-section">

      <div className="container">

        <motion.div
          className="marquee-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="marquee-badge">
            {sponsorInvestmentData.badge}
          </span>

          <h2 className="marquee-title">
            {sponsorInvestmentData.title}
          </h2>
        </motion.div>

      </div>

      <div className="marquee-list">

        {sponsorInvestmentData.reasons.map((item, index) => (

          <div
            key={index}
            className={`marquee-row marquee-row-${index + 1}`}
          >

            <div className="marquee-track">

              {[...Array(3)].map((_, i) => (

                <div
                  key={i}
                  className="marquee-item"
                >
                  <h3>{item.title}</h3>

                  <span></span>

                  <p>{item.description}</p>
                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}