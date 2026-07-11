"use client";

import { registrationMarketingData } from "./data";

export default function RegistrationMarketingSection() {
  const {
    drivingSales,
    marketingImportance,
  } = registrationMarketingData;

  return (
    <section className="registration-growth-section">
      <div className="container">

        <div className="row g-4 align-items-stretch">

          <div className="col-lg-6">
            <div className="growth-panel sales-panel">

              <div className="panel-tag">
                TICKET SALES GROWTH
              </div>

              <h2>{drivingSales.title}</h2>

              <p>{drivingSales.description}</p>

            </div>
          </div>

          <div className="col-lg-6">
            <div className="growth-panel marketing-panel">

              <div className="panel-tag">
                REGISTRATION STRATEGY
              </div>

              <h2>{marketingImportance.title}</h2>

              <p>{marketingImportance.description}</p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}