"use client";

import { useState } from "react";
import "./common.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does a conference marketing agency do?",
      answer:
        "A conference marketing agency handles end-to-end promotion for conferences, summits, and events. This includes SEO to rank your event pages on Google, paid advertising campaigns on Google and LinkedIn, email marketing sequences, social media management, speaker co-marketing, and content strategy — all coordinated to drive registrations and grow event attendance before, during, and after the event."
    },
    {
      question: "How do conferences get more attendees?",
      answer:
        "The most effective way to grow conference attendance is through a multi-channel marketing approach that starts 6–12 months before the event. Proven tactics include: ranking event pages in Google search for high-intent keywords, running targeted paid ad campaigns, deploying personalized email sequences, leveraging speaker networks for co-promotion, creating FOMO through social media content, and offering early-bird registration pricing. Personalization is particularly powerful — 72% of attendees say they are more likely to register when invitations feel tailored to them.",
    
    },
    {
      question: "How to increase event registrations fast?",
      answer:
        "To increase registrations quickly, the most effective levers are paid advertising (Google Ads and LinkedIn Ads can start driving registrations within 24–48 hours), urgency-driven email campaigns to warm leads, retargeting campaigns for website visitors who have not yet registered, and personalized outreach to past attendees. A combination of these tactics, properly sequenced, can produce a significant registration spike within 2–4 weeks."
    },
    {
      question: "How much does conference marketing cost?",
      answer:
        "Conference marketing investment varies widely based on event size, geography, target audience, and timeline. Small conferences (under 500 attendees) typically invest $5,000–$15,000 in marketing. Mid-size conferences (500–2,000 attendees) often invest $15,000–$40,000. Large conferences and summits may invest $50,000–$200,000+. Marketing agencies typically charge either a monthly retainer, a project fee, or a performance-based model tied to registration outcomes."
    },
     {
      question: "How early should I start marketing my conference?",
      answer:
        "The ideal timeline is 9–12 months before the event for SEO and content strategy, 6 months for brand awareness and list building, 3–4 months for speaker announcements and early-bird campaigns, and 6–8 weeks for the final registration push with paid ads and urgency emails. The earlier you start, the more organic momentum and the lower your overall cost-per-registration will be."
    },
      {
      question: "Which industries benefit most from conference marketing agencies?",
      answer:
        "Technology, healthcare, finance, legal, HR, education, and professional associations consistently see the strongest ROI from specialized conference marketing. B2B conferences in particular — where decision-makers need to justify attendance to their employer — benefit enormously from precisely targeted professional messaging and ROI-focused event positioning."
    }
  ];

  return (
    <section className="faq-section">

      <div className="container">

        <div className="row g-5">

          <div className="col-lg-5">
            <div className="faq-sticky">

              <span className="faq-badge">
                 Frequently Asked Questions
              </span>

              <h2 className="faq-title">
                Questions &
                <span> Answers</span>
              </h2>

              <p className="faq-subtitle">
                Everything you need to know about conference marketing,
                registrations and attendee growth.
              </p>

            </div>
          </div>

          <div className="col-lg-7">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-card ${
                  openIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="faq-button"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`faq-content ${
                    openIndex === index ? "show" : ""
                  }`}
                >
                  <p>{faq.answer}</p>

                  {faq.highlight && (
                    <div className="faq-highlight">
                      {faq.highlight}
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}