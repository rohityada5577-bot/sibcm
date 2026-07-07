"use client";

export default function CampaignTemplateSection() {
  const inclusions = [
    { label: "12-Month Schedule", detail: "Timeline schedules broken into foundational, awareness, conversion, final push, and post-event phases." },
    { label: "Task Workflows", detail: "Channel execution milestones with deadlines automatically mapped relative to your event date." },
    { label: "KPI Tracking Matrix", detail: "Comprehensive modules monitoring registration targets, cost benchmarks, and channel attribution fields." },
    { label: "Budget Framework", detail: "Strategic financial allocations dynamically calculated by specific channel and operational phase boundaries." }
  ];

  return (
    <section 
      className="wp-template-scope" 
      style={{ 
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#ffffff",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      {/* Self-Contained Premium CSS Mechanics */}
      <style>{`
        @keyframes dynamicFluidOrbit {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(30px, -20px) scale(1.1); opacity: 0.6; }
        }
        @keyframes borderMarqueeLinear {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .wp-content-bounds {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Split Editorial Panel Layout */
        .wp-editorial-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4.5rem;
        }

        @media (min-width: 992px) {
          .wp-editorial-split-grid {
            grid-template-columns: 0.90fr 1.10fr;
            align-items: start;
          }
          .wp-sticky-hero-pane {
            position: sticky;
            top: 6rem;
          }
        }

        /* Curated Asymmetric Panel Cards Grid */
        .wp-inclusions-mosaic-matrix {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .wp-inclusions-mosaic-matrix { grid-template-columns: repeat(2, 1fr); }
        }

        /* Premium Magazine Floating Panels */
        .wp-minimal-feature-tile {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.04);
          border-radius: 24px;
          box-shadow: 0 4px 30px rgba(15, 23, 42, 0.015);
          position: relative;
          overflow: hidden;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wp-minimal-feature-tile:hover {
          transform: translateY(-6px);
          border-color: rgba(15, 23, 42, 0.08);
          box-shadow: 0 30px 50px -15px rgba(15, 23, 42, 0.06);
        }
        
        /* Continuous Moving Border Underlay Element */
        .wp-animated-marquee-line {
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9);
          background-size: 200% 200%;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: borderMarqueeLinear 4s infinite linear;
        }
        .wp-minimal-feature-tile:hover .wp-animated-marquee-line {
          opacity: 1;
        }

        /* Fluid Background Atmospheric Glow Blur */
        .wp-soft-blur-canvas {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(130px);
          animation: dynamicFluidOrbit 20s infinite ease-in-out;
        }
      `}</style>

      {/* Floating Canvas Atmospheric Backing Layers */}
      <div className="wp-soft-blur-canvas" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 75%)", top: "-15%", right: "-10%" }} />
      <div className="wp-soft-blur-canvas" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 75%)", bottom: "-10%", left: "-10%", animationDelay: "-8s" }} />

      <div className="wp-content-bounds">
        <div className="wp-editorial-split-grid">
          
          {/* Left Column: Fixed Sticky Framework Typography Billboard */}
          <div className="wp-sticky-hero-pane">
            <span 
              style={{
                display: "inline-block",
                padding: "0.4rem 1.2rem",
                fontSize: "0.72rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                backgroundColor: "rgba(15, 23, 42, 0.03)",
                color: "#0284c7",
                border: "1px solid rgba(15, 23, 42, 0.05)",
                borderRadius: "50px",
                marginBottom: "1.5rem"
              }}
            >
              Operational Resources
            </span>
            <h2 style={{ fontSize: "3.5rem", fontWeight: "900", lineHeight: "1.15", letterSpacing: "-0.04em", color: "#0f172a", margin: 0 }}>
              Conference Marketing <br />
              <span style={{ background: "linear-gradient(135deg, #0f172a 30%, #0284c7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Campaign Template
              </span>
            </h2>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#475569", marginTop: "1.5rem", fontWeight: "400", margin: "1.5rem 0 0 0" }}>
              A complete campaign planning template covering all channels, milestones, and deliverables across a 12-month conference promotion timeline. Structured as a ready-to-use project plan with week-by-week action items for SEO, email, paid advertising, social media, and speaker co-marketing.
            </p>
          </div>


          {/* Right Column: Premium Modern Asymmetric Inclusions Mosaic Matrix */}
          <div>
            <div 
              style={{ 
                fontSize: "0.75rem", 
                fontFamily: "monospace", 
                textTransform: "uppercase", 
                letterSpacing: "0.08em", 
                color: "#64748b", 
                fontWeight: "bold",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#0284c7" }} />
              Framework Specifications Manifest:
            </div>

            <div className="wp-inclusions-mosaic-matrix">
              {inclusions.map((inclusion, idx) => (
                <div key={idx} className="wp-minimal-feature-tile">
                  {/* Moving Gradient Border Marquee Underlay */}
                  <div className="wp-animated-marquee-line" />
                  
                  <div style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", minHeight: "220px" }}>
                    <div>
                      <span style={{ display: "block", fontFamily: "monospace", fontSize: "0.72rem", color: "#64748b", opacity: 0.5, marginBottom: "0.5rem" }}>
                        // MODULE_INDEX_0{idx + 1}
                      </span>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#0f172a", margin: "0 0 0.5rem 0", letterSpacing: "-0.01em" }}>
                        {inclusion.label}
                      </h3>
                      <p style={{ fontSize: "0.88rem", lineHeight: "1.6", color: "#475569", margin: 0, fontWeight: "300" }}>
                        {inclusion.detail}
                      </p>
                    </div>
                    
                    {/* Micro geometric check accent */}
                    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", marginTop: "1rem" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#f8fafc", border: "1px solid rgba(15,23,42,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="3.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footing Integrated Download Action Callout Strip */}
            <div 
              style={{ 
                marginTop: "3rem", 
                background: "#f8fafc", 
                border: "1px solid rgba(15, 23, 42, 0.03)", 
                padding: "1.5rem 2rem", 
                borderRadius: "24px",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ padding: "0.5rem", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.02)", border: "1px solid rgba(15,23,42,0.02)", display: "flex" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <span style={{ fontSize: "0.85rem", fontWeight: "500", color: "#475569" }}>
                  File Reference: <strong style={{ color: "#0f172a" }}>CM-CAMP-TMPL.ZIP</strong> (Excel / Markdown Plan)
                </span>
              </div>
              
              <button 
                style={{
                  background: "#0f172a",
                  border: "1px solid transparent",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0284c7";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0f172a";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Download Blueprint
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
