import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function LdStep1Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/ld" className="bcl">L&amp;D Agent</Link><span className="bcs">/</span><span className="bcs">Create an Agent</span><span className="bcs">/</span><span className="bcc">Step 1: Agent Profile</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">Step 1 of 2</div><h1>Agent Profile</h1><p>Set a name, tagline, and response guidelines for your L&amp;D Agent. This controls how the agent identifies itself and how it structures its answers.</p></div>
      <div className="sbox"><div className="sbox-title">Configuration</div><div className="sbox-sub">Fields in Step 1.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Agent Name &amp; Tagline</div><div className="sd"><p>Give your agent a recognizable name (e.g. &quot;HR Training Hub&quot;) and a short tagline describing its purpose.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Response Guidelines</div><div className="sd"><p>Write rules that control how the agent formats answers. Example: &quot;Always cite the source document. Keep answers under 100 words unless asked for more.&quot;</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Disclaimer Note (optional)</div><div className="sd"><p>Add an optional disclaimer to remind users that AI responses should be verified for critical decisions.</p></div></div></div>
      </div>
      <div className="page-nav">
        <Link href="/ld" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Overview</div></Link>
        <Link href="/ld/create/step-2" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 2: Knowledge Base</div></Link>
      </div>
      <Feedback />
    </>
  );
}
