"use client";

import { motion } from "framer-motion";
import { marketingChannelsData } from "./data";

export default function MarketingChannels() {
  return (
    <section className="marketing-channels">
      <div className="container">

        <div className="text-center section-header">
          <span className="section-badge">
            {marketingChannelsData.badge}
          </span>

          <h2>{marketingChannelsData.heading}</h2>

          <p>{marketingChannelsData.description}</p>
        </div>

        {marketingChannelsData.services.map((service, index) => (
          <motion.div
            key={index}
            className="channel-card"
            initial={{
              opacity: 0,
              y: 60
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6
            }}
          >
            <div className="row align-items-center">

              <div className="col-lg-3">
                <div className="channel-number">
                  {service.number}
                </div>
              </div>

              <div className="col-lg-9">
                <div className="channel-content">
                  <h3>{service.title}</h3>

                  <span>
                    {service.subtitle}
                  </span>

                  <div className="row mt-4">
                    {service.points.map((point, i) => (
                      <div
                        key={i}
                        className="col-md-6 mb-3"
                      >
                        <div className="feature-item">
                          ✓ {point}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}