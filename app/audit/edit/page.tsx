import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function AuditEditPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/audit" className="bcl">Member Audit Agent</Link><span className="bcs">/</span><span className="bcc">Edit Agent</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">✏️ Edit Agent</div><h1>Edit Member Audit Agent</h1><p>Update club selection or audit frequency at any time from Edit Agent. Note: every update triggers a full 48–72 hour dashboard reprocessing cycle.</p></div>
      <div className="sbox"><div className="sbox-title">How to edit</div><div className="sbox-sub">Edit Agent → Modify → Update.</div>
        <p className="ov-p">From the left sidebar, click <strong>Edit Agent</strong>. Modify club locations or audit frequency. Click <strong>Update</strong>. The dashboard enters a reprocessing state for 48–72 hours before updated data is visible.</p>
      </div>
      <Feedback />
    </>
  );
}
