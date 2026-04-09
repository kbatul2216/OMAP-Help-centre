import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function CollectionsOverviewPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcc">Collections Agent — Overview</span></div>
      <div className="hero brand"><div className="hero-badge hb-brand">💰 Collections Agent</div><h1>Collections Agent</h1><p>Automates payment reminder emails for members with past-due balances. Full control over schedules, exclusion rules, invoice age filters, and branded email templates.</p><div className="hero-meta"><div className="hero-meta-item">📋 <strong>3 setup steps</strong></div><div className="hero-meta-item">⛔ <strong>MRM required</strong></div></div></div>
      <div className="alert a-danger"><span className="a-ico">⛔</span><div><strong>MRM required:</strong> Connect an MRM under Settings → Integration before creating this agent.</div></div>
      <div className="sbox"><div className="sbox-title">What the Collections Agent does</div><div className="sbox-sub">Automate billing outreach without manual effort.</div>
        <p className="ov-p">The Collections Agent automatically sends scheduled reminder emails to members with outstanding balances. You define the schedule, delivery window, exclusion rules, and email template once — the agent handles outreach continuously based on your configuration.</p>
        <p className="ov-p">After deployment, monitor collection performance in the <strong>Dashboard</strong>, manage individual past-due members in <strong>Past Dues</strong>, and update rules anytime from <strong>Settings</strong>.</p>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Collections Agent</div><div className="faq-sub">General questions</div>
        <FaqItem question="Why aren't some members receiving emails?">Check: member status in Excluded list, invoice age outside min/max range, club toggled OFF, or system is in pause window before billing date.</FaqItem>
        <FaqItem question="Can I send a reminder to a specific member immediately?">Yes — in Past Dues, find the member and click <strong>Notify Now</strong> to bypass the scheduled window.</FaqItem>
      </div>
      <div className="page-nav"><Link href="/collections/create/step-1" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 1: Agent UI</div></Link></div>
      <Feedback />
    </>
  );
}
