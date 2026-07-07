import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 position-relative border-top border-secondary border-opacity-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Component Specific Hover Effects */}
      <style>{`
        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #818cf8;
        }
        .input-glass {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-size: 0.9rem;
        }
        .input-glass:focus {
          background: rgba(255, 255, 255, 0.04);
          border-color: #6366f1;
          box-shadow: none;
          color: #ffffff;
        }
        .text-gradient-footer {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="container px-4">
        <div className="row g-5 justify-content-between mb-5">
          
          {/* Column 1: Brand & Description */}
          <div className="col-lg-4 col-md-6">
            <div className="fs-4 fw-bold text-gradient-footer mb-3">
               <Image 
                            src="/cmwlogo.webp" 
                            alt="CMW Logo" 
                            width={110} 
                            height={55} 
                            priority
                            className="d-inline-block img-fluid"
                            style={{ objectFit: "contain" }}
                          />
            </div>
            <p className="text-secondary small lh-base mb-4" style={{ maxWidth: '320px' }}>
              Specialized conference marketing agency built exclusively to drive elite registrations and fill convention halls globally.
            </p>
            <div className="text-muted small">
              © {new Date().getFullYear()} EventPulse. All rights reserved.
            </div>
          </div>

          {/* Column 2: Navigation Pipelines */}
          <div className="col-lg-3 col-sm-6">
            <h4 className="h6 fw-bold text-white text-uppercase tracking-wider mb-3">Agency Matrix</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 m-0">
              <li><a href="#" className="footer-link">Growth Strategies</a></li>
              <li><a href="#" className="footer-link">Channels Architecture</a></li>
              <li><a href="#" className="footer-link">Proven Case Studies</a></li>
              <li><a href="#" className="footer-link">Industry Verticals</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter Architecture Sub-Card */}
          <div className="col-lg-4 col-md-6">
            <h4 className="h6 fw-bold text-white text-uppercase tracking-wider mb-3">Get Growth Insights</h4>
            <p className="text-secondary small mb-3">
              Actionable event marketing case studies sent straight to your inbox monthly.
            </p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control input-glass py-2.5 px-3 rounded-start-3" 
                placeholder="Enter business email" 
                aria-label="Business Email"
              />
              <button 
                className="btn btn-primary px-3 rounded-end-3 small fw-semibold" 
                type="button"
                style={{ backgroundColor: '#6366f1', borderColor: '#6366f1' }}
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Global Compliance Segment Bar */}
        <div className="pt-4 border-top border-secondary border-opacity-10 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2">
          <div className="d-flex gap-4">
            <a href="#" className="footer-link small">Privacy Policy</a>
            <a href="#" className="footer-link small">Terms of Service</a>
            <a href="#" className="footer-link small">Cookie Directives</a>
          </div>
          <div className="text-secondary small">
            Designed for enterprise performance tracking.
          </div>
        </div>

      </div>
    </footer>
  );
}
