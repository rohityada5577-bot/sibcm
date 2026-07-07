export default function BlogHeroSection() {
  return (
    <section className="blog-hero">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-7">

            <span className="blog-label">
              Conference Marketing Blog & Insights
            </span>

            <h1 className="blog-title">
              Expert Strategies, Data-Backed Insights &
              Actionable Event Marketing Tactics
            </h1>

            <p className="blog-desc">
              For conference organizers who want to grow attendance,
              increase registrations, and build events their industry
              talks about.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary-custom">
                Explore Articles
              </button>

              <button className="btn-outline-custom">
                Latest Insights
              </button>
            </div>

          </div>

          <div className="col-lg-5">

            <div className="featured-card">

              <span className="featured-tag">
                Featured Trend
              </span>

              <h3>
                AI-Assisted Personalization
              </h3>

              <p>
                Automated email and ad personalization at scale is
                transforming conference registrations.
              </p>

              <div className="trend-stats">

                <div>
                  <strong>2025</strong>
                  <span>Trend</span>
                </div>

                <div>
                  <strong>+42%</strong>
                  <span>Engagement</span>
                </div>

                <div>
                  <strong>ROI</strong>
                  <span>Growth</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Trending Topics */}

        <div className="trending-topics">

          <div className="topic-pill">
            AI Personalization
          </div>

          <div className="topic-pill">
            Short Form Video
          </div>

          <div className="topic-pill">
            Google AI Search
          </div>

          <div className="topic-pill">
            Community Growth
          </div>

          <div className="topic-pill">
            Hybrid Events
          </div>

        </div>

      </div>

    </section>
  );
}