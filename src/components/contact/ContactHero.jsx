"use client";

import { useEffect, useState } from "react";
import { contactHeroData } from "./data";
import "./contact.css";

export default function ContactHero() {
  const { badge, title, typedWords, description, stats } =
    contactHeroData;

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typedWords[wordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % typedWords.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, typedWords]);

  return (
    <section className="contactHero">
      <div className="contactHero__bg"></div>

      <div className="contactHero__blur contactHero__blur--1"></div>
      <div className="contactHero__blur contactHero__blur--2"></div>
      <div className="contactHero__blur contactHero__blur--3"></div>

      <div className="contactHero__container">
        <span className="contactHero__badge">
          {badge}
        </span>

        <h1 className="contactHero__title">
          {title}
        </h1>

        <div className="contactHero__typing">
          {text}
          <span className="cursor">|</span>
        </div>

        <p className="contactHero__description">
          {description}
        </p>

        <div className="contactHero__stats">
          {stats.map((item, index) => (
            <div className="contactHero__card" key={index}>
              <h3>{item.number}</h3>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="contactHero__buttons">
          <a href="#contact-form" className="primaryBtn">
            Schedule a Call
          </a>

          <a href="#contact-form" className="secondaryBtn">
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}