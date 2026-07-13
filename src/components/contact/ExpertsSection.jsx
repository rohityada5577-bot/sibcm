import { expertsData } from "./data";
import "./contact.css";

export default function ExpertsSection() {
  const {
    badge,
    title,
    description,
    topics,
    buttonText,
  } = expertsData;

  return (
    <section className="expertsSection">
      <div className="expertsGlow"></div>

      <div className="expertsContainer">
        <div className="expertsContent">
          <span className="expertsBadge">
            {badge}
          </span>

          <h2 className="expertsTitle">
            {title}
          </h2>

          <p className="expertsDescription">
            {description}
          </p>

          <a
            href="#contact-form"
            className="expertsButton"
          >
            {buttonText}
          </a>
        </div>

        <div className="expertsConversation">
          {topics.map((topic, index) => (
            <div
              className={`chatCard ${
                index % 2 === 0
                  ? "leftCard"
                  : "rightCard"
              }`}
              key={index}
            >
              <div className="chatIcon">
                💬
              </div>

              <p>{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}