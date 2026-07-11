"use client";

import { motion } from "framer-motion";
import { attendeeGrowthData } from "./data";

export default function AttendeeGrowthSection() {
  return (
    <section className="attendee-growth-section">
      <div className="container">

        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge">
            {attendeeGrowthData.badge}
          </span>

          <h2>{attendeeGrowthData.heading}</h2>

          <p>{attendeeGrowthData.description}</p>
        </motion.div>

        <div className="row g-4">

          {attendeeGrowthData.points.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <motion.div
                className="strategy-card"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
              >
                <div className="card-number">
                  {item.number}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            </div>
          ))}

        </div>

        <motion.div
          className="bottom-highlight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>{attendeeGrowthData.footerText}</p>
        </motion.div>

      </div>
    </section>
  );
}