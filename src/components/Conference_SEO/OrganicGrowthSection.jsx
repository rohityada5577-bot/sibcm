"use client";

import { motion } from "framer-motion";
import "./cso.css";
import { organicGrowthData } from "./data";

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
                {organicGrowthData.badge}
              </span>

              <h2 className="growth-title">
                {organicGrowthData.title}
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
                <div className="growth-highlight">
                <span>SEO Advantage</span>

                {organicGrowthData.footer}
              </div>
              {/* <p>{organicGrowthData.description}</p> */}

              <p>{organicGrowthData.intro}</p>

            

            </motion.div>

          </div>

        </div>

        {/* Growth Points */}

        <div className="row mt-5 g-4">

          {organicGrowthData.points.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <motion.div
                className="growth-point-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="growth-point-number">
                  {item.year}
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