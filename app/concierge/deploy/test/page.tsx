import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeTestPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><Link href="/concierge/deploy" className="bcl">Test &amp; Deploy</Link><span className="bcs">/</span><span className="bcc">Test Agent</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">🧪 Test Agent</div><h1>Test Agent</h1><p>Interact with your Concierge Agent inside the OMAP platform before it goes live. Verify greeting, tone, answers, and voice (if enabled).</p></div>
      <div className="sbox"><div className="sbox-title">How to test your agent</div><div className="sbox-sub">Use the internal sandbox to evaluate agent quality.</div>
        <p className="ov-p">The Test Agent interface opens a <strong>Sandbox</strong> chat session inside OMAP. These conversations don&apos;t count towards your plan&apos;s conversation limit and won&apos;t appear in Live Conversation Logs — they&apos;re labeled &quot;Sandbox&quot; so you can easily distinguish them later.</p>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Open Test Agent</div><div className="sd"><p>From the Concierge Agent left sidebar, click <strong>Test Agent</strong>. The sandbox chat interface opens immediately.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Run test conversations</div><div className="sd"><p>Ask the agent questions your real members would ask. Check: greeting message accuracy, tone consistency, knowledge base answer quality, and voice mode (if enabled).</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Identify and fix gaps</div><div className="sd"><p>If the agent gives wrong or incomplete answers, return to <strong>Edit Agent → Step 3</strong> to update the knowledge base. Re-test after updating. Repeat until satisfied.</p></div></div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Test Agent</div><div className="faq-sub">Questions about the testing process</div>
        <FaqItem question="Do sandbox conversations count towards my plan limit?">No — Sandbox conversations are internal test sessions and do not consume your plan&apos;s conversation quota. Only Live conversations (from real website visitors) count.</FaqItem>
        <FaqItem question="The agent gives wrong answers in testing — what should I do?">Add more relevant URLs or documents in Edit Agent → Knowledge Base. Use Refresh Agent to reprocess the content. Then test again until answers are accurate.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
