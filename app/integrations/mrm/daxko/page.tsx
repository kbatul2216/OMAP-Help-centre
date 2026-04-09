import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function IntDaxkoPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/integrations" className="bcl">Integration</Link><span className="bcs">/</span><span className="bcs">MRMs</span><span className="bcs">/</span><span className="bcc">Daxko Operations</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">🔗 Daxko Operations</div><h1>Daxko Operations Integration</h1><p>Authorization-only flow — no direct API credentials required. Submit a signed authorization request and the internal team handles configuration.</p></div>
      <div className="sbox"><div className="sbox-title">Connection flow</div><div className="sbox-sub">Authorization → Review → Connected.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Send authorization request</div><div className="sd"><p>Click Connect → review the Daxko authorization form → click <strong>Send Request</strong>. A signed PDF is auto-generated and emailed to the internal team. The email is sent once per request.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Under Review state</div><div className="sd"><p>Only the Daxko card is visible. All other MRM connectors are hidden. Status shows &quot;Under Review&quot;. Disconnect is available if needed.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Connected state</div><div className="sd"><p>Status changes to Connected. Click View to manage Club IDs — toggle ON/OFF, filter by status (All / Connected / Under Review), or Resync to fetch the latest club list.</p></div></div></div>
      </div>
      <Feedback />
    </>
  );
}
