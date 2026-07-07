export default function First1000AttendeesSection() {
  const strategies = [
    {
      number: "01",
      title: "Start with Warm Audiences",
      icon: "🔥",
      desc: "Your first registrations will come from people who already know and trust you."
    },
    {
      number: "02",
      title: "Leverage Association Partnerships",
      icon: "🤝",
      desc: "Partner with professional associations and access highly targeted audiences."
    },
    {
      number: "03",
      title: "Invest in LinkedIn Ads Early",
      icon: "🚀",
      desc: "Reach your ideal attendee profile before your conference has brand recognition."
    },
    {
      number: "04",
      title: "Use Scarcity Honestly",
      icon: "⏳",
      desc: "Create urgency with genuine early-bird pricing and limited seat availability."
    },
    {
      number: "05",
      title: "Build in Public",
      icon: "📢",
      desc: "Share speaker updates, venue reveals, and behind-the-scenes content."
    }
  ];

  return (
    <section className="attendees-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="growth-badge">
            Conference Growth Blueprint
          </span>

          <h2 className="display-4 fw-bold text-white mt-3">
            Getting Your First 1000 Attendees
          </h2>

          <p className="text-light opacity-75 mx-auto" style={{maxWidth:"750px"}}>
            An accelerated playbook designed for new conferences looking to
            build awareness, drive registrations, and reach their first
            1,000 attendees.
          </p>
        </div>

        <div className="row g-4">

          {strategies.map((item,index) => (
            <div className="col-lg-6" key={index}>
              <div className="growth-card">

                <div className="d-flex align-items-center justify-content-between mb-4">
                  <span className="growth-number">
                    {item.number}
                  </span>

                  <div className="growth-icon">
                    {item.icon}
                  </div>
                </div>

                <h3 className="h4 text-white fw-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-light opacity-75 mb-0">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

        <div className="attendee-cta mt-5 text-center">
          <h3 className="text-white mb-3">
            Reach Your First 1000 Registrations Faster
          </h3>

          <p className="text-light opacity-75 mb-4">
            Combine warm audiences, partnerships, LinkedIn advertising,
            scarcity, and public storytelling into a single growth system.
          </p>

          <button className="btn btn-light btn-lg px-4">
            Build Your Growth Plan
          </button>
        </div>

      </div>
    </section>
  );
}