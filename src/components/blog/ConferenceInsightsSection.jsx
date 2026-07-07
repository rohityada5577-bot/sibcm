export default function ConferenceInsightsSection() {
  const checklist = [
    "Start marketing 9–12 months before the event",
    "Build your email list before announcing",
    "Book speakers who actively promote",
    "Use genuine early-bird urgency",
    "Personalize every communication",
    "Use retargeting ads",
    "Create FOMO content"
  ];

  const topics = [
    "Conference SEO",
    "LinkedIn Marketing",
    "Email Automation",
    "Google Ads",
    "Speaker Marketing",
    "Conversion Optimization",
    "Pricing Strategy",
    "Hybrid Events"
  ];

  return (
    <section className="insights-hub py-5">

      <div className="container">

        <div className="text-center mb-5">
          <span className="hub-badge">
            Conference Growth Hub
          </span>

          <h2 className="display-4 fw-bold text-white mt-3">
            Insights, Trends & Growth Strategies
          </h2>
        </div>

        <div className="row g-4">

          {/* Attendance Checklist */}

          <div className="col-lg-5">

            <div className="growth-checklist-card">

              <h3>
                How to Increase Attendance
              </h3>

              <ul>

                {checklist.map((item,index)=>(
                  <li key={index}>
                    ✓ {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>

          {/* Topics Grid */}

          <div className="col-lg-7">

            <div className="row g-3">

              {topics.map((topic,index)=>(
                <div className="col-md-6" key={index}>
                  <div className="topic-box">
                    {topic}
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* News Block */}

          <div className="col-lg-6">

            <div className="news-card">

              <span className="news-tag">
                Industry News
              </span>

              <h3>
                Latest Event Marketing Updates
              </h3>

              <p>
                Google Event Search, LinkedIn Advertising,
                Email Deliverability, Registration Platforms,
                Conversion Tracking & Event Technology.
              </p>

            </div>

          </div>

          {/* Expert Block */}

          <div className="col-lg-6">

            <div className="expert-card">

              <span className="expert-tag">
                Expert Advice
              </span>

              <h3>
                Tested Against Real Registration Data
              </h3>

              <p>
                Every strategy is based on real conference campaigns,
                real attendee growth, and real registration performance.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}