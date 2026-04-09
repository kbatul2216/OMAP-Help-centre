import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="hero brand" style={{ minHeight: "190px" }}>
        <div className="hero-badge hb-brand">OMAP™ by ALTA·DX</div>
        <h1>Welcome to the OMAP Help Center</h1>
        <p>OMAP (Outcomes Micro-Agent Platform) helps you create, deploy, and manage intelligent AI agents tailored to your business needs. Whether you&apos;re setting up your first agent or managing a full team, you&apos;ll find everything you need right here.</p>
      </div>

      {/* FAQ & How-To */}
      <div className="sbox" style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div className="sbox-title">FAQ &amp; How-To Center</div>
            <p style={{ fontSize: "var(--fs-body)", color: "var(--txt-meta)", marginTop: "6px", lineHeight: "var(--lh-body)" }}>Find answers to common questions, step-by-step guides for every feature, and troubleshooting help for any issue you encounter.</p>
          </div>
          <div style={{ flexShrink: 0, alignSelf: "center" }}>
            <Link href="/faq" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--crimson)", color: "#fff", fontSize: "var(--fs-small)", fontWeight: 700, padding: "9px 20px", borderRadius: "var(--r8)", cursor: "pointer", letterSpacing: ".02em", textDecoration: "none" }}>Explore FAQs →</Link>
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div style={{ fontSize: "10px", fontWeight: 800, color: "var(--txt-muted)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: ".08em" }}>Quick Start Guide</div>
      <p style={{ fontSize: "var(--fs-small)", color: "var(--txt-meta)", marginBottom: "14px", fontWeight: 500 }}>New to OMAP? Start here. These six topics cover everything you need to get up and running quickly.</p>
      <div className="home-grid" style={{ marginBottom: "24px" }}>
        <Link href="/getting-started" className="hcard">
          <h3>Getting Started</h3>
          <p>Learn how to sign up, log in, and navigate the OMAP platform for the first time.</p>
          <span className="hcard-arr">→ View guide</span>
        </Link>
        <Link href="/concierge/create/step-1" className="hcard">
          <h3>Create an Agent</h3>
          <p>Step-by-step guide to building your first AI agent — from setup to configuration.</p>
          <span className="hcard-arr">→ View guide</span>
        </Link>
        <Link href="/concierge/deploy" className="hcard">
          <h3>Test &amp; Deploy</h3>
          <p>Test your agent in sandbox mode and deploy it live to your website with one script tag.</p>
          <span className="hcard-arr">→ View guide</span>
        </Link>
        <Link href="/concierge/dashboard" className="hcard">
          <h3>Analytics</h3>
          <p>Monitor agent performance, conversation trends, and member satisfaction with built-in dashboards.</p>
          <span className="hcard-arr">→ View guide</span>
        </Link>
        <Link href="/settings/users" className="hcard">
          <h3>User Management</h3>
          <p>Invite team members, assign roles, and control access across your OMAP workspace.</p>
          <span className="hcard-arr">→ View guide</span>
        </Link>
        <Link href="/concierge/settings/refresh" className="hcard">
          <h3>Settings</h3>
          <p>Configure your agent&apos;s knowledge base, API integrations, version history, and refresh schedule.</p>
          <span className="hcard-arr">→ View guide</span>
        </Link>
      </div>

      {/* Support CTA */}
      <div className="sbox" style={{ background: "linear-gradient(135deg,rgba(10,94,90,0.05),rgba(176,21,48,0.05))", borderColor: "rgba(176,21,48,.15)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <div className="sbox-title">Still Looking for Support?</div>
          <p style={{ fontSize: "var(--fs-body)", color: "var(--txt-meta)", marginTop: "6px", lineHeight: "var(--lh-body)" }}>Our team is here to help. If you can&apos;t find what you&apos;re looking for in the Help Center, book a quick meeting with an ALTA·DX specialist and we&apos;ll get you sorted.</p>
        </div>
        <div style={{ flexShrink: 0, alignSelf: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--teal)", color: "#fff", fontSize: "var(--fs-small)", fontWeight: 700, padding: "9px 20px", borderRadius: "var(--r8)", cursor: "pointer", letterSpacing: ".02em" }}>Book a Quick Meeting →</div>
        </div>
      </div>
    </>
  );
}
