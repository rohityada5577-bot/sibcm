"use client";

import { useState } from "react";

export default function MarketingResourcesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const resources = [
    {
      index: "01",
      tag: "Framework",
      title: "Conference Marketing Blueprint",
      desc: "Our complete end-to-end promotional timeline map. Tracks milestones from 12 months out down to real-time opening remarks execution.",
      accent: "#38bdf8"
    },
    {
      index: "02",
      tag: "Template",
      title: "Speaker Co-Marketing Playbook",
      desc: "Copy-and-paste swipe assets, graphic dimensions, and pre-written copy scripts that make it effortless for your speakers to drive registrations.",
      accent: "#a855f7"
    },
    {
      index: "03",
      tag: "Checklist",
      title: "The Registration Spike Roadmap",
      desc: "A sequenced emergency blueprint designed to trigger quick ticket sales using highly targeted Google retargeting and urgency email flows.",
      accent: "#10b981"
    }
  ];

  return (
    <section 
      className="rm-dashboard-scope" 
      style={{ 
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#050609",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      {/* Self-Contained Encapsulated Premium CSS Mechanics */}
      <style>{`
        @keyframes dynamicMeshMove {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(30px, -40px) scale(1.15); opacity: 0.5; }
        }
        
        .rm-content-bounds {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Asymmetric Layout Blueprint splits */
        .rm-editorial-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4.5rem;
          margin-bottom: 5rem;
          align-items: start;
        }

        /* High-End Asset Interactive Grids */
        .rm-asset-cards-matrix {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 768px) {
          .rm-asset-cards-matrix { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1200px) {
          .rm-editorial-split-grid {
            grid-template-columns: 0.9fr 1.1fr;
          }
          .rm-asset-cards-matrix { grid-template-columns: repeat(3, 1fr); }
          
          /* Alternating dynamic offset to dissolve boxy layouts */
          .rm-premium-asset-node:nth-child(2) { transform: translateY(24px); }
          .rm-premium-asset-node:nth-child(2):hover { transform: translateY(12px); }
        }

        /* Custom Interactive Resource Cards */
        .rm-premium-asset-node {
          background: rgba(13, 15, 24, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .rm-premium-asset-node:hover {
          transform: translateY(-8px);
          border-color: var(--asset-accent, rgba(255,255,255,0.15));
          background: rgba(18, 21, 34, 0.7);
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255,255,255,0.01);
        }
        .rm-laser-under-edge {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, var(--asset-accent, #fff), transparent);
          opacity: 0.15;
          transition: opacity 0.4s ease;
        }
        .rm-premium-asset-node:hover .rm-laser-under-edge {
          opacity: 1;
        }
        .rm-arrow-vector-icon {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          opacity: 0.2;
        }
        .rm-premium-asset-node:hover .rm-arrow-vector-icon {
          transform: translate(3px, -3px);
          opacity: 1;
        }

        /* Ambient Fluid Glow Layer */
        .rm-fluid-mesh-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(140px);
          animation: dynamicMeshMove 20s infinite ease-in-out;
        }
      `}</style>

      {/* Modern Radial Canvas Ambient Underlays */}
      <div className="rm-fluid-mesh-glow" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 75%)", top: "-15%", left: "-10%" }} />
      <div className="rm-fluid-mesh-glow" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 75%)", bottom: "-15%", right: "-10%", animationDelay: "-8s" }} />

      <div className="rm-content-bounds">
        
        {/* Header Block: Asymmetrical Layout Split */}
        <div className="rm-editorial-split-grid">
          <div>
            <span 
              style={{
                display: "inline-block",
                padding: "0.4rem 1.2rem",
                fontSize: "0.72rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                color: "#38bdf8",
                border: "1px solid rgba(56, 189, 248, 0.15)",
                borderRadius: "50px",
                marginBottom: "1.5rem"
              }}
            >
              Field-Tested Toolkits
            </span>
            <h2 style={{ fontSize: "3.75rem", fontWeight: "900", lineHeight: "1.1", letterSpacing: "-0.04em", color: "#ffffff", margin: 0 }}>
              Free Conference <br />
              <span style={{ background: "linear-gradient(135deg, #ffffff 40%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Marketing Resources
              </span>
            </h2>
          </div>
          <div style={{ alignSelf: "end" }}>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "#9ca3af", fontWeight: "300", borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: "2rem", margin: 0 }}>
              Building a successful conference marketing campaign requires the right tools in the right hands at the right time. We have compiled our most practical, field-tested conference marketing resources — the exact frameworks, templates, and checklists our team uses with clients — and made them available for conference organizers to download and use free.
            </p>
          </div>
        </div>
                {/* Core Subtitle Statement Separator Strip */}
        <div 
          style={{ 
            background: "rgba(255,255,255,0.01)", 
            borderTop: "1px solid rgba(255,255,255,0.05)", 
            borderBottom: "1px solid rgba(255,255,255,0.05)", 
            padding: "1.5rem 2rem", 
            borderRadius: "16px",
            marginBottom: "5rem",
            color: "#6b7280",
            fontSize: "0.95rem",
            fontStyle: "italic",
            letterSpacing: "0.01em"
          }}
        >
          "Every resource below is built from real conference marketing experience, not theoretical best practices. These are the tools that fill conference rooms."
        </div>

        {/* Resources Cards Display Matrix Layer */}
        <div className="rm-asset-cards-matrix">
          {resources.map((resource, idx) => (
            <div 
              key={idx} 
              className="rm-premium-asset-node"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ "--asset-accent": resource.accent }}
            >
              {/* Laser underlay highlight boundary */}
              <div className="rm-laser-under-edge" />
              
              <div style={{ padding: "3rem 2.25rem", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", minHeight: "340px" }}>
                
                {/* Card Top Meta Data Bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem" }}>
                  <span 
                    style={{ 
                      fontFamily: "monospace", 
                      textTransform: "uppercase", 
                      fontWeight: "700", 
                      fontSize: "0.72rem", 
                      letterSpacing: "0.08em", 
                      color: resource.accent,
                      background: `${resource.accent}12`,
                      padding: "0.25rem 0.6rem",
                      borderRadius: "6px"
                    }}
                  >
                    {resource.tag}
                  </span>
                  <div style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#4b5563", fontWeight: "bold" }}>
                    // DATA_REF_{resource.index}
                  </div>
                </div>

                {/* Card Main Typography Blocks */}
                <div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "0.75rem", margin: "0 0 0.75rem 0" }}>
                    {resource.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "#9ca3af", margin: 0, fontWeight: "300" }}>
                    {resource.desc}
                  </p>
                </div>

                {/* Interactive Animated Action String Anchor */}
                <div 
                  style={{ 
                    marginTop: "2.5rem", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    paddingTop: "1.25rem"
                  }}
                >
                  <span style={{ fontSize: "0.85rem", fontWeight: "700", color: hoveredIndex === idx ? "#ffffff" : "#6b7280", transition: "color 0.3s ease", letterSpacing: "0.02em" }}>
                    DOWNLOAD ASSET (ZIP)
                  </span>
                  
                  <svg className="rm-arrow-vector-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={resource.accent} strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

