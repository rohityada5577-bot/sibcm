"use client";

import "./about.css";
import { expertsData } from "./data";

export default function ExpertsSection({data = expertsData }) {
  return (
    <section className="experts-section">
      <div className="experts-shape experts-shape-1"></div>
      <div className="experts-shape experts-shape-2"></div>

      <div className="container">

        <div className="row align-items-end mb-5">

          <div className="col-lg-6">
            <span className="experts-badge">
              {data.badge}
            </span>

            <h2 className="whitebg-h2">
              {data.title}
              <span  className="gradient-heading"> {data.highlight}</span>
            </h2>
          </div>

          <div className="col-lg-6">
            <p className="experts-description">
              {data.description}
            </p>
          </div>

        </div>

        <div className="row g-4">

          {data.items.map((item) => (
            <div className="col-lg-6" key={item.id}>
              <div className="expert-card">

                <div className="expert-top">
                  <span className="expert-number">
                    {item.id}
                  </span>

                  <span className="expert-tag">
                    {item.tag}
                  </span>
                </div>

                <h3 className="expert-heading">
                  {item.title}
                </h3>

                <p className="expert-text">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}