import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsDashboardPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcs">Analytics</span><span className="bcs">/</span><span className="bcc">Dashboard</span></div>
      <div className="hero brand"><div className="hero-badge hb-brand">📊 Analytics</div><h1>Collections Dashboard</h1><p>Monitor outstanding balances, email engagement, agent-influenced payments, and collection trends over time.</p></div>
      <div className="sbox"><div className="sbox-title">Key metrics</div><div className="sbox-sub">Dashboard overview.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", margin: "10px 0" }}>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "18px", fontWeight: 800, color: "var(--crimson)" }}>$48,200</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Total Outstanding</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "18px", fontWeight: 800, color: "var(--green)" }}>$12,400</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Via Agent</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "18px", fontWeight: 800, color: "var(--amber)" }}>63%</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Open Rate</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "18px", fontWeight: 800, color: "var(--blue)" }}>841</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Emails Sent</div></div>
        </div>
      </div>
      <Feedback />
    </>
  );
}
