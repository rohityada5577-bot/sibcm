export default function ConferenceToolsSection() {
  return (
    <section className="conference-tools py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="tools-badge">
            Marketing Tools & Templates
          </span>

          <h2 className="display-5 fw-bold mt-3">
            Resources Built for Conference Growth
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Interactive tools, benchmark reports, and planning templates
            designed specifically for conference marketers.
          </p>
        </div>

        <div className="tools-wrapper">

          {/* Tool 8 */}
          <div className="tool-item">
            <div className="tool-number">08</div>

            <div className="tool-content">
              <h3>Conference Marketing Budget Calculator</h3>

              <p>
                An interactive budget planning tool that calculates recommended
                channel allocations based on your event size, ticket price,
                registration targets, and timeline.
              </p>

              <div className="tool-tag">
                Interactive Calculator
              </div>
            </div>
          </div>

          {/* Tool 9 */}
          <div className="tool-item reverse">
            <div className="tool-number">09</div>

            <div className="tool-content">
              <h3>Registration Conversion Rate Benchmark Report</h3>

              <p>
                Industry benchmarks for conference marketing performance across
                website conversion rates, email engagement, cost-per-registration,
                and registration velocity trends.
              </p>

              <div className="tool-tag">
                Industry Benchmark Report
              </div>
            </div>
          </div>

          {/* Tool 10 */}
          <div className="tool-item">
            <div className="tool-number">10</div>

            <div className="tool-content">
              <h3>Conference Attendee Persona Template</h3>

              <p>
                A structured template for documenting your ideal attendee
                profile including motivations, objections, content preferences,
                and behavioral patterns.
              </p>

              <div className="tool-tag">
                Planning Template
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}