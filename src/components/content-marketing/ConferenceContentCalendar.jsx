"use client";

import { contentCalendarData } from "./data";

export default function ConferenceContentCalendar() {
  const { badge, title, highlightTitle, description, timeline } =
    contentCalendarData;

  return (
    <section className="conference-calendar-section">
      <div className="container">
        <div className="calendar-header text-center">
          <span>{badge}</span>

          <h2>
            {title} <strong>{highlightTitle}</strong>
          </h2>

          <p>{description}</p>
        </div>

        <div className="calendar-roadmap">
          <div className="roadmap-line"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className="roadmap-item"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="roadmap-dot"></div>

              <div className="roadmap-card">
                <span>{item.period}</span>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}