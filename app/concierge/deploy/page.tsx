import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeDeployOverviewPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcc">Test &amp; Deploy — Overview</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">🔍 Test &amp; Deploy</div><h1>Test &amp; Deploy — Overview</h1><p>Before going live, thoroughly test your agent and preview it on your website. This section covers the full pre-launch checklist to ensure a smooth deployment.</p></div>
      <div className="sbox"><div className="sbox-title">Why test before deploying?</div><div className="sbox-sub">Quality assurance before your members see it.</div>
        <p className="ov-p">Testing ensures your agent&apos;s greeting, tone, knowledge base answers, and widget appearance all meet your standards before real members interact with it. Catching issues in testing saves you from post-deployment fixes that could confuse or frustrate members.</p>
        <div className="cards-row">
          <Link href="/concierge/deploy/test" className="card" style={{ cursor: "pointer", textDecoration: "none", display: "block" }}><div className="card-ico" style={{ background: "#FDEAED" }}>🧪</div><h3>Test Agent</h3><p>Interactive conversation testing inside the platform</p></Link>
          <Link href="/concierge/deploy/preview" className="card" style={{ cursor: "pointer", textDecoration: "none", display: "block" }}><div className="card-ico" style={{ background: "var(--teal-l)" }}>🌐</div><h3>Website Preview</h3><p>See exactly how the widget appears on your site</p></Link>
          <Link href="/concierge/deploy/agent" className="card" style={{ cursor: "pointer", textDecoration: "none", display: "block" }}><div className="card-ico" style={{ background: "var(--green-l)" }}>🚀</div><h3>Deploy</h3><p>Generate code and go live</p></Link>
        </div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs</div><div className="faq-sub">Common pre-deployment questions</div>
        <FaqItem question="Can I skip testing and deploy directly?">Technically yes, but it&apos;s strongly advised against. Testing takes only a few minutes and often reveals knowledge base gaps or tone issues that would impact real member experience.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
