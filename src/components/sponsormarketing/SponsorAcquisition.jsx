
import   "./sponor.css";

export default function SponsorAcquisition() {
  return (
    <section className="sponsor-acquisition">
      <div className="container">
        <div className="sponsor-acquisition-wrapper">

          <div className="sponsor-left">
            <span className="section-tag">
              Sponsor Acquisition Strategy
            </span>

            <h2>How to Attract Conference Sponsors</h2>

            <p>
              Sponsors invest in conferences for one reason: access to your
              audience. Every sponsorship pitch and marketing effort should be
              built around demonstrating the quality, size, and relevance of
              your attendee base.
            </p>

            <div className="audience-box">
              <h4>Audience = Sponsor Value</h4>
              <p>
                The stronger your attendee profile, the easier it becomes to
                attract high-value sponsorship partnerships.
              </p>
            </div>
          </div>

          <div className="sponsor-right">

            <div className="strategy-item">
              <div className="strategy-number">01</div>

              <div className="strategy-content">
                <h3>Ideal Sponsor Profile</h3>
                <p>
                  We identify companies most likely to pay premium sponsorship
                  rates, including vendors, service providers, and solution
                  providers targeting the same professionals attending your
                  conference.
                </p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="strategy-number">02</div>

              <div className="strategy-content">
                <h3>Sponsor Research</h3>
                <p>
                  We build highly targeted sponsor lists by identifying
                  companies already advertising to your audience elsewhere,
                  proving they already have budget allocated for similar
                  opportunities.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}