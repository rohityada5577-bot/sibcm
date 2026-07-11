"use client";

import { motion } from "framer-motion";
import { digitalChannelsData } from "./data";

export default function DigitalChannelsSection() {
  return (
    <section className="channel-strategy-section">
      <div className="container">

        <div className="channel-strategy-header text-center">
          <span className="channel-strategy-badge">
            {digitalChannelsData.badge}
          </span>

          <h2 className="channel-strategy-title">
            {digitalChannelsData.heading}
          </h2>

          <p className="channel-strategy-description">
            {digitalChannelsData.description}
          </p>
        </div>

        {digitalChannelsData.channels.map((item, index) => (
          <motion.div
            key={index}
            className="channel-strategy-row"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="row align-items-center">

              {index % 2 === 0 ? (
                <>
                  <div className="col-lg-6">
                    <div className="channel-strategy-number-wrap">
                      <span className="channel-strategy-number">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="channel-strategy-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-6">
                    <div className="channel-strategy-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="channel-strategy-number-wrap">
                      <span className="channel-strategy-number">
                        {item.number}
                      </span>
                    </div>
                  </div>
                </>
              )}

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}