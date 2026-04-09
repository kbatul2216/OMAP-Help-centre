import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { ExpandSection } from "@/components/ExpandSection";
import { Feedback } from "@/components/Feedback";

export default function SignupPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/getting-started" className="bcl">Getting Started</Link><span className="bcs">/</span><span className="bcc">Sign Up</span></div>
      <div className="hero light">
        <div className="hero-badge hb-crimson">Sign Up</div>
        <h1>Creating Your OMAP Account</h1>
        <p>A step-by-step guide to registering your account and completing email verification before you can access the platform.</p>
        <div className="hero-meta">
          <div className="hero-meta-item">Time: <strong>Under 3 minutes</strong></div>
          <div className="hero-meta-item">Steps: <strong>2</strong></div>
        </div>
      </div>

      <div className="sbox">
        <div className="sbox-title">Overview</div>
        <div className="sbox-sub">What this page covers</div>
        <p className="ov-p">Creating an OMAP account involves two stages. First, you fill in your registration form. Second, you verify your email using a one-time password (OTP). Your account is not active until both stages are complete.</p>
        <p className="ov-p">Make sure the email address you register with is immediately accessible — the OTP is sent there right away and expires quickly.</p>
      </div>

      <div className="sbox">
        <div className="sbox-title">Step-by-step guide</div>
        <div className="sbox-sub">Complete both steps in order. You cannot log in until Step 2 is done.</div>

        <div className="step">
          <div className="sn">1</div>
          <div className="sb2">
            <div className="st">Fill in the registration form</div>
            <div className="sd">
              <p>Navigate to the OMAP sign-up page. Work through every field in the registration form. All fields are required — the Sign Up button stays disabled until every field is filled and the Terms &amp; Conditions checkbox is ticked.</p>
              <p>Pay special attention to your email address — this is where your OTP will be sent immediately after you click Sign Up. Your password must be entered twice and both entries must match exactly.</p>
            </div>
            <ExpandSection label="View all required fields">
              <strong>Personal information</strong>
              <ul>
                <li><strong>Full Name</strong> — Used to personalize your workspace</li>
                <li><strong>Email Address</strong> — Used for login, OTP, and all notifications. Must be valid and accessible.</li>
                <li><strong>Phone Number</strong> — Your contact number including country code</li>
              </ul>
              <br />
              <strong>Business information</strong>
              <ul>
                <li><strong>Company Name</strong> — The organization you represent</li>
                <li><strong>Job Title</strong> — Your role within the company</li>
                <li><strong>Industry</strong> — Select from the dropdown</li>
                <li><strong>Website URL</strong> — Your company website. OMAP may use this to suggest agent branding.</li>
              </ul>
              <br />
              <strong>Security</strong>
              <ul>
                <li><strong>Password</strong> — Create a strong password (minimum 8 characters recommended)</li>
                <li><strong>Confirm Password</strong> — Must match the Password field exactly. Case-sensitive.</li>
              </ul>
              <br />
              The Terms &amp; Conditions checkbox must be ticked before the Sign Up button activates.
            </ExpandSection>
          </div>
        </div>

        <div className="step">
          <div className="sn">2</div>
          <div className="sb2">
            <div className="st">Verify your email with OTP</div>
            <div className="sd">
              <p>Immediately after clicking Sign Up, OMAP sends a 6-digit One-Time Password (OTP) to your registered email. You are simultaneously redirected to the verification screen — do not close this page.</p>
              <p>Open your inbox, find the email from OMAP, copy the 6-digit code, enter it on the verification screen, and click <strong>Verify</strong>. Your account activates instantly and you are redirected to the platform.</p>
            </div>
            <div className="alert a-warn">
              <div className="a-ico">!</div>
              <div><strong>OTP expires quickly.</strong> If it expires before you enter it, click Resend OTP to get a new code. Always check your spam or junk folder if the email doesn&apos;t arrive within 2 minutes. Only the most recently sent code is valid.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-title">Frequently Asked Questions</div>
        <div className="faq-sub">Common issues during sign-up and email verification</div>
        <FaqItem question="Why is the Sign Up button still disabled after I filled in everything?">The most common reason is that the Terms &amp; Conditions checkbox has not been ticked. Scroll to the bottom of the form and check the box. Also confirm that your Password and Confirm Password fields match exactly — even one character difference keeps the button disabled.</FaqItem>
        <FaqItem question="I didn't receive the OTP email — what should I do?">Check your spam, junk, or promotions folder first. Make sure you are checking the exact email address you registered with. If still nothing after 2–3 minutes, click Resend OTP on the verification screen to request a fresh code.</FaqItem>
        <FaqItem question="My OTP expired before I could enter it — what now?">OTPs are time-limited for security. Click Resend OTP on the verification screen to generate a new code. Do not use an old code — only the most recently issued one is valid.</FaqItem>
        <FaqItem question="Can I use the same email address for multiple OMAP accounts?">No. Each email address can only be linked to one OMAP account. If you try to sign up with an already-registered email, you will see an error. Go to the Login page instead if you already have an account.</FaqItem>
        <FaqItem question="What happens right after I verify my email?">Your account is activated instantly and you are automatically redirected to the OMAP platform workspace. The next step is to log in using your registered email and the password you set during sign-up.</FaqItem>
        <FaqItem question="Can I update my business information after signing up?">Yes. Go to the top-right user menu and click Edit Profile. From there you can update your name, phone number, company details, and password. Your registered email address is not editable after account creation.</FaqItem>
      </div>

      <div style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--r12)", padding: "18px 22px", marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "var(--fs-h4)", fontWeight: 800, color: "var(--txt-head)", marginBottom: "4px" }}>Ready to log in?</div>
          <div style={{ fontSize: "var(--fs-small)", color: "var(--txt-muted)", fontWeight: 500 }}>Your account is verified. Follow the Login guide to access your workspace.</div>
        </div>
        <Link href="/getting-started/login" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "var(--fs-small)", fontWeight: 700, color: "var(--crimson)", background: "var(--crimson-l)", border: "1.5px solid rgba(176,21,48,0.22)", borderRadius: "20px", padding: "5px 14px", textDecoration: "none" }}>Go to Login →</Link>
      </div>

      <div className="page-nav">
        <Link href="/getting-started" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Getting Started</div></Link>
        <Link href="/getting-started/login" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Login</div></Link>
      </div>
      <Feedback />
    </>
  );
}
