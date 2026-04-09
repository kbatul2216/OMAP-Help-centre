import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function BillingPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Billing &amp; Subscription</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">💳 Billing</div><h1>Billing &amp; Subscription</h1><p>Monitor your current plan usage and upgrade to keep agents running without interruption.</p></div>
      <div className="sbox"><div className="sbox-title">Available plans</div><div className="sbox-sub">Click Upgrade Plan to see all options.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", margin: "14px 0" }}>
          <div style={{ border: "1.5px solid var(--border)", borderRadius: "var(--r12)", padding: "16px", background: "var(--surface)", textAlign: "center" }}><div style={{ fontSize: "13px", fontWeight: 800, color: "var(--txt-head)", marginBottom: "4px" }}>Value</div><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--txt-head)" }}>$99<span style={{ fontSize: "12px", fontWeight: 400, color: "var(--txt-muted)" }}>/mo</span></div><div style={{ fontSize: "11px", color: "var(--txt-meta)", marginTop: "4px" }}>Quarterly · Up to 5 chats</div></div>
          <div style={{ border: "2px solid var(--crimson)", borderRadius: "var(--r12)", padding: "16px", background: "var(--surface)", textAlign: "center", position: "relative" }}><div className="tag tc" style={{ marginBottom: "6px", fontSize: "10px" }}>Popular</div><div style={{ fontSize: "13px", fontWeight: 800, color: "var(--txt-head)", marginBottom: "4px" }}>Growth</div><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--txt-head)" }}>$199<span style={{ fontSize: "12px", fontWeight: 400, color: "var(--txt-muted)" }}>/mo</span></div><div style={{ fontSize: "11px", color: "var(--txt-meta)", marginTop: "4px" }}>Quarterly · Up to 10 chats</div></div>
          <div style={{ border: "1.5px solid var(--border)", borderRadius: "var(--r12)", padding: "16px", background: "var(--surface)", textAlign: "center" }}><div style={{ fontSize: "13px", fontWeight: 800, color: "var(--txt-head)", marginBottom: "4px" }}>Scale</div><div style={{ fontSize: "20px", fontWeight: 800, color: "var(--txt-head)" }}>$499<span style={{ fontSize: "12px", fontWeight: 400, color: "var(--txt-muted)" }}>/mo</span></div><div style={{ fontSize: "11px", color: "var(--txt-meta)", marginTop: "4px" }}>Quarterly · Up to 15 chats</div></div>
          <div style={{ borderRadius: "var(--r12)", padding: "16px", background: "linear-gradient(135deg,#062E28,#3D1A3A)", textAlign: "center" }}><div style={{ fontSize: "13px", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>Enterprise</div><div style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>Custom</div><div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>Contact ALTA·DX</div></div>
        </div>
        <div className="alert a-danger"><span className="a-ico">⚠️</span><div><strong>Critical:</strong> Exceeding your plan limit stops the agent immediately with no warning to members. Monitor usage and upgrade before reaching the limit.</div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs</div><div className="faq-sub">Common questions</div>
        <FaqItem question="My agent stopped responding — billing issue?">Check your usage bar in Settings → Billing. At 100%, upgrade immediately. The agent resumes as soon as the upgrade is processed.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
