"use client";

import { useEffect, useState } from "react";

export default function SiboAssistant() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setShow(false);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setShow(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sibo-demo ${show ? "active" : ""}`}>
      <img
        src="/sibo.png"
        alt="SIBO"

     
      />

      {show && (
        <div className="sibo-bubble">
          Need help?
        </div>
      )}
    </div>
  );
}