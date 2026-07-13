import { contactSupportData } from "./data";
import "./contact.css";

export default function ContactSupport() {
  const {
    badge,
    title,
    note,
    officeHours,
    contactMethods,
    location,
    processSteps,
  } = contactSupportData;

  return (
    <section className="contactSupport">
      <div className="contactSupport__container">
        <span className="contactSupport__badge">
          {badge}
        </span>

        <h2 className="contactSupport__title">
          {title}
        </h2>

        <p className="contactSupport__note">
          {note}
        </p>

        <div className="contactSupport__top">
          <div className="infoBlock">
            <h3>{officeHours.title}</h3>

            <h4>{officeHours.hours}</h4>

            <p>{officeHours.text}</p>
          </div>

          <div className="infoBlock">
            <h3>Ways to Reach Us</h3>

            <ul>
              {contactMethods.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="infoBlock">
            <h3>{location.title}</h3>

            <p>{location.text}</p>
          </div>
        </div>

        <div className="journeySection">
          <h3>
            What Happens After You Contact Us?
          </h3>

          <div className="journeyTimeline">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="journeyStep"
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}