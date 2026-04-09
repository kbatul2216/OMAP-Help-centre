import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeDeployAgentPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><Link href="/concierge/deploy" className="bcl">Test &amp; Deploy</Link><span className="bcs">/</span><span className="bcc">Agent Deployment</span></div>
      <div className="hero teal-h"><div className="hero-badge hb-brand">🚀 Deploy</div><h1>Agent Deployment</h1><p>Copy the generated widget script and embed it on your website. Your Concierge Agent goes live immediately for all visitors.</p></div>
      <div className="sbox"><div className="sbox-title">Deployment guide</div><div className="sbox-sub">Copy code → Paste into website → Go live.</div>
        <div className="step"><div className="sn teal-n">1</div><div className="sb2"><div className="st">Copy the widget code</div><div className="sd"><p>On the Deployment page, click <strong>Copy Code</strong> to copy the unique script snippet for your agent.</p></div></div></div>
        <div className="step"><div className="sn teal-n">2</div><div className="sb2"><div className="st">Paste into your website HTML</div><div className="sd"><p>Open your website&apos;s HTML editor. Paste the code just before the closing <span className="chip">&lt;/body&gt;</span> tag. Save and publish your website changes.</p></div></div></div>
        <div className="step"><div className="sn teal-n">3</div><div className="sb2"><div className="st">Publish the agent version</div><div className="sd"><p>In OMAP, go to <strong>Settings → Version History</strong> and click <strong>Publish Draft</strong>. This ensures the latest configured version is active on the widget.</p></div></div></div>
        <div className="step"><div className="sn teal-n">4</div><div className="sb2"><div className="st">Verify the widget is live</div><div className="sd"><p>Visit your website in a browser. The chat bubble should appear (typically bottom-right). Click it to confirm the widget opens and the greeting message displays correctly.</p>
          <div className="alert a-success"><span className="a-ico">✅</span><div><strong>You&apos;re live!</strong> Your Concierge Agent is now available to all website visitors. Monitor early conversations in <Link href="/concierge/logs">Conversation Logs</Link> to catch any issues quickly.</div></div>
        </div></div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Agent Deployment</div><div className="faq-sub">Common deployment questions</div>
        <FaqItem question="The widget isn't showing on my site after pasting the code.">Check: (1) the code is placed correctly before <span className="chip">&lt;/body&gt;</span>, (2) your website changes were saved and published, (3) the agent version is published in OMAP (not just a draft), (4) clear your browser cache.</FaqItem>
        <FaqItem question="Do I need to re-paste the code every time I update the agent?">No — the script tag is fixed. When you publish a new version in OMAP&apos;s Version History, the live widget automatically uses the latest published configuration. No code changes needed.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
