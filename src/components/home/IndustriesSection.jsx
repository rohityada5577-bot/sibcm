"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { industriesData } from "./data";

export default function IndustriesSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="industries-section">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="section-header text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-tag">Industries</span>

          <h2>{industriesData.heading}</h2>

          <p>{industriesData.description}</p>
        </motion.div>

        {/* Industry Grid */}
        <div className="row g-4">
          {industriesData.industries.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <motion.div
                className="industry-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="conference-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>{industriesData.cta.heading}</h2>

          <p>{industriesData.cta.description}</p>

          <p>{industriesData.cta.subDescription}</p>

          <Link
            href={industriesData.cta.buttonLink}
            className="cta-btn"
          >
            {industriesData.cta.buttonText}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}