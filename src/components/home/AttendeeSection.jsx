"use client";

import { attendeeContent } from "./data";

export default function AttendeeSection() {
  return (
    <section 
      className="bg-white text-dark py-5 position-relative overflow-hidden" 
      style={{ 
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        backgroundColor: "#f8fafc" 
      }}
    >
      {/* CSS Injection for Premium Animations & Layout Effects */}
      <style>{`
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .bg-mesh-canvas {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          animation: float-subtle 12s infinite ease-in-out;
        }
        .premium-card-panel {
          background: #ffffff;
          border: 1px solid rgba(241, 245, 249, 0.8);
          border-radius: 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -2px rgba(0, 0, 0, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .premium-card-panel::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--accent-gradient);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card-panel:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03);
          border-color: rgba(226, 232, 240, 0.8);
        }
        .premium-card-panel:hover::after {
          transform: scaleX(1);
        }
        .premium-card-panel:hover .icon-node-wrap {
          transform: scale(1.05) rotate(5deg);
        }
        .text-gradient-header {
          background: linear-gradient(135deg, #0f172a 30%, #0284c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .brand-badge-pill {
          letter-spacing: 0.12em;
          font-size: 0.75rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
        }
      `}</style>

      {/* Decorative Atmosphere Canvas Backing */}
      <div className="bg-mesh-canvas"></div>
      <div className="bg-mesh-canvas" style={{ left: "-10%", bottom: "-20%", background: "radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)", animationDelay: "-6s" }}></div>

      <div className="container position-relative z-1 px-4 my-5">
        <div className="row g-5 align-items-center">
          
          {/* Left Column: Fixed Sticky Typography Context Stack */}
          <div className="col-lg-5 position-lg-sticky" style={{ top: "4rem" }}>
            <span className="badge brand-badge-pill rounded-pill px-3 py-2 mb-3 fw-bold text-uppercase">
              {attendeeContent.badge}
            </span>
            <h2 className="display-4 fw-extrabold text-dark mb-4 tracking-tight lh-sm">
              {attendeeContent.headingMain} <br />
              <span className="text-gradient-header">{attendeeContent.headingGradient}</span>
            </h2>
            <p className="text-secondary fs-5 mb-0 lh-base border-start border-2 border-primary border-opacity-20 ps-4">
              {attendeeContent.description}
            </p>
          </div>

          {/* Right Column: High-End Asymmetric Mosaic Showcase Layout */}
          <div className="col-lg-7">
            <div className="row g-4">
              {attendeeContent.pillars.map((item, idx) => {
                // Dynamically breaks regular stacks into architectural layout variants
                const isEven = idx % 2 === 0;
                
                return (
                  <div key={idx} className="col-12">
                    <div 
                      className="p-4 p-md-5 premium-card-panel d-flex flex-column flex-md-row align-items-md-start gap-4"
                      style={{ 
                        '--accent-gradient': `linear-gradient(90deg, ${item.accentColor}, #6366f1)` 
                      }}
                    >
                      {/* Left: Dynamic Icon/Status Cluster Frame */}
                      <div 
                        className="icon-node-wrap flex-shrink-0 d-flex align-items-center justify-content-center rounded-4 shadow-sm"
                        style={{ 
                          width: "56px", 
                          height: "56px", 
                          backgroundColor: item.bgSoft || `${item.accentColor}10`,
                          border: `1px solid ${item.accentColor}25`,
                          transition: "all 0.3s ease"
                        }}
                      >
                        <span className="font-monospace fw-bold" style={{ color: item.accentColor, fontSize: "1.1rem" }}>
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Right: Structural Content Typography */}
                      <div className="flex-grow-1">
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                          <span 
                            className="font-monospace text-uppercase fw-bold rounded-2 px-2 py-0.5"
                            style={{ 
                              backgroundColor: `${item.accentColor}12`, 
                              color: item.accentColor,
                              fontSize: "0.7rem",
                              letterSpacing: "0.05em"
                            }}
                          >
                            {item.label}
                          </span>
                        </div>
                        
                        <h3 className="h4 fw-bold text-slate-900 mb-2 tracking-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-muted m-0 lh-base" style={{ fontSize: "0.95rem" }}>
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
