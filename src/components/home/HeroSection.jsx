"use client";

import Link from "next/link";
import Image from "next/image";
import { heroContent } from "./data";


export default function HeroSection({data = heroContent }) {
  return (
    <section className="hero-section">
      <div className="hero-gradient-bg "></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">

          {/* Content */}
          <div className="col-lg-7 pt-3 pb-3 hero-content">
            <span className="hero-badge">
              {data.badge}
            </span>

            <h3 className="hero-title">
              {data.headingMain}
              <br />
              <span className="gradient-heading">
                {data.headingGradient}
              </span>
            </h3>
            <div className="hero-actions">
              <button className="hero-btn-primary">
                {data.buttons.primary}
              </button>

              <button className="hero-btn-secondary">
                {data.buttons.secondary}
              </button>
            </div>
          </div>

          {/* Image */}
      
             <div className="col-lg-5">
            <div className="growth-panel marketing-panel">

       

              <p className="hero-description">
                  {data.description}
                </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


