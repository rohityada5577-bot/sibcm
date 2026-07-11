"use client";

import { conversionRateData } from "./data";

export default function ConversionRateSection() {
  const {
    badge,
    title,
    content,
    formula
  } = conversionRateData;

  return (
    <section className="conversion-formula-section">
      <div className="container">

        <div className="formula-header text-center">
          <span>{badge}</span>
          <h2>{title}</h2>
        </div>

        <div className="formula-box">
          <div className="formula-item">
            {formula[0]}
          </div>

          <div className="formula-symbol">×</div>

          <div className="formula-item">
            {formula[1]}
          </div>

          <div className="formula-symbol">=</div>

          <div className="formula-item result">
            {formula[2]}
          </div>
        </div>

        <div className="formula-content">
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

      </div>
    </section>
  );
}