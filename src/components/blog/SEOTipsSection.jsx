export default function SEOTipsSection() {
  const tips = [
    {
      number: "01",
      title: "Event Schema Markup",
      description:
        "Implement Event schema markup on your conference page to qualify for Google's event-specific search features.",
    },
    {
      number: "02",
      title: "Speaker Biography Pages",
      description:
        "Create dedicated speaker biography pages for every confirmed speaker to attract organic traffic.",
    },
    {
      number: "03",
      title: "Attendee Intent Content",
      description:
        "Publish a comprehensive 'What to Expect at [Conference Name]' guide targeting attendee-intent searches.",
    },
    {
      number: "04",
      title: "Speaker Backlinks",
      description:
        "Ask every confirmed speaker to link to your event website from their biography or speaking page.",
    },
    {
      number: "05",
      title: "Long-Tail Keywords",
      description:
        "Target low-competition keywords like '[industry] conference [city] [year]' for faster rankings.",
    },
  ];

  return (
    <section className="seo-command-center py-5">

      <div className="container">

        <div className="text-center mb-5">

          <span className="seo-badge">
            SEO Growth Framework
          </span>

          <h2 className="display-4 fw-bold text-white mt-3">
            SEO Tips For Conferences
          </h2>

          <p className="text-light opacity-75 mx-auto" style={{maxWidth:"750px"}}>
            The highest-impact SEO actions conference organizers can
            implement right now to increase organic visibility and registrations.
          </p>

        </div>

        <div className="row g-4">

          {tips.map((tip, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="seo-card">

                <span className="seo-number">
                  {tip.number}
                </span>

                <h4>{tip.title}</h4>

                <p>{tip.description}</p>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}