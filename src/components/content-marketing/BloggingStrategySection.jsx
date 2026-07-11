"use client";

import { bloggingStrategyData } from "./data";
import { FaChartLine, FaMicrophone } from "react-icons/fa";
import "./contentemail.css"

export default function BloggingStrategySection() {
  const {
    badge,
    title,
    highlightTitle,
    description,
    strategyTitle,
    strategyDescription,
    categories,
  } = bloggingStrategyData;

  return (
    <section className="blog-strategy-section">
      <div className="container">
        <div className="blog-heading text-center">
          <span className="blog-tag">{badge}</span>

          <h2>
            {title} <span>{highlightTitle}</span>
          </h2>

          <p>{description}</p>
        </div>

        <div className="strategy-highlight">
          <div className="highlight-content">
            <h3>{strategyTitle}</h3>
            <p>{strategyDescription}</p>
          </div>
        </div>

        <div className="row g-4">
          {categories?.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="content-card">
                  <div className="icon-box">
                    <Icon />
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}