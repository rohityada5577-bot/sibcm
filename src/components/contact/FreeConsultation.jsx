import { freeConsultationData } from "./data";
import "./contact.css";

export default function FreeConsultation() {
  const {
    badge,
    title,
    description,
    trustPoints,
    consultationItems,
    footerText,
    sessionLabel,
    ctaText,
  } = freeConsultationData;

  return (
    <section className="consultation">
      <div className="consultation__glow consultation__glow--one"></div>
      <div className="consultation__glow consultation__glow--two"></div>

      <div className="consultation__container">
        <div className="consultation__grid">
          {/* Left Side */}
          <div className="consultation__content">
            <span className="consultation__badge">
              {badge}
            </span>

            <h2 className="consultation__title">
              {title}
            </h2>

            <p className="consultation__description">
              {description}
            </p>

            <div className="consultation__trust">
              {trustPoints.map((item, index) => (
                <div
                  className="consultation__trustItem"
                  key={index}
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <a
              href="#contact-form"
              className="consultation__button"
            >
              {ctaText}
            </a>
          </div>

          {/* Right Side */}
          <div className="consultation__card">
            <div className="consultation__session">
              ⏱ {sessionLabel}
            </div>

            <div className="consultation__list">
              {consultationItems.map((item, index) => (
                <div
                  className="consultation__listItem"
                  key={index}
                >
                  <span className="consultation__icon">
                    ✓
                  </span>

                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="consultation__footer">
          <p>{footerText}</p>
        </div>
      </div>
    </section>
  );
}