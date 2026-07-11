"use client";

import { contentTrustData } from "./data";

export default function ContentTrustSection() {
  return (
  <section className="trust-content-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4">
        <div className="trust-sticky-title">
          <span>BUILDING TRUST</span>

          <h2>
            How Content <br />
            Builds Trust
          </h2>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="trust-content-box">
          <p>
            Professional attendees are making a significant commitment when they
            register for a conference — time, money, and opportunity cost.
            Content marketing reduces the perceived risk of that commitment by
            demonstrating, before registration, that your conference delivers
            genuine value.
          </p>

          <p>
            When a potential attendee reads an insightful article from your
            conference blog, watches a compelling speaker interview, and
            downloads a valuable industry report — all before ever seeing a
            registration page — they arrive at your event website already
            trusting your brand.
          </p>

          <div className="trust-highlight">
            That trust converts to registrations at dramatically higher rates
            than cold advertising traffic.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="trust-bg-text">TRUST</div>
</section>
  );
}