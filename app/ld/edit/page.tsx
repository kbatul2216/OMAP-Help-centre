import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function LdEditPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/ld" className="bcl">L&amp;D Agent</Link><span className="bcs">/</span><span className="bcc">Edit Agent</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">✏️ Edit Agent</div><h1>Edit L&amp;D Agent</h1><p>Update the agent profile, response guidelines, or document set at any time. Re-deploy to apply changes.</p></div>
      <div className="sbox"><div className="sbox-title">How to edit</div><div className="sbox-sub">Edit and re-deploy to update the agent.</div>
        <p className="ov-p">Use Edit Agent from the sidebar to update profile settings (Step 1) or upload/remove documents (Step 2). After making changes, click <strong>Deploy</strong> again. The system reprocesses documents and creates an updated agent version.</p>
      </div>
      <div className="page-nav">
        <Link href="/ld/chat" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">L&amp;D Chat</div></Link>
        <Link href="/ld/logs" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Conversation Logs</div></Link>
      </div>
      <Feedback />
    </>
  );
}
