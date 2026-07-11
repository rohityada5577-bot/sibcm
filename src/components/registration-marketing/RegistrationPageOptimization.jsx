"use client";

import { registrationPageData } from "./data";

export default function RegistrationPageOptimization() {
  const {
    badge,
    title,
    description,
    items
  } = registrationPageData;

  return (
    <section className="registration-wireframe-section">
      <div className="container">

        <div className="wireframe-header text-center">
          <span>{badge}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="wireframe-layout">

          <div className="wireframe-points left">
            <div className="point">
              <h4>{items[0].title}</h4>
              <p>{items[0].text}</p>
            </div>

            <div className="point">
              <h4>{items[1].title}</h4>
              <p>{items[1].text}</p>
            </div>

            <div className="point">
              <h4>{items[2].title}</h4>
              <p>{items[2].text}</p>
            </div>
          </div>

          <div className="registration-mockup">
            <div className="mock-header"></div>

            <div className="mock-form">
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="mock-pricing"></div>

            <div className="mock-button"></div>
          </div>

          <div className="wireframe-points right">
            <div className="point">
              <h4>{items[3].title}</h4>
              <p>{items[3].text}</p>
            </div>

            <div className="point">
              <h4>{items[4].title}</h4>
              <p>{items[4].text}</p>
            </div>

            <div className="point">
              <h4>{items[5].title}</h4>
              <p>{items[5].text}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}