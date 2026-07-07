
import   "./virtual.css";



const participationData = [
  {
    number: "01",
    title: "Pre-Event Community Building",
    description:
      "LinkedIn groups, virtual networking sessions, and interactive pre-event content.",
  },
  {
    number: "02",
    title: "Gamification Campaigns",
    description:
      "Contests, incentives, rewards, and engagement activities that drive attendance.",
  },
  {
    number: "03",
    title: "Speaker-Driven Attendance",
    description:
      "Helping speakers promote the event to their own audiences and communities.",
  },
  {
    number: "04",
    title: "Interactive Session Design",
    description:
      "Polls, Q&A sessions, breakout rooms, and networking opportunities.",
  },
];

export default function OnlineEventParticipation() {
  return (
    <section className="event-participation">
      <div className="container">
        <div className="section-heading">
          <span>Audience Engagement</span>
          <h2>Increasing Online Event Participation</h2>
          <p>
            Registration is only half the battle. We help turn registrations
            into active attendees and engaged participants.
          </p>
        </div>

        <div className="participation-timeline">
          {participationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-number">{item.number}</div>

              <div className="timeline-content">
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