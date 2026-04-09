import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";

export default function FaqPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcc">FAQs</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">❓ Reference</div><h1>Frequently Asked Questions</h1><p>Quick answers to the most common OMAP questions across all modules.</p></div>
      <div className="sbox">
        <div className="sbox-title">General platform</div>
        <FaqItem question="What is OMAP™ by ALTA·DX?">OMAP (Outcomes Micro Agent Platform) is an AI-powered platform for creating and deploying specialized AI agents — each focused on a specific business outcome. It uses micro-agent architecture where each agent handles a single function.</FaqItem>
        <FaqItem question="Do I need an MRM to use OMAP?">No — Concierge and L&amp;D agents work without an MRM. Collections and Member Audit agents require a connected MRM. Start with Concierge or L&amp;D while your MRM integration is being configured.</FaqItem>
        <FaqItem question="My agent stopped responding — what do I do?">Check Settings → Billing. If your conversation limit is reached, the agent stops immediately. Upgrade your plan to restore it. Also confirm the agent is published (not just a draft) and the widget script is correctly embedded.</FaqItem>
        <FaqItem question="How do I update an agent after deployment?">Use Edit Agent from the sidebar. Changes create a new draft. Use Version History to compare and click Publish Draft when ready. The live agent updates immediately.</FaqItem>
        <FaqItem question="What's the difference between Sandbox and Live conversations?">Sandbox = internal test sessions (don&apos;t count towards plan limits). Live = real member conversations from the deployed website widget. Both appear in Conversation Logs with their labels.</FaqItem>
      </div>
      <div className="feedback">
        <p>Didn&apos;t find your answer?</p>
        <div className="fb-btns">
          <button className="fb-btn yes" style={{ background: "var(--crimson-l)", color: "var(--crimson-d)", borderColor: "rgba(176,21,48,.3)", fontWeight: 800 }}>Ask a question ↗</button>
        </div>
      </div>
    </>
  );
}
