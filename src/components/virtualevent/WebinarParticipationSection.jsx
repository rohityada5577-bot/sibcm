"use client";

import { motion } from "framer-motion";
import { webinarParticipationData } from "./data";
import "./virtual.css";

export default function WebinarParticipationSection() {
  const { webinarStrategy, onlineParticipation } =
    webinarParticipationData;

  return (
    <section className="webinar-spotlight-section">

      <div className="spotlight-glow glow-left"></div>
      <div className="spotlight-glow glow-right"></div>

      <div className="container">

        <div className="webinar-layout">

          {/* Left Panel */}

          <motion.div
            className="webinar-panel"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="panel-tag">
              Webinar Growth
            </span>

            <h2>{webinarStrategy.title}</h2>

            <p className="panel-description">
              {webinarStrategy.description}
            </p>

            <ul>
              {webinarStrategy.points.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Right Panel */}

          <motion.div
            className="participation-panel"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="panel-tag secondary">
              Live Engagement
            </span>

            <h2>{onlineParticipation.title}</h2>

            <p className="panel-description">
              {onlineParticipation.description}
            </p>

            <ul>
              {onlineParticipation.points.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}