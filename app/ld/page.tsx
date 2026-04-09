import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function LdOverviewPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcc">L&amp;D Agent — Overview</span></div>
      <div className="hero teal-h"><div className="hero-badge hb-brand">📚 L&amp;D Agent</div><h1>Learning &amp; Development Agent</h1><p>An internal AI knowledge assistant that answers staff questions from uploaded training materials — handbooks, SOPs, policy guides, and more. No MRM required.</p><div className="hero-meta"><div className="hero-meta-item">📋 <strong>2 setup steps</strong></div><div className="hero-meta-item">⏱ <strong>~10 min</strong></div><div className="hero-meta-item">✅ <strong>No MRM needed</strong></div></div></div>
      <div className="sbox"><div className="sbox-title">What is the L&amp;D Agent?</div><div className="sbox-sub">Purpose and use cases</div>
        <p className="ov-p">The L&amp;D Agent is designed for <strong>internal team use</strong>. It gives employees an instant way to query internal documents without searching folders. Upload training materials once, and the agent becomes a searchable knowledge base accessible to invited team members.</p>
        <p className="ov-p">Common use cases: onboarding new staff, compliance training, operational SOPs, and HR policy lookups.</p>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — L&amp;D Agent</div><div className="faq-sub">General questions</div>
        <FaqItem question="Is the L&D Agent accessible publicly like the Concierge Agent?">No — the L&amp;D Agent is only accessible to invited team members through their OMAP account. It is not a public-facing chat widget.</FaqItem>
        <FaqItem question="What file formats are supported?">PDF · DOC/DOCX · Excel · CSV · PPT/PPTX · TXT · JSON. Use text-based PDFs for best parsing results — image-based scans may not be processed correctly.</FaqItem>
      </div>
      <div className="page-nav"><Link href="/ld/create/step-1" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 1: Agent Profile</div></Link></div>
      <Feedback />
    </>
  );
}
