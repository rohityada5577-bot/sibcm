"use client";

import { motion } from "framer-motion";
import { smscontent } from "./data";
import "./smm.css";

export default function SMMHeroSection( {data = smscontent}) {
  return (
<section className="social-hero">
  <div className="hero-glow hero-glow-1"></div>
  <div className="hero-glow hero-glow-2"></div>

  <div className="container">
    <div className="row align-items-center min-vh-90">

      <div className="col-lg-6">
        <span className="hero-badge">
        Conference Growth Partner
        </span>

        <h1 className="hero-title">
          Conference Social Media Marketing 

          <br />
         LinkedIn,  Instagram, TikTok
        
        </h1>

      

        <div className="hero-buttons">
          <button className="btn-primary-custom">
            Get Your Free Event Strategy
          </button>

          <button className="btn-secondary-custom">
            See Our Results ↗
          </button>
        </div>
      </div>

      <div className="col-lg-6">

        <div className="hero-right">

          {/* <div className="hero-image-card">
            <img
              src="/homehero.jpg"
              alt=""
              className="img-fluid"
            />

            <div className="image-overlay-stat">
              4.2M Brand Impressions
            </div>
          </div> */}
    <p className="hero-description">
     Social media is where your future attendees are talking about your industry, following thought leaders, and discovering events. Conference social media marketing puts your event in the center of those conversations — building awareness, generating FOMO, and driving registrations across the platforms your target audience uses most.
We manage social media marketing exclusively for conferences and events. Every platform strategy, content format, and targeting approach we use has been tested and refined specifically for event promotion.

        </p>
          {/* <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon">👥</div>

              <h3>+124%</h3>

              <p>Registration Lift</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🚀</div>

              <h3>Sold Out</h3>

              <p>3 Weeks Early</p>
            </div>

          </div> */}

        </div>

      </div>

    </div>
  </div>
</section>
  );
}