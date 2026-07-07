"use client";

import { motion } from "framer-motion";
import { marketingChannelsData } from "./dada";
import "./Service.css";

export default function MarketingChannelsSection() {
  return (
    <section className="marketing-section">

      <div className="container">

        <motion.div
          className="marketing-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="marketing-badge">
            {marketingChannelsData.badge}
          </span>

          <h2 className="marketing-title">
            {marketingChannelsData.title}
          </h2>

          <p className="marketing-description">
            {marketingChannelsData.description}
          </p>
        </motion.div>

        <div className="row g-4 mt-4">

          {marketingChannelsData.channels.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <motion.div
                className={`marketing-card ${item.color}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="marketing-number">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>
                      {point}
                    </li>
                  ))}
                </ul>

              </motion.div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}