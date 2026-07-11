"use client";

import Image from "next/image";
import { speakerMarketingData } from "./data";
import "./speakermarketing.css";

export default function SpeakerMarketingHero() {
  const { title, description, image } = speakerMarketingData;

  return (
    <section className="speaker-marketing-hero">
      <div className="container">

        <div className="row align-items-center gy-5">

          <div className="col-lg-6">
            <div className="speaker-content">

              <span className="speaker-badge">
                SPEAKER MARKETING
              </span>

              <h1>{title}</h1>

              <p>{description}</p>

            </div>
          </div>

          <div className="col-lg-6">
            <div className="speaker-image-wrapper">

              <div className="floating-card attendees">
                More Attendees
              </div>

              <div className="floating-card reach">
                Wider Reach
              </div>

              <Image
                src={image}
                alt="Conference Speaker"
                width={700}
                height={800}
                className="speaker-image"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}