
import   "./common.css";
export default function SponsorshipHero() {
  return (
    <section className="sponsor-hero">
      <div className="container">
        <div className="sponsor-wrapper">
          <div className="sponsor-content">
            <span className="hero-badge">
              Conference Sponsorship Marketing
            </span>

            <h1>
              Increase Conference Revenue With
              <span> High-Value Sponsors</span>
            </h1>

            <p>
              Sponsorships are a critical revenue stream for conferences. We
              help event organizers identify, pitch, and secure corporate
              sponsors who see genuine value in your audience, brand reach, and
              event positioning.
            </p>

            <div className="hero-btns">
              <a href="#" className="btn-primary">
                Get Sponsorship Strategy
              </a>

              <a href="#" className="btn-outline">
                View Case Studies
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>500+</h3>
                <span>Sponsors Connected</span>
              </div>

              <div>
                <h3>95%</h3>
                <span>Retention Rate</span>
              </div>

              <div>
                <h3>₹10Cr+</h3>
                <span>Revenue Generated</span>
              </div>
            </div>
          </div>

          <div className="sponsor-visual">
            <div className="main-card">
              <h4>Sponsorship Growth</h4>

              <div className="growth-value">+185%</div>

              <p>Average sponsorship revenue increase</p>
            </div>

            <div className="floating-card top">
              <span>🎯 Target Sponsors</span>
            </div>

            <div className="floating-card middle">
              <span>🤝 Partnership Deals</span>
            </div>

            <div className="floating-card bottom">
              <span>📈 Revenue Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}