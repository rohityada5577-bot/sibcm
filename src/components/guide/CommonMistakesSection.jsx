export default function CommonMistakesSection() {
  const mistakes = [
    "Starting Too Late",
    "Relying on a Single Channel",
    "Generic Messaging",
    "Ignoring Mobile",
    "No Retargeting",
    "Stopping Promotion Too Early"
  ];

  return (
    <section className="mistakes-section py-5">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Common Mistakes
          </h2>
        </div>

        <div className="row g-4">

          {mistakes.map((item, index) => (
            <div className="col-lg-4" key={index}>

              <div className="mistake-card">

                <span className="mistake-number">
                  0{index + 1}
                </span>

                <h4>{item}</h4>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}