"use client";

import Link from "next/link";
import Image from "next/image";
import { heroContent } from "./data";
import  './homepage.css';

export default function HeroSection() {
  return (
    <section className="hero-section py-5">
      <div className="hero-gradient-bg"></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">

          {/* Content */}
          <div className="col-lg-7 hero-content">
            <span className="hero-badge">
              {heroContent.badge}
            </span>

            <h1 className="hero-title">
              {heroContent.headingMain}
              <br />
              <span className="gradient-heading">
                {heroContent.headingGradient}
              </span>
            </h1>

            <p className="hero-description">
              {heroContent.description}
            </p>

            <div className="hero-kpis">
              {heroContent.kpis.map((kpi, index) => (
                <div key={index} className="kpi-badge">
                  ✓ {kpi.text}
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <button className="hero-btn-primary">
                {heroContent.buttons.primary}
              </button>

              <button className="hero-btn-secondary">
                {heroContent.buttons.secondary}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-5 hero-visual">
            <div className="glass-card floating-image">
              <Image
                src="/homehero.jpg"
                alt="Conference Marketing"
                width={650}
                height={550}
                priority
                className="img-fluid rounded-4"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


