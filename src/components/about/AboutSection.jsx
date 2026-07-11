"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./about.css";
import { seoAboutContent } from "./data";


export default function AboutSection({data =  seoAboutContent }) {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(textRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.fromTo(
  cardRef.current,
  {
    x: 120,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
    delay: 0.4,
    ease: "power4.out",
  }
);
  }, []);

  return (
    <section className="about-section">

      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-6">

            <span className="about-badge">
                {data.badge}
            </span>

            <h2 ref={titleRef} className="about-title">
               {data.title}
              <span> {data.titleHighlight}</span>
            </h2>

         

          </div>

          <div className="col-lg-6">

            <div ref={cardRef} className="about-card">

              <div className="comparison-box old-way">
               
                <p>
                {data.oldWay}
                </p>
              </div>

              <div className="comparison-box our-way">
                
                <p>
                {data.newWay}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}