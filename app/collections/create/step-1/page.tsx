import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsStep1Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcc">Step 1: Agent UI</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">Step 1 of 3</div><h1>Step 1 — Agent User Interface</h1><p>Set the agent&apos;s name, tagline, logo, and select which clubs participate in collections outreach using individual toggle switches.</p></div>
      <div className="sbox"><div className="sbox-title">What to configure</div><div className="sbox-sub">Agent identity and club selection.</div>
        <p className="ov-p">Upload a logo, name the agent, and add a tagline. Under the MRM section, your connected clubs appear with individual outreach toggles — enable clubs that should receive reminders and disable any that shouldn&apos;t. Click <strong>Next</strong> to proceed to outreach rules.</p>
      </div>
      <div className="page-nav">
        <Link href="/collections" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Overview</div></Link>
        <Link href="/collections/create/step-2" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 2: Outreach Config</div></Link>
      </div>
      <Feedback />
    </>
  );
}
