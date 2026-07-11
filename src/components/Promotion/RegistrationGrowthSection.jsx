"use client";

import { motion } from "framer-motion";
import { registrationStrategiesData } from "./data";

export default function RegistrationGrowthSection() {
  return (
    <section className="registration-marketing-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="registration-growth-header text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="registration-growth-badge">
            {registrationStrategiesData.badge}
          </span>

          <h2 className="registration-growth-title">
            {registrationStrategiesData.heading}
          </h2>

          <p className="registration-growth-description">
            {registrationStrategiesData.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="registration-growth-timeline">

          {registrationStrategiesData.strategies.map((item, index) => (
            <motion.div
              key={index}
              className={`registration-growth-item ${
                index % 2 === 0
                  ? "registration-growth-item-left"
                  : "registration-growth-item-right"
              }`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="registration-growth-card">

                <div className="registration-growth-number">
                  {item.number}
                </div>

                <h3 className="registration-growth-card-title">
                  {item.title}
                </h3>

                <p className="registration-growth-card-description">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}