import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsStep3Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcc">Step 3: Email Template</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">Step 3 of 3</div><h1>Step 3 — Email Template</h1><p>Design the reminder email — logo, sender address, subject, primary color, and body with dynamic member variables. Use Generate with AI for instant drafting.</p></div>
      <div className="sbox"><div className="sbox-title">Building the email template</div><div className="sbox-sub">Personalize every email automatically with variables.</div>
        <p className="ov-p">The template editor supports dynamic variables that auto-populate with member data at send time:</p>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", margin: "8px 0" }}><span className="chip">{"{{Name}}"}</span><span className="chip">{"{{Gym Name}}"}</span><span className="chip">{"{{Amount Due}}"}</span><span className="chip">{"{{Membership Type}}"}</span><span className="chip">{"{{Home Club}}"}</span><span className="chip">{"{{Barcode}}"}</span><span className="chip">{"{{Email}}"}</span></div>
        <p className="ov-p" style={{ marginTop: "10px" }}>A live Email Preview on the right shows the email with all variables substituted and your branding applied. Click <strong>Deploy</strong> when satisfied.</p>
      </div>
      <div className="page-nav">
        <Link href="/collections/create/step-2" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Step 2: Outreach Config</div></Link>
        <Link href="/collections/past-dues" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Past Dues</div></Link>
      </div>
      <Feedback />
    </>
  );
}
