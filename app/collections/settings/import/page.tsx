import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function CollectionsImportPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/collections" className="bcl">Collections Agent</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Manual Dues Import</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">📥 Manual Dues Import</div><h1>Manual Dues Import</h1><p>Add members to collections manually — either by uploading a CSV file (bulk) or entering a single member&apos;s barcode and club.</p></div>
      <div className="sbox"><div className="sbox-title">Two import methods</div><div className="sbox-sub">Bulk CSV or individual entry.</div>
        <p className="ov-p"><strong>Bulk Upload:</strong> Drag and drop a CSV file (max 10 MB) containing member dues. <strong>Individual:</strong> Enter a Member Barcode, select the Club, and click Add Member. Manually imported members appear in Past Dues and are included in outreach based on your configured rules.</p>
      </div>
      <Feedback />
    </>
  );
}
