"use client";

import { motion } from "framer-motion";
import { conferenceAttendanceData } from "./data";

export default function AttendanceChallengesSection() {
  return (
    <section className="attendance-challenges-section">
      <div className="container">

        <motion.div
          className="attendance-header text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="attendance-badge">
            {conferenceAttendanceData.badge}
          </span>

          <h2 className="attendance-title">
            {conferenceAttendanceData.heading}
          </h2>

          <p className="attendance-description">
            {conferenceAttendanceData.description}
          </p>
        </motion.div>

        <div className="row g-4">

          {conferenceAttendanceData.problems.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <motion.div
                className="attendance-problem-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15
                }}
              >
                <span className="attendance-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            </div>
          ))}

        </div>

        <motion.div
          className="attendance-solution-box"
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">

            <div className="col-lg-8">
              <h3>
                {conferenceAttendanceData.solution.heading}
              </h3>

              <p>
                {conferenceAttendanceData.solution.description}
              </p>

              <p>
                {conferenceAttendanceData.solution.text}
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="attendance-btn">
                {conferenceAttendanceData.solution.button}
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}