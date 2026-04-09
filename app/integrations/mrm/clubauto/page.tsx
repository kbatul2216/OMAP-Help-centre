import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function IntClubAutoPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/integrations" className="bcl">Integration</Link><span className="bcs">/</span><span className="bcs">MRMs</span><span className="bcs">/</span><span className="bcc">Club Automation</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">🔗 Club Automation V2</div><h1>Club Automation V2 Integration</h1><p>Secure authorization-based MRM connection with internal review and approval before activation. Follows the same flow as Daxko Operations.</p></div>
      <div className="sbox"><div className="sbox-title">Connection flow</div><div className="sbox-sub">Submit authorization → Wait for approval → Manage clubs.</div>
        <p className="ov-p">Click Connect on the Club Automation V2 card. Review and sign the authorization form, then click <strong>Send Request</strong>. The status changes to Under Review. Once the internal team approves, status becomes Connected and you can manage clubs via the View page — toggle, filter, and Resync as needed.</p>
        <div className="alert a-danger"><span className="a-ico">⛔</span><div><strong>Disconnecting is permanent.</strong> It removes all associated data. A confirmation popup appears before deletion. Other MRM connectors become available again after disconnect.</div></div>
      </div>
      <Feedback />
    </>
  );
}
