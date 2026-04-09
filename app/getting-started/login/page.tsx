import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function LoginPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/getting-started" className="bcl">Getting Started</Link><span className="bcs">/</span><span className="bcc">Login</span></div>
      <div className="hero brand">
        <div className="hero-badge hb-brand">Login</div>
        <h1>Logging in to OMAP</h1>
        <p>A complete guide to accessing your OMAP workspace — including the standard login flow and how to reset your password if you&apos;ve forgotten it.</p>
        <div className="hero-meta">
          <div className="hero-meta-item">Time: <strong>Under 1 minute</strong></div>
          <div className="hero-meta-item">Requires: <strong>A verified account</strong></div>
        </div>
      </div>

      <div className="sbox">
        <div className="sbox-title">Overview</div>
        <div className="sbox-sub">Before you begin</div>
        <p className="ov-p">You need a verified OMAP account to log in. If you have not completed sign-up and OTP verification yet, complete the <Link href="/getting-started/signup">Sign Up guide</Link> first — login will fail for unverified accounts.</p>
        <p className="ov-p">The login page is straightforward: enter your registered email and password, then click Login. If your credentials are correct, you are immediately redirected to your workspace.</p>
      </div>

      <div className="sbox">
        <div className="sbox-title">Standard login — step by step</div>
        <div className="sbox-sub">Three steps to access your OMAP workspace.</div>

        <div className="step">
          <div className="sn">1</div>
          <div className="sb2">
            <div className="st">Enter your email address</div>
            <div className="sd"><p>Enter the exact email address you used when creating your OMAP account. The field is not case-sensitive, but the address must match your registered email exactly.</p></div>
          </div>
        </div>

        <div className="step">
          <div className="sn">2</div>
          <div className="sb2">
            <div className="st">Enter your password</div>
            <div className="sd"><p>Enter your account password. Passwords in OMAP are case-sensitive. Check that Caps Lock is off if you are getting login errors. If you have forgotten your password, skip to the Forgot Password section below.</p></div>
          </div>
        </div>

        <div className="step">
          <div className="sn">3</div>
          <div className="sb2">
            <div className="st">Click Login</div>
            <div className="sd">
              <p>Click the Login button. If your credentials are correct, you are redirected to the Choose Your AI Agent page — the main workspace. If incorrect, an &quot;Invalid credentials&quot; error appears. Double-check your email and password and try again.</p>
            </div>
            <div style={{ marginTop: "12px", background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "var(--r8)", overflow: "hidden" }}>
              <div style={{ padding: "9px 14px", fontSize: "var(--fs-label)", fontWeight: 800, color: "var(--txt-muted)", textTransform: "uppercase", letterSpacing: ".06em", borderBottom: "1.5px solid var(--border)" }}>Login outcomes</div>
              <div style={{ padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: "12px", borderBottom: "1.5px solid var(--border)" }}>
                <span className="tag tg">Correct credentials</span>
                <span style={{ fontSize: "var(--fs-body)", color: "var(--txt)", fontWeight: 500 }}>You are logged in and redirected to the Choose Your AI Agent workspace.</span>
              </div>
              <div style={{ padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span className="tag tr">Incorrect credentials</span>
                <span style={{ fontSize: "var(--fs-body)", color: "var(--txt)", fontWeight: 500 }}>An &quot;Invalid credentials&quot; error appears. Check email and password and try again.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sbox">
        <div className="sbox-title">Forgot your password? — Reset flow</div>
        <div className="sbox-sub">Reset your password securely in two steps.</div>

        <div className="step">
          <div className="sn">A</div>
          <div className="sb2">
            <div className="st">Request a reset link</div>
            <div className="sd"><p>On the login page, click the <strong>Forgot Password?</strong> link below the Login button. Enter the email address associated with your OMAP account and click <strong>Send Reset Link</strong>. OMAP will email you a secure, time-limited reset link.</p></div>
          </div>
        </div>

        <div className="step">
          <div className="sn">B</div>
          <div className="sb2">
            <div className="st">Set a new password</div>
            <div className="sd">
              <p>Open the email from OMAP and click the reset link. Enter your new password, confirm it, and click <strong>Update Password</strong>. You will receive a security confirmation email after every password change. You are then redirected to the login page.</p>
            </div>
            <div className="alert a-info">
              <div className="a-ico">i</div>
              <div><strong>Security tip:</strong> If you receive a password-change confirmation email that you did not initiate, contact OMAP support immediately — your account may have been accessed without authorization.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-title">Frequently Asked Questions</div>
        <div className="faq-sub">Common login issues and how to resolve them</div>
        <FaqItem question="I keep getting &quot;Invalid credentials&quot; — what's wrong?">There are three common causes: (1) You are using the wrong email — use the exact email you signed up with. (2) Your password has a typo — passwords are case-sensitive, check for Caps Lock. (3) Your account is not yet verified — complete OTP verification from sign-up before attempting to log in.</FaqItem>
        <FaqItem question="I forgot my password — how do I reset it?">Click Forgot Password? on the login page. Enter your registered email and click Send Reset Link. Check your inbox (and spam folder) for the reset email, click the link, set a new password, confirm it, and click Update Password. You are then redirected to log in with your new password.</FaqItem>
        <FaqItem question="The password reset link in my email doesn't work.">Password reset links are time-limited and expire after a short period. If the link is expired, return to the Forgot Password page and request a new link. Always use the link from the most recently sent email — older links are invalid once a new one has been issued.</FaqItem>
        <FaqItem question="After logging in, where do I land?">After a successful login you are redirected to the Choose Your AI Agent page — the main workspace where all available agent types are displayed. From here you can create a new agent or access an existing one.</FaqItem>
        <FaqItem question="I received a password-change email but didn't change my password.">This is a security alert. Use the Forgot Password flow immediately to reset your password to something new, and contact OMAP support to report the incident. Your account may have been accessed without your authorization.</FaqItem>
      </div>

      <div style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--r12)", padding: "18px 22px", marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "var(--fs-h4)", fontWeight: 800, color: "var(--txt-head)", marginBottom: "4px" }}>New to OMAP?</div>
          <div style={{ fontSize: "var(--fs-small)", color: "var(--txt-muted)", fontWeight: 500 }}>Don&apos;t have an account yet? Follow the Sign Up guide to get started.</div>
        </div>
        <Link href="/getting-started/signup" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "var(--fs-small)", fontWeight: 700, color: "var(--teal)", background: "var(--teal-l)", border: "1.5px solid rgba(10,94,90,0.22)", borderRadius: "20px", padding: "5px 14px", textDecoration: "none" }}>Go to Sign Up →</Link>
      </div>

      <div className="page-nav">
        <Link href="/getting-started/signup" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Sign Up</div></Link>
        <Link href="/concierge" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Concierge Agent Overview</div></Link>
      </div>
      <Feedback />
    </>
  );
}
