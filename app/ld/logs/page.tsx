import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function LdLogsPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/ld" className="bcl">L&amp;D Agent</Link><span className="bcs">/</span><span className="bcc">Conversation Logs</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">💬 Conversation Logs</div><h1>L&amp;D Conversation Logs</h1><p>Review all team member conversations — see what was asked, how the agent responded, and which source documents were referenced.</p></div>
      <div className="sbox"><div className="sbox-title">What to review</div><div className="sbox-sub">Session details and source attribution.</div>
        <p className="ov-p">Each session shows date, session ID, duration, and message count. Clicking a session opens the full transcript with agent responses and which source documents were cited. Use this to identify knowledge gaps and improve document coverage.</p>
      </div>
      <div className="page-nav">
        <Link href="/ld/edit" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Edit Agent</div></Link>
        <Link href="/ld/settings/invite" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Invite Members</div></Link>
      </div>
      <Feedback />
    </>
  );
}
