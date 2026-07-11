"use client";

import { motion } from "framer-motion";
import { growthResultsData } from "./data";
import "./casestudy.css";

export default function GrowthResultsSection() {
  return (
 <section className="growth-blueprint-section">

  <div className="container">

    <div className="blueprint-header">

      <h2>Real Conference Growth Results</h2>

      <p>
        What separates meaningful case studies from
        empty testimonials is specificity:
        exact numbers, named strategies,
        and documented outcomes.
      </p>

    </div>

    {/* Framework */}

    <div className="framework-map">

      <div className="framework-node">
        <h3>Challenge</h3>
        <p>
          Attendance or registration problems.
        </p>
      </div>

      <div className="framework-node">
        <h3>Strategy</h3>
        <p>
          Channels, tactics and execution.
        </p>
      </div>

      <div className="framework-node">
        <h3>Results</h3>
        <p>
          Growth percentages and ROI.
        </p>
      </div>

      <div className="framework-node">
        <h3>Timeline</h3>
        <p>
          How quickly results appeared.
        </p>
      </div>

      <div className="framework-line line-1"></div>
      <div className="framework-line line-2"></div>
      <div className="framework-line line-3"></div>

    </div>

    {/* Case Study */}

    <div className="case-blueprint">

      <div className="case-title-wrap">

        <span>Case Study Framework</span>

        <h2>
          Annual Technology Summit
        </h2>

      </div>

      <div className="case-section">

        <h3>Challenge</h3>

        <p>
          A technology conference entering its 3rd year
          had plateaued at 400 attendees despite an
          excellent speaker lineup.
        </p>

      </div>

      <div className="case-section">

        <h3>Strategy</h3>

        <p>
          Conference SEO, LinkedIn Ads,
          email nurturing and speaker amplification.
        </p>

      </div>

      <div className="case-section">

        <h3>Results</h3>

        <p>
          Registration increased by 68%.
          Cost-per-registration decreased by 42%.
          Organic traffic increased by 310%.
        </p>

      </div>

    </div>

  </div>

</section>
  );
}