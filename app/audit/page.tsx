import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function AuditOverviewPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcc">Member Audit Agent — Overview</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">📊 Member Audit Agent</div><h1>Member Audit Agent</h1><p>Monitors member data compliance across clubs. Generates a centralized audit dashboard with anomaly detection, compliance rates, and efficiency metrics. MRM required.</p></div>
      <div className="alert a-danger"><span className="a-ico">⛔</span><div><strong>MRM required:</strong> Connect an MRM under Settings → Integration before creating this agent.</div></div>
      <div className="sbox"><div className="sbox-title">What the Member Audit Agent does</div><div className="sbox-sub">Automated compliance monitoring at scale.</div>
        <p className="ov-p">The Member Audit Agent automatically processes member data from your MRM according to configurable audit rules. It detects anomalies (dues out of range, invalid fees, billing issues), tracks compliance rates per club, and surfaces everything in a centralized dashboard — saving hours of manual data review.</p>
      </div>
      <div className="page-nav"><Link href="/audit/create/configure" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Configure Member Audit</div></Link></div>
      <Feedback />
    </>
  );
}
