"use client";

import { motion } from "framer-motion";
import { roiContent } from "./data";

export default function RoiContentSection() {
  return (
    <section className="roi-content-section">
      <div className="container">

        <motion.div
          className="roi-content-wrapper"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <span className="roi-badge">
                {roiContent.badge}
              </span>

              <h2 className="roi-heading">
                {roiContent.title}
              </h2>

              <div className="heading-line"></div>
            </div>

            <div className="col-lg-7">
              <div className="roi-card">

                <p className="roi-text">
                  {roiContent.paragraph1}
                </p>

                <p className="roi-text">
                  {roiContent.paragraph2}
                </p>

                <div className="roi-highlight">
                  <span className="quote-mark">❝</span>

                  <p>
                    {roiContent.highlight}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}