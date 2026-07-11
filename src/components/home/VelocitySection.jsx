"use client";

import { velocityContent } from "./data";
import  './homepage.css';

export default function VelocitySection() {
  return (
    <section className="velocity-section position-relative overflow-hidden">

      <div className="velocity-bg-shape velocity-shape-1"></div>
      <div className="velocity-bg-shape velocity-shape-2"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="velocity-badge">
              {velocityContent.badge}
            </span>
            <h2 className="whitebg-h2">
              {velocityContent.headingMain}
              <br />
              <span className="velocity-gradient-text">
                {velocityContent.headingGradient}
              </span>
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="velocity-small-title">
                {velocityContent.mapTitle}
              </h3>
              <p className="text-secondary">
                {velocityContent.mapDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


