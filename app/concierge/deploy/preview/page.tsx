import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergePreviewPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><Link href="/concierge/deploy" className="bcl">Test &amp; Deploy</Link><span className="bcs">/</span><span className="bcc">Website Preview</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">🌐 Website Preview</div><h1>Website Preview</h1><p>See exactly how the Concierge Agent chat widget appears on your actual website before deployment — including positioning, branding, and mobile responsiveness.</p></div>
      <div className="sbox"><div className="sbox-title">What Website Preview shows you</div><div className="sbox-sub">A real-time simulation of the widget on your site.</div>
        <p className="ov-p">Website Preview renders a visual simulation of how the chat bubble and widget will appear on your website&apos;s URL. You can verify that the colors match your site&apos;s design, the widget is positioned correctly, and the initial greeting appears as expected — all before any code is added to your site.</p>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Open Website Preview</div><div className="sd"><p>Click <strong>Website Preview</strong> from the agent&apos;s Test &amp; Deploy section. The platform opens a visual preview window showing your website with the chat widget overlaid.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Check widget placement and appearance</div><div className="sd"><p>Verify: widget position (typically bottom-right), brand colors match, agent name and tagline display correctly, chat bubble is visible and clickable.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Make adjustments if needed</div><div className="sd"><p>If anything looks off, return to <strong>Edit Agent → Step 1</strong> to update colors, name, or tagline. Preview again before proceeding to deployment.</p></div></div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Website Preview</div><div className="faq-sub">Common questions about previewing</div>
        <FaqItem question="What URL does the preview use?">The preview uses the website URL you provided during sign-up or in Step 1&apos;s knowledge base URL field. You can update this URL if your site has changed.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
