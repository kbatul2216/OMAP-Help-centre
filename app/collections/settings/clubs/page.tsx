import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsClubsPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Club Locations</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">🏢 Club Locations</div><h1>Club Locations</h1><p>Control which clubs are included in outreach campaigns — enable or disable clubs individually or use the Enable All toggle for bulk action.</p></div>
      <div className="sbox"><div className="sbox-title">Managing club outreach</div><div className="sbox-sub">Toggle clubs on or off at any time.</div>
        <p className="ov-p">Enabled clubs have outreach emails sent for their past-due members. Disabled clubs are completely excluded from all outreach. Changes take effect immediately. Use the search bar to find specific clubs in large lists.</p>
      </div>
      <Feedback />
    </>
  );
}
