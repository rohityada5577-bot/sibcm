"use client";

import { motion } from "framer-motion";
import { paidCampaignsData } from "./data";
import "./PPCHero.css";

export default function PaidCampaigns() {
  return (
    <section className="ppc-featured-section">

      <div className="container">

        <div className="ppc-featured-header text-center">

          <span className="ppc-featured-badge">
            {paidCampaignsData.badge}
          </span>

          <h2>
            {paidCampaignsData.title}
          </h2>

          <p>
            {paidCampaignsData.description}
          </p>

        </div>

        <div className="row g-4">

          {/* Featured Card */}

          <div className="col-lg-12">

            <motion.div
              className="ppc-main-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="row align-items-center">

                <div className="col-lg-4">

                  <div className="ppc-main-number">
                    {paidCampaignsData.featured.number}
                  </div>

                </div>

                <div className="col-lg-8">

                  <h3>
                    {paidCampaignsData.featured.title}
                  </h3>

                  <p>
                    {paidCampaignsData.featured.description}
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

          {/* Small Cards */}

          {paidCampaignsData.secondary.map((item, index) => (
            <div className="col-lg-6" key={index}>

              <motion.div
                className="ppc-small-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2
                }}
              >
                <div className="ppc-small-number">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </motion.div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}