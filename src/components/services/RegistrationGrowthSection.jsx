"use client";

import { motion } from "framer-motion";
import { registrationGrowthData } from "./dada";
import "./Service.css";

export default function RegistrationGrowthSection() {
  return (
    <section className="growth-section">

      <div className="container">

        <motion.div
          className="growth-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="growth-badge">
            {registrationGrowthData.badge}
          </span>

          <h2 className="growth-title">
            {registrationGrowthData.title}
          </h2>

          <p className="growth-description">
            {registrationGrowthData.description}
          </p>
        </motion.div>

        <div className="row g-4 mt-4">

          {registrationGrowthData.items.map((item, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
            >
              <motion.div
                className="growth-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="growth-number">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}