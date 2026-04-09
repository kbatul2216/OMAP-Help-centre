import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function GettingStartedPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcc">Getting Started</span></div>
      <div className="hero light">
        <div className="hero-badge hb-crimson">Platform</div>
        <h1>Getting Started with OMAP</h1>
        <p>Learn how to create your account, verify your email, log in, and navigate the platform for the first time. This section covers the two foundational steps every new user must complete before building their first agent.</p>
        <div className="hero-meta">
          <div className="hero-meta-item">Time to complete: <strong>Under 5 minutes</strong></div>
          <div className="hero-meta-item">Steps: <strong>2</strong></div>
        </div>
      </div>

      <div className="sbox">
        <div className="sbox-title">Overview</div>
        <div className="sbox-sub">What this section covers</div>
        <p className="ov-p">Before you can create or manage any AI agent in OMAP, you need a verified account and a successful login. This section is divided into two focused guides:</p>
        <ul style={{ paddingLeft: "18px", fontSize: "var(--fs-body)", color: "var(--txt)", lineHeight: 2 }}>
          <li><strong>Sign Up</strong> — Create your account and verify your email address using a one-time password (OTP).</li>
          <li><strong>Login</strong> — Access your OMAP workspace and reset your password if needed.</li>
        </ul>
        <p className="ov-p" style={{ marginTop: "12px" }}>Complete both steps in order. You cannot log in until your email has been verified.</p>
      </div>

      <div className="sbox">
        <div className="sbox-title">What to do next</div>
        <div className="sbox-sub">Follow these guides in sequence.</div>
        <div className="step">
          <div className="sn">1</div>
          <div className="sb2">
            <div className="st">Sign Up</div>
            <div className="sd"><p>Complete the registration form and verify your email with a one-time password. Your account is not active until this step is done.</p></div>
            <Link href="/getting-started/signup" style={{ display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "8px", fontSize: "var(--fs-small)", fontWeight: 700, color: "var(--crimson)", background: "var(--crimson-l)", border: "1.5px solid rgba(176,21,48,0.22)", borderRadius: "20px", padding: "3px 11px", textDecoration: "none" }}>Go to Sign Up →</Link>
          </div>
        </div>
        <div className="step">
          <div className="sn">2</div>
          <div className="sb2">
            <div className="st">Login</div>
            <div className="sd"><p>Log in to your OMAP workspace using your registered email and password. Use Forgot Password if you need to reset your credentials.</p></div>
            <Link href="/getting-started/login" style={{ display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "8px", fontSize: "var(--fs-small)", fontWeight: 700, color: "var(--crimson)", background: "var(--crimson-l)", border: "1.5px solid rgba(176,21,48,0.22)", borderRadius: "20px", padding: "3px 11px", textDecoration: "none" }}>Go to Login →</Link>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-title">Frequently Asked Questions</div>
        <div className="faq-sub">Common questions about getting started</div>
        <FaqItem question="Do I need an MRM to get started?">No. The Concierge Agent and L&amp;D Agent work without an MRM. You only need an MRM for the Collections Agent and Member Audit Agent. Start with Concierge or L&amp;D while your MRM integration is being set up.</FaqItem>
        <FaqItem question="What happens after I log in for the first time?">You land on the Choose Your AI Agent page — the main workspace where all available agent types are displayed as cards. From here you can create your first agent or explore available options.</FaqItem>
        <FaqItem question="Is there a free trial?">Yes. When you create your first agent, OMAP prompts you to activate a 30-day free trial. This gives you full access to configure and test the agent. After 30 days, you will need to choose a paid subscription plan to keep it active.</FaqItem>
      </div>

      <div className="page-nav">
        <Link href="/getting-started/signup" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Sign Up</div></Link>
      </div>
      <Feedback />
    </>
  );
}
