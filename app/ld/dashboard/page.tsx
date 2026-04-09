import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function LdDashboardPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/ld" className="bcl">L&amp;D Agent</Link><span className="bcs">/</span><span className="bcs">Analytics</span><span className="bcs">/</span><span className="bcc">Dashboard</span></div>
      <div className="hero teal-h"><div className="hero-badge hb-brand">📈 Analytics</div><h1>L&amp;D Analytics Dashboard</h1><p>Track usage, popular topics, member engagement, and knowledge base coverage across your internal training agent.</p></div>
      <div className="sbox"><div className="sbox-title">Key metrics</div><div className="sbox-sub">What the dashboard shows.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", margin: "10px 0" }}>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--teal)" }}>342</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Sessions</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--green)" }}>28</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Active Members</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--amber)" }}>87%</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Answer Rate</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--crimson)" }}>15</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Docs Active</div></div>
        </div>
      </div>
      <Feedback />
    </>
  );
}
