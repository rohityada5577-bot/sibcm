import   "./virtual.css";

const webinarPoints = [
  "SEO-optimized webinar landing pages targeting topic-specific searches",
  "LinkedIn Ads campaigns targeting professionals interested in your session topics",
  "Email invitation sequences with compelling speaker and topic hooks",
  "Calendar save-the-date campaigns that increase live attendance versus on-demand viewing",
  "Reminder sequences: 1-week, 1-day, 1-hour, and 5-minute reminders that dramatically increase live attendance rates",
  "Post-webinar follow-up campaigns converting on-demand viewers into full conference registrants",
];

export default function WebinarStrategy() {
  return (
    <section className="webinar-section">
      <div className="container">
        <div className="webinar-content">
          <div className="webinar-left">
            <span className="webinar-badge">Webinar Growth</span>

            <h2>
              Webinar <span>Marketing Strategy</span>
            </h2>

            <p>
              If your virtual conference includes webinar-format sessions, our
              webinar marketing expertise maximizes registration and live
              attendance for each session.
            </p>
          </div>

          <div className="webinar-right">
            {webinarPoints.map((item, index) => (
              <div key={index} className="webinar-card">
                <div className="webinar-icon">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}