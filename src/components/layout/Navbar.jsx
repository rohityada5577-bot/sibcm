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

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "./nav.css"

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
    <header className="premium-header">
      <div className="container">

        <div className="premium-navbar">

          {/* Logo */}

          <Link href="/" className="premium-logo">
            <Image
              src="/cmwlogo.webp"
              alt="CMW Logo"
              width={170}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Menu */}

          <ul className="premium-menu">

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about-us">About Us</Link>
            </li>

            <li className="premium-dropdown">

              <Link href="/services">
                Services
              </Link>

              <div className="premium-dropdown-box">

                <h5>Our Services</h5>

                {services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}

              </div>

            </li>

            <li>
              <Link href="/industries">
                Industries
              </Link>
            </li>

            <li className="premium-dropdown">

              <Link href="/resources">
                Resources
              </Link>

              <div className="premium-dropdown-box">

                <h5>Resources</h5>

                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}

              </div>

            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>

          </ul>

          {/* Desktop Button */}

          <div className="premium-actions">

            <Link
              href="/get-quote"
              className="premium-btn"
            >
              Request Demo
            </Link>

          </div>

          {/* Mobile Hamburger */}

          <button
            className="premium-mobile-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#premiumMobileMenu"
            aria-controls="premiumMobileMenu"
          >
            ☰
          </button>

        </div>

      </div>
    </header>

    {/* Mobile Offcanvas */}

    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="premiumMobileMenu"
      aria-labelledby="premiumMobileMenuLabel"
    >

      <div className="offcanvas-header">

        <h5
          className="offcanvas-title"
          id="premiumMobileMenuLabel"
        >
          Conference Marketing
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>

      </div>

      <div className="offcanvas-body">

        <ul className="premium-mobile-menu">

          <li>
            <Link
              href="/"
              data-bs-dismiss="offcanvas"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about-us"
              data-bs-dismiss="offcanvas"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              data-bs-dismiss="offcanvas"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/industries"
              data-bs-dismiss="offcanvas"
            >
              Industries
            </Link>
          </li>

          <li>
            <Link
              href="/resources"
              data-bs-dismiss="offcanvas"
            >
              Resources
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              data-bs-dismiss="offcanvas"
            >
              Contact
            </Link>
          </li>

        </ul>

        <div className="mt-4">

          <Link
            href="/get-quote"
            className="premium-btn w-100 text-center"
            data-bs-dismiss="offcanvas"
          >
            Request Demo
          </Link>

        </div>

      </div>

    </div>
  </>
);

  // rest of your code
}

// "use client";
// import { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// export default function Navbar() {

//     useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);
 
//   );
// }