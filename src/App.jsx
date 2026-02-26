import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Shield,
  Users,
  Award,
  BookOpen,
  MessageSquare,
  Zap,
  Globe,
  Home,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

/**
 * BRAND LOGO: THE PRODIGAL DOCTOR BIRD
 * Updated: Black bib for high contrast and hard-coded dimensions.
 */
const DoctorBirdLogo = ({ size = 60, className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", minWidth: size, minHeight: size }}
  >
    <circle cx="50" cy="50" r="48" fill="#1A1A1A" />
    <circle cx="50" cy="50" r="42" stroke="#B48E2E" strokeWidth="2.5" />
    <path
      d="M48 40C45 40 32 45 28 50C24 55 35 60 45 70C48 73 52 75 55 65C58 55 55 43 52 40Z"
      fill="#4CAF50"
    />
    <path
      d="M52 45C54 48 56 52 52 58C48 62 44 60 44 55C44 50 48 45 52 45Z"
      fill="black"
    />
    <path
      d="M52 40C55 38 62 38 65 42L85 43"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="55" cy="43" r="4.5" fill="#4CAF50" />
    <path d="M56 46C58 47 62 45 60 43L56 43Z" fill="#E53935" />
    <path
      d="M45 70C42 80 42 90 58 100"
      stroke="#B48E2E"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="prodigal-root">
      {/* MASTER STYLE ENGINE:
        These styles are hard-coded to ensure your VS Code matches the Preview 
        regardless of your local Tailwind settings.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --p-green: #166534;
          --p-gold: #B48E2E;
          --p-stone: #FAFAF9;
          --p-white: #ffffff;
          --p-black: #000000;
          --p-font: system-ui, -apple-system, sans-serif;
        }

        .prodigal-root {
          min-height: 100vh;
          font-family: var(--p-font);
          background-color: var(--p-stone);
          color: #1a1a1a;
          margin: 0; padding: 0;
        }

        .p-nav {
          position: fixed; width: 100%; z-index: 100;
          transition: all 0.3s ease;
          display: flex; align-items: center;
        }
        .p-nav-transparent { background: transparent; padding: 24px 0; }
        .p-nav-scrolled { background: white; padding: 12px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }

        .p-container { max-width: 1200px; margin: 0 auto; width: 100%; padding: 0 24px; box-sizing: border-box; }
        .p-flex-between { display: flex; justify-content: space-between; align-items: center; }

        .p-brand-text { font-size: 1.25rem; font-weight: 900; letter-spacing: -0.05em; }
        .p-btn-consult { 
          background: var(--p-green); color: white; padding: 12px 32px; 
          border-radius: 99px; font-weight: 800; font-size: 0.75rem; 
          text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer;
        }

        .p-hero { 
          position: relative; height: 95vh; display: flex; align-items: center; justify-content: center; 
          background: black; overflow: hidden; color: white; text-align: center;
        }
        .p-hero-overlay { 
          position: absolute; inset: 0; z-index: 10;
          background: linear-gradient(135deg, rgba(6, 78, 59, 0.95) 0%, rgba(0, 0, 0, 0.8) 100%);
        }
        .p-hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
        .p-hero-content { position: relative; z-index: 20; max-width: 900px; }

        .p-badge { 
          display: inline-flex; align-items: center; background: rgba(255,255,255,0.1); 
          padding: 8px 20px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.2);
          margin-bottom: 32px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
        }

        .p-title { font-size: clamp(3rem, 10vw, 7.5rem); font-weight: 900; line-height: 0.85; letter-spacing: -0.06em; margin: 0 0 24px 0; }
        .p-desc { font-size: 1.5rem; color: #cbd5e1; font-weight: 300; max-width: 700px; margin: 0 auto 48px; line-height: 1.5; }

        .p-features { padding: 100px 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
        .p-card { 
          background: white; padding: 50px; border-radius: 40px; border: 1px solid #f1f5f9;
          text-align: center; transition: transform 0.3s ease;
        }
        .p-card:hover { transform: translateY(-10px); }
        .p-card h3 { font-size: 1.5rem; font-weight: 900; margin-bottom: 16px; text-transform: uppercase; }
        .p-card p { color: #64748b; line-height: 1.6; font-weight: 500; }

        .p-green-section { background: var(--p-green); color: white; padding: 100px 0; text-align: center; }
        .p-green-section h2 { font-size: 3rem; font-weight: 900; margin-bottom: 40px; text-transform: uppercase; letter-spacing: -0.04em; }

        .p-footer { background: black; color: white; padding: 80px 0; text-align: center; }
        .p-footer-logo { display: inline-block; background: white; padding: 4px; border-radius: 100%; margin-bottom: 24px; }
      `,
        }}
      />

      {/* Navigation */}
      <nav
        className={`p-nav ${scrolled || currentPage !== "home" ? "p-nav-scrolled" : "p-nav-transparent"}`}
      >
        <div className="p-container p-flex-between">
          <div
            onClick={() => setCurrentPage("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            <DoctorBirdLogo size={scrolled ? 48 : 58} />
            <span
              className="p-brand-text"
              style={{
                color: scrolled || currentPage !== "home" ? "black" : "white",
              }}
            >
              THE PRODIGAL
            </span>
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            {["home", "insights", "community"].map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                style={{
                  background: "none",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textTransform: "capitalize",
                  color:
                    scrolled || currentPage !== "home"
                      ? "#475569"
                      : "rgba(255,255,255,0.8)",
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="p-btn-consult">Consultation</button>
        </div>
      </nav>

      <main>
        {currentPage === "home" && (
          <>
            {/* Hero */}
            <section className="p-hero">
              <div className="p-hero-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1920"
                className="p-hero-img"
                alt="Jamaica"
              />
              <div className="p-hero-content animate-fade">
                <div className="p-badge">
                  <Award
                    size={14}
                    style={{ color: "var(--p-gold)", marginRight: "8px" }}
                  />
                  Diaspora Reintegration Experts
                </div>
                <h1 className="p-title">
                  THE <span style={{ color: "var(--p-gold)" }}>PRODIGAL.</span>
                </h1>
                <p className="p-desc">
                  Monetize your global expertise in the land that birthed you.
                  Retire into <strong>purpose.</strong>
                </p>
                <button
                  onClick={() => setCurrentPage("community")}
                  style={{
                    background: "white",
                    color: "black",
                    padding: "20px 48px",
                    borderRadius: "24px",
                    fontWeight: 900,
                    fontSize: "1.25rem",
                  }}
                >
                  Join Community
                </button>
              </div>
            </section>

            {/* Features */}
            <div className="p-container">
              <section className="p-features">
                <div className="p-card">
                  <TrendingUp
                    size={48}
                    style={{ color: "var(--p-green)", marginBottom: "24px" }}
                  />
                  <h3>Monetize Skills</h3>
                  <p>
                    Export international SOPs to Jamaican growth sectors like
                    Agribusiness and KPO.
                  </p>
                </div>
                <div className="p-card">
                  <Shield
                    size={48}
                    style={{ color: "var(--p-gold)", marginBottom: "24px" }}
                  />
                  <h3>Risk Mitigation</h3>
                  <p>
                    Navigate Customs and Land Titles with expert oversight and
                    verified local partnerships.
                  </p>
                </div>
                <div className="p-card">
                  <Users
                    size={48}
                    style={{ color: "#1d4ed8", marginBottom: "24px" }}
                  />
                  <h3>Peer Network</h3>
                  <p>
                    Connect with a verified community of fellow returnees
                    sharing real-time leads.
                  </p>
                </div>
              </section>
            </div>

            {/* Green Section */}
            <section className="p-green-section">
              <div className="p-container">
                <h2>
                  Your expertise is Jamaica's <br />
                  competitive advantage.
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "32px",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "32px",
                      borderRadius: "24px",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <CheckCircle
                      size={24}
                      style={{ color: "var(--p-gold)", marginBottom: "16px" }}
                    />
                    <p
                      style={{
                        fontWeight: 800,
                        fontSize: "1.25rem",
                        marginBottom: "8px",
                      }}
                    >
                      Maximize RR Concessions
                    </p>
                    <p style={{ opacity: 0.8, fontSize: "0.9rem" }}>
                      Bring in your professional "Tools of Trade" duty-free to
                      kickstart your local venture.
                    </p>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "32px",
                      borderRadius: "24px",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <CheckCircle
                      size={24}
                      style={{ color: "var(--p-gold)", marginBottom: "16px" }}
                    />
                    <p
                      style={{
                        fontWeight: 800,
                        fontSize: "1.25rem",
                        marginBottom: "8px",
                      }}
                    >
                      Wealth Preservation
                    </p>
                    <p style={{ opacity: 0.8, fontSize: "0.9rem" }}>
                      Navigate the JSE to ensure your capital works as hard as
                      you did overseas.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="p-footer">
        <div className="p-footer-logo">
          <DoctorBirdLogo size={80} />
        </div>
        <div className="p-brand-text" style={{ fontSize: "2rem" }}>
          THE PRODIGAL
        </div>
        <p
          style={{
            color: "#64748b",
            fontSize: "0.75rem",
            marginTop: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
          }}
        >
          Jamaica &copy; 2025
        </p>
      </footer>
    </div>
  );
};

export default App;
