"use client";

import { motion } from "framer-motion";
import { virtualConferenceHeroData } from "./data";
import "./virtual.css";

export default function VirtualConferenceHero() {
  return (
    <section className="virtual-hero-section">

      <div className="virtual-grid"></div>

      <div className="virtual-glow glow-one"></div>
      <div className="virtual-glow glow-two"></div>

      <div className="container">

        <motion.div
          className="virtual-hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <motion.span
            className="virtual-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {virtualConferenceHeroData.badge}
          </motion.span>

          <motion.h1
            className="virtual-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {virtualConferenceHeroData.title}
          </motion.h1>

          <motion.p
            className="virtual-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {virtualConferenceHeroData.description}
          </motion.p>

          <motion.p
            className="virtual-description secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {virtualConferenceHeroData.description2}
          </motion.p>

        </motion.div>

        <motion.div
          className="virtual-highlights"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          {virtualConferenceHeroData.highlights.map(
            (item, index) => (
              <div
                key={index}
                className="virtual-highlight-item"
              >
                {item}
              </div>
            )
          )}

        </motion.div>

      </div>

    </section>
  );
}