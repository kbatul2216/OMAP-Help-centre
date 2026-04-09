import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsPastDuesPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcc">Past Dues</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">📋 Past Dues</div><h1>Past Dues</h1><p>View all members with outstanding balances, check reminder history, and manually trigger immediate outreach for specific members.</p></div>
      <div className="sbox"><div className="sbox-title">Past Dues table</div><div className="sbox-sub">What you see and what you can do.</div>
        <p className="ov-p">The Past Dues table shows: Member Name, Email, Status, Club, Barcode, Amount Due, Last Reminder date, Reminder Count, Payment Status, Notification Status, and an Action button. Use <strong>Notify Now</strong> on any row to trigger an immediate reminder email bypassing the schedule.</p>
      </div>
      <Feedback />
    </>
  );
}
