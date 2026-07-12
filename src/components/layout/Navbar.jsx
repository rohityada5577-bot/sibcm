

"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
        className="navbar navbar-expand-xl navbar-light bg-white shadow-sm sticky-top"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">

          <Link href="/" className="navbar-brand">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/cmwlogo.webp"
                alt="CMW Logo"
                width={170}
                height={50}
                priority
              />
            </motion.div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNavbar"
          >
            <ul className="navbar-nav align-items-xl-center">

              <li className="nav-item">
                <Link href="/" className="nav-link nav-link-custom">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/about-us" className="nav-link nav-link-custom">
                  About Us
                </Link>
              </li>

              {/* SERVICES */}
              <li className="nav-item dropdown">
                <a
                  href="/services"
                  className="nav-link dropdown-toggle nav-link-custom"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>

                <ul className="dropdown-menu mega-dropdown">
                  {services.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="dropdown-item">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* INDUSTRIES */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle nav-link-custom"
                  data-bs-toggle="dropdown"
                >
                  Industries
                </a>

                <ul className="dropdown-menu mega-dropdown">
                  {industries.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="dropdown-item">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* RESOURCES */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle nav-link-custom"
                  data-bs-toggle="dropdown"
                >
                  Resources
                </a>

                <ul className="dropdown-menu mega-dropdown">
                  {resources.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="dropdown-item">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/contact" className="nav-link nav-link-custom">
                  Contact
                </Link>
              </li>

              <li className="nav-item ms-xl-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/get-quote"
                    className="btn nav-btn px-4"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </li>

            </ul>
          </div>
        </div>
      </motion.nav>

      <style jsx>{`
        .nav-link-custom {
          font-weight: 600;
          color: #111827 !important;
          margin: 0 10px;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #4f46e5 !important;
        }

        .nav-link-custom::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          left: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            #4f46e5,
            #06b6d4
          );
          transition: 0.3s;
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        .mega-dropdown {
          border: none;
          border-radius: 16px;
          min-width: 280px;
          padding: 10px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .dropdown-item {
          padding: 12px 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .dropdown-item:hover {
          background: #eef2ff;
          color: #4f46e5;
          transform: translateX(4px);
        }

        .nav-btn {
          background: linear-gradient(
            135deg,
            #4f46e5,
            #06b6d4
          );
          color: #fff;
          border-radius: 50px;
          font-weight: 600;
          border: none;
        }

        .nav-btn:hover {
          color: #fff;
        }

        @media (max-width: 1199px) {
          .navbar-nav {
            padding-top: 20px;
          }

          .nav-link-custom {
            margin: 5px 0;
          }

          .mega-dropdown {
            box-shadow: none;
            border: none;
            padding-left: 15px;
          }

          .nav-btn {
            width: 100%;
            margin-top: 15px;
          }
        }
      `}</style>
    </>
  );

  
}

