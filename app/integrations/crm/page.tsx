import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function IntCrmPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/integrations" className="bcl">Integration</Link><span className="bcs">/</span><span className="bcc">CRMs</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">📊 CRMs</div><h1>CRM Integrations</h1><p>Connect Customer Relationship Management platforms to enable agent access to customer records, deal history, and contact information.</p></div>
      <div className="sbox"><div className="sbox-title">Available CRM connectors</div><div className="sbox-sub">Coming soon or available by request.</div>
        <p className="ov-p">CRM integrations are available or coming soon depending on your subscription plan. Contact the ALTA·DX team for information about supported CRM platforms and connection options for your specific use case.</p>
      </div>
      <Feedback />
    </>
  );
}
