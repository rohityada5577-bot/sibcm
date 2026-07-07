"use client";

import { useState } from "react";

export default function LandingPageCopywright() {
  const [activeNode, setActiveNode] = useState(0);

  const steps = [
    { id: "HRO", phase: "01", category: "Conversion", title: "Hero Section Blueprint", desc: "Headline formulas, subheadline rules, and above-the-fold CTA layout configurations built for immediate entry capture." },
    { id: "VAL", phase: "02", category: "Hook", title: "Value Proposition", desc: "Psychology-backed benefit bullet formulas structured to immediately address the user's primary business problems." },
    { id: "SPK", phase: "03", category: "Social Validation", title: "Speaker Matrix", desc: "Curated copy frameworks that turn standard professional biographies into immediate registration incentives." },
    { id: "AGD", phase: "04", category: "Timeline", title: "Agenda Schema", desc: "Session-by-session copy structures engineered to hold reader attention across dense multi-track events." },
    { id: "PRF", phase: "05", category: "Proof", title: "Social Proof Scripts", desc: "Testimonial request scripts and display formatting parameters that isolate high-value user review validations." },
    { id: "PRC", phase: "06", category: "Urgency", title: "Pricing & Early-Bird", desc: "Time-sensitive psychological copy hooks optimized to trigger rapid ticket sales before threshold shifts." },
    { id: "FAQ", phase: "07", category: "Logic", title: "Critical FAQ Layer", desc: "The 8 exact analytical questions every conference landing page must answer upfront to prevent checkout dropout." },
    { id: "CTA", phase: "08", category: "Close", title: "Final Commitment", desc: "Urgency parameters and micro-copy formulas optimized for the absolute lowest baseline registration blocks." }
  ];

  return (
    <section 
      className="ps-matrix-scope" 
      style={{ 
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#030406",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      {/* Self-Contained Encapsulated Prism Mechanics & Pipeline Animations */}
      <style>{`
        @keyframes prismFluidShift {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.15; }
          50% { transform: translate(20px, -20px) scale(1.08) rotate(180deg); opacity: 0.25; }
        }
        
        .ps-matrix-bounds {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Continuous Horizontal Pipeline Matrix */
        .ps-horizontal-stream-line {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }
        
        @media (min-width: 768px) {
          .ps-horizontal-stream-line { grid-template-columns: repeat(4, 1fr); gap: 2rem 1.5rem; }
        }
        
        @media (min-width: 1200px) {
          .ps-horizontal-stream-line {
            display: flex;
            justify-content: space-between;
            gap: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
            padding-bottom: 2rem;
          }
        }

        /* Individual Sequence Node Tracker Rules */
        .ps-stream-node-block {
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @media (min-width: 1200px) {
          .ps-stream-node-block {
            width: calc(100% / 8);
            padding-top: 1.5rem;
          }
          /* Continuous structural connect line */
          .ps-stream-node-block::before {
            content: '';
            position: absolute;
            top: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--node-color, #38bdf8);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 3;
          }
          .ps-stream-node-block.is-active-node::before,
          .ps-stream-node-block:hover::before {
            transform: scaleX(1);
          }
        }

        /* Dropdown Terminal Blind Container Mechanics */
        .ps-terminal-blind-container {
          background: rgba(11, 13, 20, 0.5);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 24px;
          margin-top: 3.5rem;
          overflow: hidden;
          box-shadow: 0 40px 60px -25px rgba(0,0,0,0.8);
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ps-terminal-blind-container.is-open {
          grid-template-rows: 1fr;
        }

        /* Prism Color Shift backdrop layer */
        .ps-prism-fluid-overlay {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
          animation: prismFluidShift 12s infinite ease-in-out;
        }
      `}</style>

      {/* Dynamic Spectrum Prism Backdrops */}
      <div className="ps-prism-fluid-overlay" style={{ background: `radial-gradient(circle, ${steps[activeNode]?.accent || '#38bdf8'} 0%, transparent 70%)`, top: "20%", left: "30%" }} />

      <div className="ps-matrix-bounds">
        
        {/* Editorial Billboard Text Stack */}
        <div style={{ maxWidth: "680px" }}>
          <span 
            style={{
              display: "inline-block",
              padding: "0.4rem 1rem",
              fontSize: "0.72rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              color: steps[activeNode]?.accent,
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "50px",
              marginBottom: "1.25rem",
              transition: "color 0.3s ease"
            }}
          >
            Psychology-Backed Infrastructure
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "900", lineHeight: "1.15", letterSpacing: "-0.04em", color: "#ffffff", margin: 0 }}>
            Landing Page Copy Framework
          </h2>
        </div>
        {/* Continuous Pipeline Stream Alignment Layer */}
        <div className="ps-horizontal-stream-line">
          {steps.map((node, idx) => {
            const isActive = activeNode === idx;
            
            // Assigns sequential operational color spectrum fields natively
            let nodeAccent = "#38bdf8"; 
            if (idx >= 2) nodeAccent = "#a855f7";
            if (idx >= 4) nodeAccent = "#10b981";
            if (idx >= 6) nodeAccent = "#f59e0b";

            return (
              <div
                key={idx}
                className={`ps-stream-node-block ${isActive ? 'is-active-node' : ''}`}
                onClick={() => setActiveNode(idx)}
                onMouseEnter={() => setActiveNode(idx)}
                style={{ 
                  '--node-color': nodeAccent,
                  background: isActive ? "rgba(255,255,255,0.02)" : "transparent",
                  padding: "1rem",
                  borderRadius: "12px"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <span 
                    style={{ 
                      fontFamily: "monospace", fontSize: "0.75rem", fontWeight: "bold",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.2)",
                      transition: "color 0.3s ease"
                    }}
                  >
                    // SYS_{node.id}
                  </span>
                  <span 
                    style={{ 
                      fontSize: "0.95rem", fontWeight: "700", 
                      color: isActive ? nodeAccent : "rgba(255,255,255,0.5)",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      transition: "color 0.3s ease"
                    }}
                  >
                    {node.title.split(" ")[0]} {node.title.split(" ")[1] || ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dropdown Terminal Blind Output Canvas Monitor */}
        <div className={`ps-terminal-blind-container is-open`}>
          <div style={{ overflow: "hidden" }}>
            <div style={{ padding: "3.5rem" }}>
              
              {/* Internal Monitor Meta Elements Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: steps[activeNode]?.accent || "#38bdf8" }} />
                  <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#4b5563", fontWeight: "bold", letterSpacing: "0.05em" }}>
                    MANIFEST RECONCILIATION INDEX // BLOCK_0{steps[activeNode]?.phase}
                  </span>
                </div>
                
                <span 
                  style={{ 
                    fontFamily: "monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em",
                    color: steps[activeNode]?.accent, background: `${steps[activeNode]?.accent}15`,
                    border: `1px solid ${steps[activeNode]?.accent}25`, padding: "0.25rem 0.6rem", borderRadius: "6px"
                  }}
                >
                  {steps[activeNode]?.category} Classification
                </span>
              </div>

              {/* Dynamic Heading and Copy Triggers */}
              <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.03em", margin: "0 0 1rem 0" }}>
                {steps[activeNode]?.title}
              </h3>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#9ca3af", margin: 0, fontWeight: "300", maxWidth: "850px" }}>
                {steps[activeNode]?.desc}
              </p>

              {/* Action Trigger Footing Bar */}
              <div style={{ marginTop: "3.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ padding: "0.5rem", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)", display: "flex" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={steps[activeNode]?.accent} strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.85rem", fontFamily: "monospace", color: "#4b5563" }}>
                    Ready File: COPY- blue-print_pkg.md
                  </span>
                </div>

                <button 
                  style={{
                    background: "#ffffff",
                    border: "none",
                    color: "#030406",
                    fontSize: "0.85rem",
                    fontWeight: "800",
                    padding: "0.65rem 1.5rem",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = steps[activeNode]?.accent;
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.color = "#030406";
                  }}
                >
                  Download Section Asset
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
