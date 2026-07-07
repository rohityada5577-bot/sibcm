"use client";

import { useState } from "react";

export default function SpeakerKitSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const kitContents = [
    { num: "01", tag: "LINKEDIN", text: "5 Ready-to-Post Captions", desc: "Timelines optimized from announcements to countdowns." },
    { num: "02", tag: "TWITTER/X", text: "3 Post Variations Per Milestone", desc: "Bite-sized templates for friction-free sharing." },
    { num: "03", tag: "EMAIL", text: "Personal Audience Outreach Swipe", desc: "Warm scripts tailored for trusted personal lists." },
    { num: "04", tag: "DESIGN", text: "Branded Social Graphics Templates", desc: "Figma-ready layers for reveal cards and speaker frames." },
    { num: "05", tag: "ALGO", text: "Hashtag & Tagging Instructions", desc: "Strict tag workflows to maximize algorithmic reach." },
    { num: "06", tag: "SUPPORT", text: "Comprehensive Speaker FAQ Ledger", desc: "Answering critical event logistics upfront to save time." }
  ];

  return (
    <section 
      className="sk-canvas-scope" 
      style={{ 
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#ffffff",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      {/* Self-Contained High-Fidelity Custom Layout CSS */}
      <style>{`
        @keyframes dynamicMeshMove {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(40px, -20px) scale(1.1); opacity: 0.6; }
        }
        
        .skc-bounds {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Editorial Typographic Grid Engine */
        .skc-typographic-matrix {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-top: 5rem;
        }

        @media (min-width: 768px) {
          .skc-typographic-matrix {
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem 3rem;
          }
        }
        @media (min-width: 1200px) {
          .skc-typographic-matrix {
            grid-template-columns: repeat(3, 1fr);
            gap: 5rem 4rem;
          }
          /* Shifts rows to break boring alignments */
          .skc-text-block-node:nth-child(3n+2) { transform: translateY(40px); }
        }

        /* Pure Typographic Interactive Elements */
        .skc-text-block-node {
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .skc-interactive-heading {
          font-size: 1.85rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: #111827;
          margin: 0.75rem 0;
          transition: all 0.3s ease;
        }
        .skc-text-block-node:hover .skc-interactive-heading {
          color: #0284c7;
        }

        /* Micro Laser Scanner Underline Hook */
        .skc-laser-line {
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #0284c7, #6366f1);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: 1rem;
        }
        .skc-text-block-node:hover .skc-laser-line {
          width: 100%;
        }

        .skc-fluid-blur-bg {
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

      {/* Floating Canvas Atmospheric Backing Layers */}
      <div className="skc-fluid-blur-bg" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.03) 0%, transparent 75%)", top: "-15%", right: "-10%" }} />
      <div className="skc-fluid-blur-bg" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.02) 0%, transparent 75%)", bottom: "-15%", left: "-10%", animationDelay: "-7s" }} />

      <div className="skc-bounds">
        
        {/* Core Header Text Billboard Stack */}
        <div style={{ maxWidth: "750px", borderBottom: "1px solid rgba(15,23,42,0.06)", paddingBottom: "3rem" }}>
          <span style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.15em", color: "#64748b", textTransform: "uppercase", fontWeight: "bold" }}>
            // FILE_REF: ASSET_PROMOTION_KIT
          </span>
          <h2 style={{ fontSize: "3.75rem", fontWeight: "900", lineHeight: "1.1", letterSpacing: "-0.05em", color: "#0f172a", margin: "1rem 0" }}>
            Speaker Marketing Kit
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.65", color: "#475569", fontWeight: "300", margin: 0 }}>
            Everything your speakers need to promote your conference to their networks. Designed as a minimal-effort, high-amplification asset system.
          </p>
        </div>
                {/* Typographic Asymmetric Matrix Grid Layout */}
        <div className="skc-typographic-matrix">
          {kitContents.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div 
                key={idx} 
                className="skc-text-block-node"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Meta-Details Line Element */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "0.85rem", fontWeight: "bold", color: isHovered ? "#0284c7" : "rgba(15,23,42,0.2)", transition: "color 0.3s ease" }}>
                    {item.num} /
                  </span>
                  <span style={{ fontSize: "0.68rem", fontFamily: "monospace", letterSpacing: "0.08em", color: "#64748b", fontWeight: "700" }}>
                    {item.tag}
                  </span>
                </div>

                {/* Main Dynamic Interactive Heading */}
                <h3 className="skc-interactive-heading">
                  {item.text}
                </h3>

                {/* Body Text Block Description */}
                <p style={{ fontSize: "0.92rem", lineHeight: "1.55", color: "#475569", margin: 0, fontWeight: "300" }}>
                  {item.desc}
                </p>

                {/* Laser Underline Tracker Component */}
                <div className="skc-laser-line" />
              </div>
            );
          })}
        </div>

        {/* Footing Integrated Download Strip Action Callout Block */}
        <div 
          style={{ 
            marginTop: "8rem", 
            borderTop: "1px solid rgba(15, 23, 42, 0.06)", 
            paddingTop: "2.5rem", 
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#0284c7" }} />
            <span style={{ fontSize: "0.85rem", fontFamily: "monospace", color: "#64748b", fontWeight: "bold" }}>
              ASSET_BUNDLE: SPEAKER_KIT_V1.ZIP
            </span>
          </div>
          
          <button 
            style={{
              background: "#0f172a",
              border: "none",
              color: "#ffffff",
              fontSize: "0.85rem",
              fontWeight: "700",
              padding: "0.75rem 1.75rem",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0284c7";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0f172a";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Download Kit Bundle
          </button>
        </div>

      </div>
    </section>
  );
}

