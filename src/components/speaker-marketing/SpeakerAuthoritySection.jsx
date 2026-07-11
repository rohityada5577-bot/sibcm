"use client";

import { speakerAuthorityData } from "./data";

export default function SpeakerAuthoritySection() {
  const {
    badge,
    title,
    description,
    items = [],
  } = speakerAuthorityData;

  return (
    <section className="speaker-authority-section">
      <div className="container">

        <div className="authority-header text-center">
          <span>{badge}</span>

          <h2>{title}</h2>

          <p>{description}</p>
        </div>

        <div className="authority-orbit">

          <div className="authority-center">
            <span>SPEAKER</span>
            <strong>AUTHORITY</strong>
          </div>

          <div className="orbit-card orbit-1">
            <h4>{items[0]?.title}</h4>
            <p>{items[0]?.description}</p>
          </div>

          <div className="orbit-card orbit-2">
            <h4>{items[1]?.title}</h4>
            <p>{items[1]?.description}</p>
          </div>

          <div className="orbit-card orbit-3">
            <h4>{items[2]?.title}</h4>
            <p>{items[2]?.description}</p>
          </div>

          <div className="orbit-card orbit-4">
            <h4>{items[3]?.title}</h4>
            <p>{items[3]?.description}</p>
          </div>

        </div>

      </div>
    </section>
  );
}