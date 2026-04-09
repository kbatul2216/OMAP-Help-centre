import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function AuditConfigurePage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/audit" className="bcl">Member Audit Agent</Link><span className="bcs">/</span><span className="bcc">Configure Member Audit</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">⚙️ Configure</div><h1>Configure Member Audit</h1><p>Three-step setup: agent profile, club selection, and audit frequency. After configuration, click Create Dashboard and data will be available in 48–72 hours.</p></div>
      <div className="sbox"><div className="sbox-title">Configuration — 3 steps</div><div className="sbox-sub">Complete in order.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Agent Profile</div><div className="sd"><p>Upload an image, set a name and tagline for this audit instance.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Select Club Locations</div><div className="sd"><p>Your MRM auto-populates available clubs. Select one or more clubs to define the audit scope. Only clubs with active toggles in Integration appear here.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Set Audit Frequency &amp; Create Dashboard</div><div className="sd"><p>Choose <strong>Monthly</strong> (specific day of month) or <strong>Every 2 Weeks</strong> (specific day of week). Click <strong>Create Dashboard</strong>. Data available in 48–72 hours.</p>
          <div className="alert a-warn"><span className="a-ico">⚠️</span><div>After editing club selection or frequency, the dashboard fully reprocesses — expect another 48–72 hour wait.</div></div>
        </div></div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs</div><div className="faq-sub">Common questions</div>
        <FaqItem question="Why does the dashboard take 48–72 hours?">The system needs this time to configure audit rules, fetch all member data from your MRM, validate it against compliance logic, and prepare the dashboard. This is a one-time processing window per configuration change.</FaqItem>
      </div>
      <div className="page-nav">
        <Link href="/audit" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Overview</div></Link>
        <Link href="/audit/dashboard" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Audit Dashboard</div></Link>
      </div>
      <Feedback />
    </>
  );
}
