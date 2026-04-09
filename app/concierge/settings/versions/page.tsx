import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeVersionsPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Version History</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">📜 Version History</div><h1>Version History</h1><p>Compare your live agent version against any saved draft, review what changed, and publish when ready — all with zero risk to the running agent.</p></div>
      <div className="sbox"><div className="sbox-title">How Version History works</div><div className="sbox-sub">Draft → compare → publish safely.</div>
        <p className="ov-p">Every time you edit and save the agent, a new draft is created. The live version remains unchanged until you explicitly publish. Version History lets you see a detailed diff — changes are labeled <span className="tag tg">Added</span>, <span className="tag ta">Edited</span>, or <span className="tag tr">Deleted</span>. Click <strong>Publish Draft</strong> to push the changes live immediately.</p>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Version History</div><div className="faq-sub">Common questions about versioning</div>
        <FaqItem question="Can I roll back to a previous version?">You can view and compare past versions. To roll back, use a previous version as the basis for a new draft and publish that. Full one-click rollback availability depends on your plan.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
