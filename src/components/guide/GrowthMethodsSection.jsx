export default function GrowthMethodsSection() {
  const methods = [
    "Speaker Email Campaigns",
    "Referral Programs",
    "Group Registrations",
    "Association Discounts",
    "Content Upgrades",
    "LinkedIn Events",
    "Countdown Campaigns"
  ];

  return (
    <section className="growth-section py-5">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white">
            Proven Growth Methods
          </h2>
        </div>

        <div className="row g-4">

          {methods.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="growth-card">

                <div className="step-circle">
                  {index + 1}
                </div>

                <h5>{item}</h5>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}