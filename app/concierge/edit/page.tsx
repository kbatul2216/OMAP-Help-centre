import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeEditPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcc">Edit Agent</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">✏️ Edit Agent</div><h1>Edit Agent — Overview</h1><p>Update your Concierge Agent&apos;s configuration at any time — UI, behavior, or knowledge base. Changes create a new draft version that you review and publish safely.</p></div>
      <div className="sbox"><div className="sbox-title">How Edit Agent works</div><div className="sbox-sub">Safe, version-controlled updates.</div>
        <p className="ov-p">Every change you make via Edit Agent creates a <strong>new draft version</strong> — the live agent is never altered until you explicitly publish. This protects you from accidentally breaking a running agent.</p>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Click Edit Agent from the sidebar</div><div className="sd"><p>This opens all three creation steps (UI, Behavior, Knowledge Base) in edit mode with your current configuration pre-filled.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Make your changes</div><div className="sd"><p>Update any field across Steps 1, 2, or 3. Changes are saved as a draft automatically.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Compare and publish via Version History</div><div className="sd"><p>Go to <strong>Settings → Version History</strong>. Compare the draft vs the live version — changes are marked as Added, Edited, or Deleted. Click <strong>Publish Draft</strong> to make it live.</p></div></div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Edit Agent</div><div className="faq-sub">Common questions about editing</div>
        <FaqItem question="Does editing the agent take it offline?">No — editing creates a draft version. The live agent continues running uninterrupted until you choose to publish the draft.</FaqItem>
        <FaqItem question="Can I discard a draft without publishing it?">Yes — in Version History, you can discard the draft to revert to the last published version without any changes going live.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
