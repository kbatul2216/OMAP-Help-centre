import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeRefreshPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Refresh Agent</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">🔄 Refresh Agent</div><h1>Refresh Agent</h1><p>Keep your Concierge Agent&apos;s knowledge up to date by manually or automatically reprocessing all website URLs and uploaded documents.</p></div>
      <div className="sbox"><div className="sbox-title">Manual vs Auto Refresh</div><div className="sbox-sub">Two ways to keep agent data current.</div>
        <p className="ov-p"><strong>Manual Refresh</strong> reprocesses all your content sources immediately when you click the button. Use this after updating your website or uploading new documents and you want the changes to reflect right away.</p>
        <p className="ov-p"><strong>Auto Refresh</strong> schedules automatic reprocessing at a set time (e.g. 2:00 PM daily). Enable this when your website content changes frequently and you want a hands-off update process.</p>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Refresh Agent</div><div className="faq-sub">Common questions about refreshing</div>
        <FaqItem question="How long does a refresh take?">Processing time depends on the volume of content. A refresh status indicator appears in the top-right of the screen. Most refreshes complete within a few minutes.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
