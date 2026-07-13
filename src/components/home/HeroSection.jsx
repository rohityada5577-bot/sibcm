"use client";

import { heroContent } from "./data";
import { TypeAnimation } from "react-type-animation";
import Button from "@/components/common/Button";

export default function HeroSection({ data = heroContent }) {
  return (
    <section className="site-section hero-bg">
      <div className="site-container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7 hero-content">
            <span className="site-badge">
              {data.badge}
            </span>

            <h1 className="site-title-xl hero-title mt-4">
              {data.headingMain}
              <br />
              <TypeAnimation
                    sequence={[
                      data.headingGradient,
                      2000,
                      "",
                      500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="gradient-heading"
                  />
            </h1>
            <div className="d-flex gap-3 flex-wrap mt-5">
                  <Button
                    text="Scale Your Attendance"
                    href="/contact"
                  />
              <button className="site-btn-outline text-black">
                {data.buttons.secondary}
              </button>
            </div>
          </div>
          <div className="col-lg-5 hero-card-wrapper">
            <div className="site-card hero-card">
              <h3 className="site-title-sm">
                Conference Growth
              </h3>
              <div className="hero-title-line"></div>
              <p className="site-text">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}