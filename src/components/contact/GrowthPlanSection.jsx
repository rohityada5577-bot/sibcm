import { growthPlanData } from "./data";
import "./contact.css";

export default function GrowthPlanSection() {
  const {
    badge,
    title,
    description,
    secondaryText,
    points,
    buttonText,
  } = growthPlanData;

  return (
    <section className="growthHub">
      <div className="growthHub__container">
        <span className="growthHub__badge">
          {badge}
        </span>

        <h2 className="growthHub__title">
          {title}
        </h2>

        <p className="growthHub__description">
          {description}
        </p>

        <p className="growthHub__secondary">
          {secondaryText}
        </p>

        <div className="growthHub__diagram">
          <div className="growthHub__center">
            <h3>Sustainable Conference Growth</h3>
          </div>

          {points.map((item, index) => (
            <div
              key={index}
              className={`growthHub__node node-${index + 1}`}
            >
              {item}
            </div>
          ))}
        </div>

        <a
          href="#contact-form"
          className="growthHub__button"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}