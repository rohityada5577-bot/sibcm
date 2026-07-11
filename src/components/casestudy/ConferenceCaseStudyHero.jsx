"use client";

import { motion } from "framer-motion";
import { caseStudyHeroData } from "./data";
import "./casestudy.css";

export default function ConferenceCaseStudyHero() {
  return (
    <section className="case-study-hero">

      {/* Background Effects */}

      <div className="case-grid"></div>

      <div className="case-glow glow-one"></div>
      <div className="case-glow glow-two"></div>
      <div className="case-glow glow-three"></div>

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-xl-10">

            <motion.div
              className="case-hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <span className="case-badge">
                {caseStudyHeroData.badge}
              </span>

              <h1 className="case-title">
                {caseStudyHeroData.title}
              </h1>

              <p className="case-description">
                {caseStudyHeroData.description}
              </p>

              <motion.div
                className="case-note-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <strong>Important:</strong>{" "}
                {caseStudyHeroData.note}
              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* Floating Success Elements */}

      <motion.div
        className="success-pill pill-1"
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
      >
        Attendance Growth
      </motion.div>

      <motion.div
        className="success-pill pill-2"
        animate={{
          y: [0, 15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity
        }}
      >
        Registration Increase
      </motion.div>

      <motion.div
        className="success-pill pill-3"
        animate={{
          y: [0, -12, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
      >
        Higher ROI
      </motion.div>

    </section>
  );
}