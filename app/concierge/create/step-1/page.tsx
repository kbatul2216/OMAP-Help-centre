import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeStep1Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcs">Create an Agent</span><span className="bcs">/</span><span className="bcc">Step 1: User Interface</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">Step 1 of 4</div><h1>Agent User Interface</h1><p>Configure the visual identity of your Concierge Agent — how it looks to members when the chat widget opens on your website. A live preview panel updates in real time as you make changes.</p></div>
      <div className="sbox"><div className="sbox-title">Overview</div><div className="sbox-sub">What you configure in this step</div>
        <p className="ov-p">Step 1 is entirely about branding. You define the agent&apos;s name, tagline, logo, colors, and welcome message. Think of it as designing the &quot;face&quot; of your AI receptionist. The live preview panel on the right side of the screen updates instantly as you type so you can see exactly how the chat widget will appear.</p>
        <p className="ov-p">AI may auto-suggest some fields (name, tagline, primary color) based on your website URL provided during setup. Review and adjust these as needed.</p>
      </div>
      <div className="sbox"><div className="sbox-title">Configuration fields</div><div className="sbox-sub">Fill in all fields to define your agent&apos;s visual identity.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Agent Profile Image</div><div className="sd"><p>Upload an image or icon that will represent the agent in the chat widget header. This makes the agent feel branded and recognizable to your members.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Agent Name &amp; Tagline</div><div className="sd"><p>Enter a name (e.g. &quot;Wellness Wendy&quot;) and a short tagline (e.g. &quot;Your 24/7 wellness guide&quot;). Both appear in the chat widget header.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Primary Color &amp; Bubble Color</div><div className="sd"><p><strong>Primary Color</strong> affects the chat header, buttons, and highlights. <strong>Bubble Color</strong> controls the agent&apos;s message bubble color. Both should match your brand.</p></div></div></div>
        <div className="step"><div className="sn">4</div><div className="sb2"><div className="st">Welcome Message &amp; Disclaimer Note</div><div className="sd"><p>The <strong>Welcome Message</strong> is the first message members see when the widget opens. The <strong>Disclaimer Note</strong> is optional — use it to indicate responses are AI-generated. Click <strong>Next</strong> when done.</p></div></div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Step 1</div><div className="faq-sub">Common questions about the UI configuration</div>
        <FaqItem question="Can I change the name and colors after deployment?">Yes — use Edit Agent anytime. Changes create a new draft version. Use Version History to compare and publish when ready.</FaqItem>
        <FaqItem question="What if the AI suggestions don't match my brand?">Simply override them. The AI suggestions are a starting point only — every field is fully editable before you proceed to Step 2.</FaqItem>
      </div>
      <div className="page-nav">
        <Link href="/concierge" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Overview</div></Link>
        <Link href="/concierge/create/step-2" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 2: Agent Behavior</div></Link>
      </div>
      <Feedback />
    </>
  );
}
