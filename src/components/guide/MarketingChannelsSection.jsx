export default function MarketingChannelsSection() {
  const channels = [
    "SEO",
    "Email Marketing",
    "LinkedIn Ads",
    "Google Ads",
    "Content Marketing",
    "Social Media",
    "Facebook Ads",
    "Speaker Co-Marketing",
    "PR & Media"
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary">
            Marketing Channels
          </span>

          <h2 className="display-5 fw-bold mt-3">
            Marketing Channels Explained
          </h2>
        </div>

        <div className="row g-4">

          {channels.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="channel-card">
                <h4>{item}</h4>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}