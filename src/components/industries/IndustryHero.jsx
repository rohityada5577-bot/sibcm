"use client";

import { motion } from "framer-motion";
import { industriesHeroData } from "./data";
import "./industries.css";

export default function IndustriesHero() {
  return (
    <section className="industries-hero">

      {/* Animated Background */}

      <div className="hero-grid"></div>

      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>
      <div className="hero-glow glow-three"></div>

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-xl-10">

            <motion.div
              className="industries-hero-content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <span className="hero-badge">
                {industriesHeroData.badge}
              </span>

              <h1 className="hero-title">
                {industriesHeroData.title}
              </h1>

              <p className="hero-description">
                {industriesHeroData.description}
              </p>

              <div className="industry-tags">

                {industriesHeroData.industries.map(
                  (industry, index) => (
                    <motion.span
                      key={index}
                      className="industry-tag"
                      animate={{
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 3 + index * 0.4,
                        repeat: Infinity
                      }}
                    >
                      {industry}
                    </motion.span>
                  )
                )}

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}