"use client";

import { useState } from "react";

export default function EmailSequencesTimeline() {
  const [activeStage, setActiveStage] = useState(0);

  const emailStages = [
    { phase: "01", category: "Awareness", title: "Event Announcement Email", target: "Cold & Warm Lead Pools", desc: "Initial sequence written to introduce event value vectors, secure initial conversions, and establish tracking baselines." },
    { phase: "02", category: "Momentum", title: "Speaker Reveal Announcement", target: "Staged Engagement", desc: "High-impact messaging focusing on individual expert releases to spike social validation and registration urgency." },
    { phase: "03", category: "Urgency", title: "Early-Bird Deadline Reminder", target: "7-Day / 3-Day / Final Loop", desc: "A time-sensitive reminder array pulling high conversion spikes before pricing threshold updates occur." },
    { phase: "04", category: "Value", title: "'Agenda Is Live' Notification", target: "Warm Consideration", desc: "Detailed timeline breakdowns highlighting specific presentation frameworks, workshops, and track paths." },
    { phase: "05", category: "Scale", title: "Group Registration Outreach", target: "Corporate Key Accounts", desc: "Strategic B2B outreach messaging written explicitly to incentivize multi-ticket team packages within large accounts." },
    { phase: "06", category: "Close", title: "Last-Chance Urgency Email", target: "Abandonment Retargeting", desc: "Final seat threshold metrics pushing immediate commitment triggers 24–48 hours before close parameters." },
    { phase: "07", category: "System", title: "Onboarding & Logistics Loop", target: "Confirmed Attendees", desc: "Multi-stage lifecycle sequence handling operational data, confirmation codes, venue details, and post-event gratitude loops." }
  ];

  return (
    <section 
      className="et-dashboard-scope" 
      style={{ 
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#030406",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      {/* Self-Contained Encapsulated High-Fidelity CSS & Sweep Engines */}
      <style>{`
        @keyframes dynamicRadarSweep {
          0% { transform: scale(0.95); opacity: 0; }
          15% { opacity: 0.4; }
          85% { opacity: 0.4; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @keyframes subtleMeshOrbit {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(40px, -30px) scale(1.12); opacity: 0.5; }
        }
        
        .et-content-bounds {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Split Screen Architecture Parameters */
        .et-split-dashboard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4.5rem;
          margin-top: 5rem;
        }

        @media (min-width: 992px) {
          .et-split-dashboard-grid {
            grid-template-columns: 1.1fr 0.9fr;
            align-items: center;
          }
          .et-sticky-monitor-node {
            position: sticky;
            top: 6rem;
          }
        }

        /* Chrono Interactive Row Indicators */
        .et-chrono-strip-row {
          border-left: 2px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem 0 1.5rem 2rem;
          cursor: pointer;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .et-chrono-strip-row::before {
          content: '';
          position: absolute;
          left: -2px;
          top: 0;
          width: 2px;
          height: 100%;
          background: var(--stage-accent, #a855f7);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .et-chrono-strip-row:hover::before,
        .et-chrono-strip-row.is-active-stage::before {
          transform: scaleY(1);
        }
        .et-chrono-strip-row:hover,
        .et-chrono-strip-row.is-active-stage {
          padding-left: 2.5rem;
        }
        
        /* High-End Diagnostic Panel Screen Frame */
        .et-monitor-display-screen {
          background: rgba(14, 16, 26, 0.65);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.7);
          min-height: 400px;
          transition: all 0.4s ease;
        }

        /* Radar Ring Pulse Tracker Overlay Component */
        .et-radar-pulsar-ring {
          position: absolute;
          inset: 0;
          border-radius: 32px;
          border: 2px solid var(--monitor-accent, #a855f7);
          animation: dynamicRadarSweep 5s infinite ease-out;
          pointer-events: none;
          z-index: 1;
        }

        .et-fluid-canvas-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(140px);
          animation: subtleMeshOrbit 20s infinite ease-in-out;
        }
      `}</style>

      {/* Modern Radial Canvas Ambient Underlays */}
      <div className="et-fluid-canvas-glow" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 75%)", top: "-10%", left: "-10%" }} />
      <div className="et-fluid-canvas-glow" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 75%)", bottom: "-10%", right: "-10%", animationDelay: "-8s" }} />

      <div className="et-content-bounds">
        
        {/* Core Header Text Billboard Stack */}
        <div style={{ maxWidth: "800px" }}>
          <span 
            style={{
              display: "inline-block",
              padding: "0.4rem 1.2rem",
              fontSize: "0.72rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              color: "#a855f7",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              borderRadius: "50px",
              marginBottom: "1.25rem"
            }}
          >
            Optimized Asset Stack
          </span>
          <h2 style={{ fontSize: "3.5rem", fontWeight: "900", lineHeight: "1.15", letterSpacing: "-0.04em", color: "#ffffff", margin: 0 }}>
            Conference Email <br />
            <span style={{ background: "linear-gradient(135deg, #ffffff 40%, #a855f7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Sequence Matrix
            </span>
          </h2>
        </div>

                {/* Split Screen Chrono-Dashboard Assembly Engine */}
        <div className="et-split-dashboard-grid">
          
          {/* Left Block: Chronological Progression Strip Triggers */}
          <div className="d-flex flex-column">
            {emailStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              
              // Alternates node accent colors dynamically to keep scrolling fluid
              const localAccent = idx % 2 === 0 ? "#a855f7" : "#38bdf8";

              return (
                <div
                  key={idx}
                  className={`et-chrono-strip-row ${isActive ? 'is-active-stage' : ''}`}
                  onClick={() => setActiveStage(idx)}
                  onMouseEnter={() => setActiveStage(idx)}
                  style={{ '--stage-accent': localAccent }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                      <span 
                        style={{ 
                          fontFamily: "monospace", fontSize: "0.85rem", fontWeight: "bold",
                          color: isActive ? localAccent : "rgba(255,255,255,0.15)",
                          transition: "color 0.3s ease"
                        }}
                      >
                        STAGE // {stage.phase}
                      </span>
                      <h3 
                        style={{ 
                          fontSize: "1.4rem", fontWeight: "700", margin: 0, letterSpacing: "-0.02em",
                          color: isActive ? "#ffffff" : "rgba(255,255,255,0.4)",
                          transition: "all 0.3s ease"
                        }}
                      >
                        {stage.title}
                      </h3>
                    </div>
                    
                    <span 
                      style={{ 
                        fontFamily: "monospace", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em",
                        color: isActive ? localAccent : "rgba(255,255,255,0.2)",
                        background: isActive ? `${localAccent}12` : "transparent",
                        border: isActive ? `1px solid ${localAccent}20` : "1px solid transparent",
                        padding: "0.25rem 0.6rem", borderRadius: "6px", transition: "all 0.3s ease"
                      }}
                    >
                      {stage.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Block: High-End Dynamic Monitor Screen Panel */}
          <div className="et-sticky-monitor-node">
            <div 
              className="et-monitor-display-screen"
              style={{ 
                '--monitor-accent': activeStage % 2 === 0 ? "#a855f7" : "#38bdf8",
                borderColor: activeStage % 2 === 0 ? "rgba(168, 85, 247, 0.15)" : "rgba(56, 189, 248, 0.15)"
              }}
            >
              {/* Radar Ring Sweeper Animation Hook */}
              <div className="et-radar-pulsar-ring" key={activeStage} />
              
              {/* Monitor Content Canvas Area */}
              <div style={{ padding: "3.5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", minHeight: "400px", position: "relative", zIndex: 2 }}>
                <div>
                  
                  {/* Monitor Meta Header Strip */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: activeStage % 2 === 0 ? "#a855f7" : "#38bdf8" }} />
                    <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#4b5563", fontWeight: "bold", letterSpacing: "0.05em" }}>
                      PARSING SEQUENCE LEDGER // DATA_VAL_{emailStages[activeStage]?.phase}
                    </span>
                  </div>
                  
                  {/* Dynamic Title and Copy Hooks */}
                  <h4 style={{ fontSize: "1.85rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "0.75rem", margin: "0 0 0.75rem 0" }}>
                    {emailStages[activeStage]?.title}
                  </h4>
                  <div style={{ display: "inline-block", fontFamily: "monospace", fontSize: "0.8rem", color: activeStage % 2 === 0 ? "#c084fc" : "#38bdf8", background: activeStage % 2 === 0 ? "rgba(168,85,247,0.1)" : "rgba(56,189,248,0.1)", padding: "0.2rem 0.6rem", borderRadius: "4px", marginBottom: "1.5rem" }}>
                    Target Audience: {emailStages[activeStage]?.target}
                  </div>
                  <p style={{ fontSize: "1rem", lineHeight: "1.65", color: "#9ca3af", margin: 0, fontWeight: "300" }}>
                    {emailStages[activeStage]?.desc}
                  </p>
                </div>

                {/* Simulated Core Terminal Footing Strings */}
                <div style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#4b5563", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between" }}>
                  <span>OPTIMIZATION_FLOW: CONVERSION</span>
                  <span>NODE_ADDR: 0x00{activeStage + 1}E</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

