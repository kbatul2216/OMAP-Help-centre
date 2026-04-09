import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsStep2Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcc">Step 2: Outreach Configuration</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">Step 2 of 3</div><h1>Step 2 — Outreach Configuration</h1><p>Define all rules that govern when and how reminder emails are sent — schedule, delivery window, pause/resume rules, excluded member statuses, and invoice age range.</p></div>
      <div className="sbox"><div className="sbox-title">Key outreach settings</div><div className="sbox-sub">Every field explained.</div>
        <table className="tbl"><thead><tr><th>Setting</th><th>What it controls</th></tr></thead><tbody>
          <tr><td><strong>Emails per Outreach</strong></td><td>Max reminder emails per cycle (e.g. 5)</td></tr>
          <tr><td><strong>Notification Schedule</strong></td><td>Days emails are sent (e.g. Mon, Wed, Fri)</td></tr>
          <tr><td><strong>Delivery Window</strong></td><td>Time range (e.g. 9 AM – 6 PM)</td></tr>
          <tr><td><strong>Pause X days before billing</strong></td><td>Stop reminders N days before collection date</td></tr>
          <tr><td><strong>Resume X days after billing</strong></td><td>Restart outreach N days after billing date</td></tr>
          <tr><td><strong>Excluded Statuses</strong></td><td>Cancelled, Freeze, Pending Cancel, Inactive, etc.</td></tr>
          <tr><td><strong>Invoice Age Min/Max</strong></td><td>e.g. min=0, max=180 days</td></tr>
        </tbody></table>
      </div>
      <div className="page-nav">
        <Link href="/collections/create/step-1" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Step 1: Agent UI</div></Link>
        <Link href="/collections/create/step-3" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 3: Email Template</div></Link>
      </div>
      <Feedback />
    </>
  );
}
