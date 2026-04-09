import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function ConciergeDashboardPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcs">Analytics</span><span className="bcs">/</span><span className="bcc">Dashboard</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">📈 Analytics</div><h1>Concierge Agent — Analytics Dashboard</h1><p>Monitor your agent&apos;s performance, conversation volume, member satisfaction, and knowledge base coverage over time.</p></div>
      <div className="sbox"><div className="sbox-title">Key metrics</div><div className="sbox-sub">What the dashboard tracks.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", margin: "10px 0" }}>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--teal)" }}>1,284</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Total Conversations</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--green)" }}>92%</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Resolution Rate</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--amber)" }}>4.2</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Avg. Messages</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--crimson)" }}>4.7★</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Avg. Rating</div></div>
        </div>
        <p className="ov-p" style={{ marginTop: "12px" }}>The dashboard also shows top member questions, knowledge base coverage gaps, conversation trends over time, and sentiment distribution (positive / neutral / negative).</p>
      </div>
      <Feedback />
    </>
  );
}
