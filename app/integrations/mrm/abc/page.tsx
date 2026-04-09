import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function IntAbcPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/integrations" className="bcl">Integration</Link><span className="bcs">/</span><span className="bcs">MRMs</span><span className="bcs">/</span><span className="bcc">ABC Ignite</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">🔗 ABC Ignite</div><h1>ABC Ignite Integration</h1><p>Two connection paths depending on whether you already have an App ID and App Key.</p></div>
      <div className="sbox"><div className="sbox-title">Two connection flows</div><div className="sbox-sub">Select the appropriate path based on your credentials.</div>
        <div className="flow-grid">
          <div className="flow-card yes"><h4>✅ YES — I have credentials</h4><p>Enter App ID + App Key (masked). Add Club IDs as chips. Click Test Connection. Green chips = connected, Yellow = under review, Red = failed. Fix red chips and re-test. Click Connect when all pass.</p></div>
          <div className="flow-card no"><h4>🔄 NO — I need authorization</h4><p>Enter Club IDs. Click Authorize. Complete the ABC Fitness authorization form (org name, vendor, Club IDs, access type). Click Send Request. Status shows &quot;Under Review&quot; until approved by the internal team.</p></div>
        </div>
        <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "var(--r8)", overflow: "hidden", marginTop: "8px" }}>
          <div style={{ padding: "8px 14px", fontSize: "10px", fontWeight: 800, color: "var(--txt-muted)", textTransform: "uppercase", letterSpacing: ".06em", borderBottom: "1.5px solid var(--border)" }}>Club ID chip status</div>
          <div className="status-row"><div className="sdot" style={{ background: "var(--green)" }}></div><span className="tag tg" style={{ minWidth: "82px" }}>Green</span><span style={{ marginLeft: "12px", fontSize: "13px", color: "var(--txt)", fontWeight: 500 }}>Successfully verified and active</span></div>
          <div className="status-row"><div className="sdot" style={{ background: "var(--amber)" }}></div><span className="tag ta" style={{ minWidth: "82px" }}>Yellow</span><span style={{ marginLeft: "12px", fontSize: "13px", color: "var(--txt)", fontWeight: 500 }}>Pending validation — check back shortly</span></div>
          <div className="status-row"><div className="sdot" style={{ background: "var(--red)" }}></div><span className="tag tr" style={{ minWidth: "82px" }}>Red</span><span style={{ marginLeft: "12px", fontSize: "13px", color: "var(--txt)", fontWeight: 500 }}>Remove chip, verify ID, and re-test</span></div>
        </div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — ABC Ignite</div><div className="faq-sub">Common questions</div>
        <FaqItem question="A Club ID chip turned red — what do I do?">Remove the red chip by clicking X, verify the Club ID with your MRM provider, re-enter it, and click Test Connection again.</FaqItem>
        <FaqItem question="What does Resync do?">Resync fetches the latest club list from ABC Ignite and adds newly created clubs without removing existing ones or changing toggle states.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
