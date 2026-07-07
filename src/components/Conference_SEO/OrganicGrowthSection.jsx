"use client";

import { motion } from "framer-motion";
import "./cso.css";

export default function OrganicGrowthSection() {
  return (
    <section className="organic-growth-section">

      <div className="growth-bg-shape shape-one"></div>
      <div className="growth-bg-shape shape-two"></div>

      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-5">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="growth-badge">
                Sustainable SEO Growth
              </span>

              <h2 className="growth-title">
                Long-Term Growth
                <span> Through Organic Traffic</span>
              </h2>
            </motion.div>

          </div>

          <div className="col-lg-7">

            <motion.div
              className="growth-content"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p>
                The most cost-effective conference marketing strategy over time is a consistent investment in SEO.
              </p>

              <p>
                Paid ads deliver immediate results but stop the moment your budget runs out. SEO builds a cumulative organic presence — each piece of content, each optimized page, and each earned backlink compounds in value over time.
              </p>

              <div className="growth-highlight">
                <span>Organic Asset</span>

                A blog post ranking on Page 1 for
                <strong> "industry conference tips"</strong>
                can generate registration traffic not only for this year's event, but for future events as well.
              </div>

              <p>
                Our conference clients who invest consistently in SEO year-over-year see their cost-per-registration decrease annually as organic traffic grows — while their paid advertising campaigns become more effective because their brand already has organic authority.
              </p>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}