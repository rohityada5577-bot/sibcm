"use client";

import { speakerPromotionData } from "./data";

export default function SpeakerPromotionSection() {
  const {
    badge,
    title,
    description,
    items = [],
  } = speakerPromotionData;

  return (
    <section className="speaker-promotion-section">
      <div className="container">

        <div className="promotion-header text-center">
          <span>{badge}</span>

          <h2>{title}</h2>

          <p>{description}</p>
        </div>

        <div className="promotion-flow">

          {items.map((item, index) => (
            <div
              className="promotion-item"
              key={index}
            >
              <div className="item-count">
                0{index + 1}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}