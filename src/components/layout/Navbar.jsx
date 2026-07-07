// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// // import Button from "../common/Button";
// import Button from "@/components/common/Button";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="navbar bg-white sticky-top py-2 border-bottom border-light">
//         <div className="container-fluid px-lg-5 px-3 d-flex align-items-center justify-content-between">
          
//           {/* Brand Logo Image Integration */}
//           <Link href="/" className="navbar-brand d-flex align-items-center m-0">
//             <Image 
//               src="/cmwlogo.webp" 
//               alt="CMW Logo" 
//               width={110} 
//               height={55} 
//               priority
//               className="d-inline-block img-fluid"
//               style={{ objectFit: "contain" }}
//             />
//           </Link>

//           {/* Desktop Right Side (Hidden on Mobile) */}
//           <div className="d-none d-md-flex align-items-center gap-4" style={{ fontSize: "15px" }}>
//             <Link href="/about-us" className="text-dark text-decoration-none fw-medium hover-indigo">
//               About
//             </Link>
//             <Link href="/" className="text-dark text-decoration-none fw-medium hover-indigo">
//               Home
//             </Link>
//            <Button
//            text="Get started"
           
//            />
//           </div>

//           {/* Mobile Hamburger Trigger (Hidden on Desktop) */}
//           <button 
//             className="d-md-none border-0 bg-transparent p-2 d-flex flex-column gap-1.5 justify-content-center align-items-center"
//             style={{ width: "32px", height: "32px", cursor: "pointer" }}
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             <span className="burger-bar" style={{ transform: isOpen ? "rotate(45deg) translateY(6px)" : "none" }}></span>
//             <span className="burger-bar" style={{ opacity: isOpen ? 0 : 1 }}></span>
//             <span className="burger-bar" style={{ transform: isOpen ? "rotate(-45deg) translateY(-6px)" : "none" }}></span>
//           </button>

//         </div>
//       </nav>

//       {/* Mobile Drawer Overlay Panel */}
//       <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
//         <div className="p-4 d-flex flex-column h-100 justify-content-between">
//           <div className="d-flex flex-column gap-4 pt-5">
//             <Link 
//               href="/about-us" 
//               className="text-dark text-decoration-none fs-4 fw-semibold"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//           </div>
//           <div>
//             <Link 
//               href="/get-started" 
//               className="btn text-white fw-medium w-100 py-3 fs-5 rounded-3"
//               style={{ backgroundColor: "#6366F1", border: "none" }}
//               onClick={() => setIsOpen(false)}
//             >
//               Get started
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Local Responsive Style Embeds */}
//       <style>{`
//         .burger-bar {
//           display: block;
//           width: 24px;
//           height: 2px;
//           background-color: #111827;
//           transition: all 0.2s ease-in-out;
//         }
//         .mobile-drawer {
//           position: fixed;
//           top: 73px; /* Height adjustment right beneath header border */
//           left: 0;
//           width: 100vw;
//           height: calc(100vh - 73px);
//           background-color: #ffffff;
//           z-index: 1040;
//           transform: translateX(100%);
//           transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .mobile-drawer.open {
//           transform: translateX(0);
//         }
//         .hover-indigo:hover {
//           color: #6366F1 !important;
//         }
//         body {
//           overflow: ${isOpen ? "hidden" : "auto"};
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
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