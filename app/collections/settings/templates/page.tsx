import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsTemplatesPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Templates</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">📧 Templates</div><h1>Email Templates</h1><p>Edit the outreach email&apos;s content, branding, subject, and dynamic variables after the agent is deployed.</p></div>
      <div className="sbox"><div className="sbox-title">Editing the template</div><div className="sbox-sub">Settings → Templates → Edit → Update.</div>
        <p className="ov-p">Update the From Email, Subject, Primary Color, or Email Body. Insert or remove variables as needed. Preview the result live on the right side before clicking <strong>Update</strong>. Changes take effect for all future outreach emails.</p>
      </div>
      <Feedback />
    </>
  );
}
