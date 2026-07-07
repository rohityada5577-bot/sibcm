export default function ResourceLibrarySection() {
  return (
    <section className="resource-library py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="library-badge">Knowledge Hub</span>

          <h2 className="display-5 fw-bold mt-3">
            Guides, Frameworks & Growth Resources
          </h2>
        </div>

        {/* Guides */}
        <div className="mb-5">
          <h3 className="section-title mb-4">
            Guides & PDFs
          </h3>

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="guide-card">
                <span className="guide-number">11</span>
                <h4>The Complete Guide to Conference Email Marketing</h4>
                <p>
                  A 30-page guide covering list building, segmentation,
                  copywriting, deliverability, A/B testing and post-event campaigns.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="guide-card">
                <span className="guide-number">12</span>
                <h4>LinkedIn Marketing for B2B Conferences</h4>
                <p>
                  Learn LinkedIn content strategy, ads, speaker amplification,
                  event pages and newsletter promotion.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="guide-card">
                <span className="guide-number">13</span>
                <h4>SEO for Conference Websites</h4>
                <p>
                  Covers keyword research, technical SEO, schema markup,
                  link building and advanced optimization.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Strategy Resources */}
        <div className="mb-5">

          <h3 className="section-title mb-4">
            Growth Strategy Resources
          </h3>

          <div className="row g-4">

            <div className="col-lg-6">
              <div className="strategy-card">
                <h4>Conference Growth Strategy Workbook</h4>
                <p>
                  Build a complete growth strategy covering audience definition,
                  competitive analysis, budget planning and KPIs.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="strategy-card">
                <h4>Speaker Co-Marketing Program Builder</h4>
                <p>
                  Step-by-step system for building speaker amplification programs,
                  content distribution and performance tracking.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Steps */}
        <div className="usage-section">

          <h3 className="text-center fw-bold mb-5">
            How To Use These Resources
          </h3>

          <div className="row g-4">

            {[
              "Download the Conference Marketing Checklist",
              "Complete the Attendee Persona Template",
              "Use the Budget Calculator",
              "Customize the Email Templates",
              "Distribute the Speaker Marketing Kit",
              "Run the SEO Checklist"
            ].map((step, index) => (
              <div className="col-lg-4" key={index}>
                <div className="step-card">
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="cta-resource text-center mt-5">

          <h3>
            Need help implementing any of these frameworks?
          </h3>

          <p>
            Our team offers free 30-minute strategy calls to help conference
            organizers apply these resources to their specific event.
          </p>

          <button className="btn btn-light btn-lg">
            Book Free Strategy Call
          </button>

        </div>

      </div>
    </section>
  );
}