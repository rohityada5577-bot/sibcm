"use client";

import Link from "next/link";

export default function Button({
  text,
  href = "#",
  variant = "primary",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`site-btn ${variant === "outline"
        ? "site-btn-outline"
        : "site-btn-primary"} ${className}`}
    >
      {text}
    </Link>
  );
}