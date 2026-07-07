export default function ChecklistResources() {
  const resources = [
    {
      id: 1,
      icon: "📋",
      title: "Complete Conference Marketing Checklist",
      description:
        "The definitive conference marketing checklist — 150+ action items organized by timeline, channel, and priority.",
      items: [
        "12 Months Strategy Planning",
        "Content Marketing Launch",
        "Paid Advertising Launch",
        "Event Week Execution",
        "Post Event Follow-up",
      ],
      button: "Download Checklist",
      featured: false,
    },
    {
      id: 2,
      icon: "🚀",
      title: "Conference Website SEO Checklist",
      description:
        "A technical and content SEO checklist specifically for conference and event websites.",
      items: [
        "Technical SEO",
        "On-Page SEO",
        "Schema Markup",
        "Local SEO",
        "Link Building",
      ],
      button: "Get SEO Checklist",
      featured: true,
    },
    {
      id: 3,
      icon: "✉️",
      title: "Email Deliverability Checklist",
      description:
        "A pre-send checklist ensuring your conference emails reach inboxes rather than spam folders.",
      items: [
        "SPF & DKIM Setup",
        "List Hygiene",
        "Spam Prevention",
        "Email Testing",
        "Inbox Optimization",
      ],
      button: "Download Guide",
      featured: false,
    },
  ];

  return (
    <section className="resources-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="resource-badge">
            Event Planning Resources
          </span>

          <h2 className="display-5 fw-bold mt-3">
            Conference Marketing Checklists
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Practical resources, templates, and frameworks designed to help
            conference organizers increase registrations and event attendance.
          </p>
        </div>

        <div className="row g-4">

          {resources.map((resource) => (
            <div className="col-lg-4" key={resource.id}>
              <div
                className={`resource-card h-100 ${
                  resource.featured ? "featured-card" : ""
                }`}
              >
                {resource.featured && (
                  <span className="featured-badge">
                    Most Popular
                  </span>
                )}

                <div className="resource-icon">
                  {resource.icon}
                </div>

                <h3 className="h4 fw-bold mb-3">
                  {resource.title}
                </h3>

                <p className="text-muted">
                  {resource.description}
                </p>

                <ul className="list-unstyled mt-4">
                  {resource.items.map((item, index) => (
                    <li key={index} className="mb-2">
                      ✓ {item}
                    </li>
                  ))}
                </ul>

                <button className="btn btn-primary mt-4">
                  {resource.button}
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}