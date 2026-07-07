export default function VirtualPromotionMatrix() {
  return (
    <section className="virtual-events-section py-5">

      <div className="container">

        <div className="text-center mb-5">

          <span className="virtual-badge">
            Virtual & Hybrid Event Marketing
          </span>

          <h2 className="virtual-title">
            Promoting Virtual and Hybrid Events
          </h2>

          <p className="virtual-subtitle">
            Virtual conference promotion requires a different strategy than
            in-person event marketing.
          </p>

        </div>

        <div className="row align-items-center g-4">

          {/* Left Card */}

          <div className="col-lg-4">

            <div className="virtual-feature-card">

              <div className="feature-icon">
                🎯
              </div>

              <h4>Value Articulation</h4>

              <p>
                clearly communicating what attendees gain from attending
                virtually versus watching a recording — live Q&A,
                networking sessions, exclusive content
              </p>

            </div>

          </div>

          {/* Center Dashboard */}

          <div className="col-lg-4">

            <div className="virtual-dashboard">

              <div className="pulse-ring"></div>

              <div className="dashboard-core">

                <h3>Hybrid Event</h3>

                <span>Global Reach</span>

              </div>

            </div>

          </div>

          {/* Right Card */}

          <div className="col-lg-4">

            <div className="virtual-feature-card">

              <div className="feature-icon">
                🌍
              </div>

              <h4>Global Audience Targeting</h4>

              <p>
                deploying paid and organic campaigns across time zones
                and geographies
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Wide Card */}

        <div className="row mt-5">

          <div className="col-lg-10 mx-auto">

            <div className="commitment-card">

              <div className="feature-icon mb-3">
                🚀
              </div>

              <h4>Commitment Barriers</h4>

              <p>
                using registration confirmation sequences and pre-event
                engagement to maintain commitment from online registrants
                who are more prone to no-show than physical event attendees
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}