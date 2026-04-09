import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeOverviewPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcc">Concierge Agent</span></div>
      <div className="hero brand"><div className="hero-badge hb-brand">🤝 Concierge Agent</div><h1>Concierge Agent — Overview</h1><p>Your AI-powered virtual front desk. Answers member questions 24/7 about memberships, schedules, billing, and policies. Supports text and optional voice in English, Spanish, and French.</p><div className="hero-meta"><div className="hero-meta-item">📋 <strong>4 setup steps</strong></div><div className="hero-meta-item">⏱ <strong>~15 min</strong></div><div className="hero-meta-item">🔗 <strong>MRM optional</strong></div></div></div>

      <div className="sbox"><div className="sbox-title">What is the Concierge Agent?</div><div className="sbox-sub">Purpose and core capabilities</div>
        <p className="ov-p">The Concierge Agent is an <strong>AI-powered virtual assistant</strong> designed to support your members by answering questions, guiding them to the right information, and improving their overall experience.</p>
        <p className="ov-p">It acts like a <strong>digital front-desk assistant</strong> for your business. Instead of relying only on staff to answer repeated questions, the Concierge Agent can respond instantly through chat and, when enabled, voice.</p>
        <p className="ov-p">The agent is built to understand your business information and use it to help members with common requests such as memberships, schedules, billing-related questions, club policies, and general support.</p>
        <div className="cards-row">
          <div className="card"><div className="card-ico" style={{ background: "#FDEAED" }}>⏰</div><h3>Always available</h3><p>24/7 without staff involvement</p></div>
          <div className="card"><div className="card-ico" style={{ background: "var(--teal-l)" }}>🎙️</div><h3>Voice mode</h3><p>Optional voice interaction</p></div>
          <div className="card"><div className="card-ico" style={{ background: "#EEEEFF" }}>🌍</div><h3>Multilingual</h3><p>English, Spanish &amp; French</p></div>
          <div className="card"><div className="card-ico" style={{ background: "#FEF3C7" }}>🔗</div><h3>MRM-powered</h3><p>Real-time member data</p></div>
        </div>
      </div>

      <div className="sbox"><div className="sbox-title">What does the Concierge Agent do?</div><div className="sbox-sub">Automates routine member conversations while keeping the experience personal and helpful</div>
        <p className="ov-p">The Concierge Agent helps your organization by automating routine member conversations while keeping the experience personal and helpful.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "12px" }}>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--txt-sub)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: ".05em" }}>It can help with</div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>✓</span>Membership-related questions</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>✓</span>Pricing and plan information</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>✓</span>Class schedules</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>✓</span>Club hours</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>✓</span>Policies and FAQs</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>✓</span>General support and guidance</li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--txt-sub)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: ".05em" }}>Key benefits</div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--crimson)", fontWeight: 700, flexShrink: 0 }}>→</span>Reduces front-desk workload</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--crimson)", fontWeight: 700, flexShrink: 0 }}>→</span>Improves response speed</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--crimson)", fontWeight: 700, flexShrink: 0 }}>→</span>Delivers consistent answers</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--crimson)", fontWeight: 700, flexShrink: 0 }}>→</span>Supports members 24/7</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px" }}><span style={{ color: "var(--crimson)", fontWeight: 700, flexShrink: 0 }}>→</span>Creates a more modern support experience</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: "16px", padding: "12px 16px", background: "var(--teal-l)", borderRadius: "var(--r8)", borderLeft: "3px solid var(--teal)", fontSize: "13px", color: "var(--teal-d)" }}>
          <strong>Think of the Concierge Agent as your AI-powered receptionist</strong> — always available to assist your members without requiring staff to step in for routine questions.
        </div>
      </div>

      <div className="sbox"><div className="sbox-title">Creation flow summary</div><div className="sbox-sub">4 steps to go from setup to live deployment.</div>
        <table className="tbl"><thead><tr><th>Step</th><th>What you configure</th></tr></thead><tbody>
          <tr><td><span className="tag tc">Step 1</span> User Interface</td><td>Agent name, logo, colors, welcome message — visual identity</td></tr>
          <tr><td><span className="tag tc">Step 2</span> Agent Behavior</td><td>Tone, greeting, language, voice mode, response guidelines</td></tr>
          <tr><td><span className="tag tc">Step 3</span> Knowledge Base</td><td>Website URLs and uploaded documents that power answers</td></tr>
          <tr><td><span className="tag tc">Step 4</span> Deployment</td><td>Generate widget code, paste into website, go live</td></tr>
        </tbody></table>
      </div>

      <div className="faq-section"><div className="faq-title">❓ FAQs — Concierge Agent</div><div className="faq-sub">General questions about the Concierge Agent</div>
        <FaqItem question="Does the Concierge Agent work without an MRM?">Yes — it answers general questions from its knowledge base (website content and documents) without any MRM. MRM is only needed for account-specific features like billing lookups and membership queries.</FaqItem>
        <FaqItem question="What languages does it support?">English (default), Spanish, and French. You can enable multiple languages in Step 2 (Agent Behavior). Voice mode also supports all three languages.</FaqItem>
        <FaqItem question="Can I update the agent after it's deployed?">Yes — use Edit Agent from the sidebar. Changes create a new draft. Use Version History to compare and publish when ready. The live agent updates immediately after publishing.</FaqItem>
      </div>

      <div className="page-nav">
        <Link href="/concierge/create/step-1" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 1: User Interface</div></Link>
      </div>
      <Feedback />
    </>
  );
}
