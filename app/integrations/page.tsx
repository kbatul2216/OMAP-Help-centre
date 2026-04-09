import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function IntegrationsOverviewPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Integration — Overview</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">🔗 Integration</div><h1>Integration — Overview</h1><p>Connect MRM, CRM, and storage systems to OMAP so your agents can access real-time data. Navigate to Settings → Integration to get started.</p></div>
      <div className="sbox"><div className="sbox-title">Available integration categories</div><div className="sbox-sub">Three types of external system connections.</div>
        <div className="cards-row">
          <div className="card"><div className="card-ico" style={{ background: "#FDEAED" }}>🏥</div><h3>MRMs</h3><p>Member Relationship Management systems (ABC Ignite, Daxko, Club Automation)</p></div>
          <div className="card"><div className="card-ico" style={{ background: "var(--blue-l)" }}>📊</div><h3>CRMs</h3><p>Customer Relationship Management platforms</p></div>
          <div className="card"><div className="card-ico" style={{ background: "var(--green-l)" }}>💾</div><h3>Storage</h3><p>Document and file storage systems</p></div>
        </div>
        <div className="alert a-info"><span className="a-ico">💡</span><div>Configure MRM integrations first — they unlock advanced features across Concierge, Collections, and Member Audit agents simultaneously.</div></div>
      </div>
      <Feedback />
    </>
  );
}
