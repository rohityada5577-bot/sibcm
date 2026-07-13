

"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "./nav.css";

export default function Navbar() {
  useEffect(() => {
    import("bootstrap").catch(() => {});
  }, []);

   const services = [
    { name: "Conference Promotion", href: "/conference-promotion" },
    { name: "Conference SEO", href: "/conference-seo" },
    { name: "PPC Advertising", href: "/ppc-advertising" },
    { name: "Social Media Marketing", href: "/social-media-marketing" },
    { name: "Email Marketing", href: "/email-marketing" },
    { name: "Content Marketing", href: "/content-marketing" },
    { name: "Event Website Design", href: "/event-website-design" },
    { name: "Registration Marketing", href: "/registration-marketing" },
    { name: "Speaker Marketing", href: "/speaker-marketing" },
    { name: "Sponsor Marketing", href: "/sponsor-marketing" },
    { name: "Virtual Events", href: "/virtual-events" },
  ];

  const industries = [
    { name: "Healthcare", href: "/healthcare" },
    { name: "Technology", href: "/technology" },
    { name: "Finance", href: "/finance" },
    { name: "Education", href: "/education" },
    { name: "Manufacturing", href: "/manufacturing" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Guide", href: "/guide" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQs", href: "/faqs" },
  ];

return (
  <>
    <motion.nav
      className="cmw-header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cmw-header-wrap">
        <Link href="/" className="cmw-brand">
          <Image
            src="/cmwlogo.webp"
            alt="CMW Logo"
            width={180}
            height={60}
            priority
          />
        </Link>

        <button
          className="cmw-toggle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#cmwSidebar"
          aria-controls="cmwSidebar"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>

    <div
      className="offcanvas offcanvas-end cmw-sidebar"
      tabIndex="-1"
      id="cmwSidebar"
      aria-labelledby="cmwSidebarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cmwSidebarLabel">
          Conference Marketing
        </h5>

        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body">
        <ul className="cmw-menu-list">

          <li>
            <Link href="/" className="cmw-main-link">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about-us" className="cmw-main-link">
              About Us
            </Link>
          </li>

          {/* SERVICES */}

          <li>
            <div className="accordion cmw-accordion" id="serviceMenu">
              <div className="accordion-item">

                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#serviceCollapse"
                  >
                    Services
                  </button>
                </h2>

                <div
                  id="serviceCollapse"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    {services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="cmw-sub-link"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </li>

          {/* INDUSTRIES */}

         <li>
          <Link
            href="/industries"
            className="cmw-main-link"
          >
            Industries
          </Link>
        </li>

          {/* RESOURCES */}

          <li>
            <div className="accordion cmw-accordion" id="resourceMenu">
              <div className="accordion-item">

                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#resourceCollapse"
                  >
                    Resources
                  </button>
                </h2>

                <div
                  id="resourceCollapse"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    {resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="cmw-sub-link"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </li>

          <li>
            <Link href="/contact" className="cmw-main-link">
              Contact
            </Link>
          </li>

        </ul>

        <Link
          href="/get-quote"
          className="cmw-quote-btn"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  </>
);
  
}

