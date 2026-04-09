import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function LdStep2Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/ld" className="bcl">L&amp;D Agent</Link><span className="bcs">/</span><span className="bcs">Create an Agent</span><span className="bcs">/</span><span className="bcc">Step 2: Knowledge Base</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">Step 2 of 2</div><h1>Agent Knowledge Base</h1><p>Upload all training documents the agent will use to answer questions. After uploading, click Deploy to create the agent.</p></div>
      <div className="sbox"><div className="sbox-title">Upload and deploy</div><div className="sbox-sub">Supported formats: PDF · DOCX · Excel · CSV · PPT · TXT · JSON</div>
        <p className="ov-p">Upload all relevant internal training files. After uploading, review the file list and remove any outdated documents. Click <strong>Deploy</strong> — the platform processes documents through two stages (Agent Persona → Knowledge Base) and shows a progress screen. A congratulations popup confirms the agent is ready.</p>
        <div className="alert a-warn"><span className="a-ico">⚠️</span><div>Use text-based PDFs, not scanned images. Image-based PDFs cannot be parsed and won&apos;t contribute to the agent&apos;s knowledge.</div></div>
      </div>
      <div className="page-nav">
        <Link href="/ld/create/step-1" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Step 1: Agent Profile</div></Link>
        <Link href="/ld/chat" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">L&amp;D Chat</div></Link>
      </div>
      <Feedback />
    </>
  );
}
