import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function LdInvitePage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/ld" className="bcl">L&amp;D Agent</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Invite Members</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">👥 Invite Members</div><h1>Invite Members</h1><p>Grant your team access to the L&amp;D Agent by sending email invitations — individually or in bulk via CSV upload.</p></div>
      <div className="sbox"><div className="sbox-title">How to invite</div><div className="sbox-sub">Two methods: manual email entry or CSV bulk upload.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Click Add Member</div><div className="sd"><p>From Settings → Invite Members, click <strong>Add Member</strong> to open the invitation flow.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Add emails manually or upload CSV</div><div className="sd"><p>Enter emails one by one, or drag and drop a CSV file with multiple addresses for bulk invitations.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Click Send Email</div><div className="sd"><p>Invitations are dispatched. Recipients are taken to the L&amp;D Chat interface once they accept.</p></div></div></div>
      </div>
      <div className="page-nav">
        <Link href="/ld/logs" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Conversation Logs</div></Link>
        <Link href="/ld/dashboard" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Analytics Dashboard</div></Link>
      </div>
      <Feedback />
    </>
  );
}
