import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function IntStoragePage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/integrations" className="bcl">Integration</Link><span className="bcs">/</span><span className="bcc">Storage</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">💾 Storage</div><h1>Storage Integrations</h1><p>Connect external document and file storage systems to use files directly from cloud storage as knowledge base sources for your agents.</p></div>
      <div className="sbox"><div className="sbox-title">Supported storage systems</div><div className="sbox-sub">Connect cloud storage for seamless file access.</div>
        <p className="ov-p">Storage integrations allow agents to pull documents directly from connected cloud storage providers (e.g. Google Drive, Dropbox, SharePoint). Once connected, files from these sources can be added to the Knowledge Base without manual upload. Contact ALTA·DX for availability on your plan.</p>
      </div>
      <Feedback />
    </>
  );
}
