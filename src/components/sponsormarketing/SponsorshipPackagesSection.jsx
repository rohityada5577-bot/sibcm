"use client";

import { motion } from "framer-motion";
import { sponsorshipPackagesData } from "./data";
import "./sponor.css";

export default function SponsorshipPackagesSection() {
  return (
    <section className="sponsor-packages-section">

      <div className="sponsor-bg-orb orb-one"></div>
      <div className="sponsor-bg-orb orb-two"></div>

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-7">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="packages-badge">
                {sponsorshipPackagesData.badge}
              </span>

              <h2 className="packages-title">
                {sponsorshipPackagesData.title}
              </h2>

              <p className="packages-description">
                {sponsorshipPackagesData.description}
              </p>
            </motion.div>

            <div className="sponsor-ladder">

              {sponsorshipPackagesData.tiers.map((item, index) => (
                <motion.div
                  key={index}
                  className="ladder-step"
                  initial={{
                    opacity: 0,
                    x: -40
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: index * 0.15
                  }}
                  viewport={{ once: true }}
                >
                  <div className="ladder-level">
                    {item.level}
                  </div>

                  <div className="ladder-content">
                    <h3>{item.name}</h3>
                    <p>{item.details}</p>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-5">

            <motion.div
              className="partnership-panel"
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="panel-glow"></div>

              <h3>
                {sponsorshipPackagesData.partnershipTitle}
              </h3>

              <p>
                {sponsorshipPackagesData.partnershipDescription}
              </p>

              <p>
                {sponsorshipPackagesData.partnershipDescription2}
              </p>

              <div className="partnership-badge-box">
                Multi-Year Revenue Growth
              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}