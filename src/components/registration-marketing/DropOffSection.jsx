"use client";

import { dropOffData } from "./data";

export default function DropOffSection() {
  const {
    badge,
    title,
    description,
    stages = [],
  } = dropOffData || {};

  return (
    <section className="dropoff-modern-section">
      <div className="container">

        <div className="text-center section-header">
          <span>{badge}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="row g-4">

          {stages.map((item, index) => (
            <div
              key={index}
              className="col-lg-6"
            >
              <div className="dropoff-card">

                <div className="dropoff-number">
                  0{index + 1}
                </div>

                <h3>{item.title}</h3>

                <p>{item.solution}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}