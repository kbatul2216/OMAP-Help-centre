import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsOutreachPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Outreach</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">⚙️ Outreach Settings</div><h1>Outreach Settings</h1><p>Update all email delivery rules after the agent is deployed — schedule, delivery window, pause/resume rules, excluded statuses, and invoice age filters.</p></div>
      <div className="sbox"><div className="sbox-title">Updating outreach rules</div><div className="sbox-sub">Navigate to Settings → Outreach.</div>
        <p className="ov-p">Modify any outreach field and click <strong>Save</strong>. Changes apply immediately to future outreach runs. Previously scheduled emails in the current cycle are not affected.</p>
      </div>
      <Feedback />
    </>
  );
}
