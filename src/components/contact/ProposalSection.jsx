import { proposalData } from "./data";
import "./contact.css";

export default function ProposalSection() {
  const {
    badge,
    title,
    description,
    requirements,
    footerTitle,
    footerText,
    buttonText,
  } = proposalData;

  return (
    <section className="proposalSection">
      <div className="proposalContainer">
        <span className="proposalBadge">
          {badge}
        </span>

        <h2 className="proposalTitle">
          {title}
        </h2>

        <p className="proposalDescription">
          {description}
        </p>

        <div className="proposalGrid">
          {requirements.map((item, index) => (
            <div
              className="proposalCard"
              key={index}
            >
              <span className="proposalNumber">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="proposalBanner">
          <div>
            <h3>{footerTitle}</h3>
            <p>{footerText}</p>
          </div>

          <a href="#contact-form">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}