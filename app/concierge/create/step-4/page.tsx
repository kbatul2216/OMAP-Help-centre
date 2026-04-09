import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeStep4Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcs">Create an Agent</span><span className="bcs">/</span><span className="bcc">Step 4: Agent Deployment</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">Step 4 of 4</div><h1>Agent Deployment</h1><p>Deploy your agent, embed it on your website, and optionally configure advanced integrations to enhance your agent with real business data.</p></div>

      <div className="sbox"><div className="sbox-title">Overview</div><div className="sbox-sub">What happens in this step</div>
        <p className="ov-p">Once you have completed Steps 1 through 3, you are ready to deploy your Concierge Agent and make it live for your website visitors. This step walks you through the deployment popup, the deployment page, embedding the widget code, and optionally configuring advanced integrations through the Integration module.</p>
        <p className="ov-p">You can configure integrations before or after deployment — it is optional but recommended for better agent performance and automation capabilities.</p>
      </div>

      <div className="sbox"><div className="sbox-title">Step-by-Step Deployment Flow</div><div className="sbox-sub">Follow these steps to deploy your agent.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Deploy the Agent</div><div className="sd">
          <p>After completing your agent setup in Steps 1–3, click the <strong>Deploy Agent</strong> button on the agent configuration screen.</p>
          <p>A confirmation popup will appear to confirm your agent is ready to go live.</p>
        </div></div></div>

        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Deployment Confirmation Popup</div><div className="sd">
          <p>A popup appears on screen with the following details:</p>
          <ul>
            <li>A confirmation that your agent is ready to be deployed</li>
            <li>A notice that your <strong>first 30 days are free</strong></li>
            <li>A <strong>Deploy Agent</strong> button to proceed</li>
          </ul>
          <p>Click <strong>Deploy Agent</strong> in the popup to continue to the deployment page.</p>
        </div></div></div>

        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Agent Deployment Page</div><div className="sd">
          <p>After confirming in the popup, you are taken to the Agent Deployment page. This page includes:</p>
          <ul>
            <li>A <strong>success message</strong> confirming your agent has been created successfully</li>
            <li>An <strong>integration code section</strong> with the embed script for your website</li>
            <li>Instructions to copy the code and paste it just before the closing <span className="chip">&lt;/body&gt;</span> tag in your website&apos;s HTML</li>
          </ul>
          <p>Copy the embed code and add it to your website&apos;s HTML to make the chat widget appear for visitors.</p>
        </div></div></div>

        <div className="step"><div className="sn">4</div><div className="sb2"><div className="st">Configure Advanced Features <span style={{ fontWeight: 400, fontSize: "0.85em", opacity: 0.7 }}>(Optional)</span></div><div className="sd">
          <p>On the deployment page, you will see a <strong>Configure</strong> option. Clicking it will redirect you to the <strong>Integration module</strong>.</p>
          <p>Inside the Integration module, you can:</p>
          <ul>
            <li>Connect your <strong>MRM system</strong> — such as ABC Ignite, Daxko, or Club Automation</li>
            <li>After connecting your MRM, configure features from the available list</li>
            <li>Enable automation capabilities that give your agent access to real business data</li>
          </ul>
          <div className="alert a-info"><span className="a-ico">💡</span><div>Configuring integrations is <strong>optional</strong> but recommended. A connected MRM allows your agent to answer member-specific questions, handle bookings, and more. You can return to configure at any time — before or after deployment.</div></div>
        </div></div></div>

        <div className="step"><div className="sn">5</div><div className="sb2"><div className="st">Final Deployment Action</div><div className="sd">
          <p>Once you are ready, return to the Agent Deployment page and click the <strong>Deploy Agent</strong> button.</p>
          <p>This completes the deployment process and makes your agent officially live.</p>
        </div></div></div>

        <div className="step"><div className="sn">6</div><div className="sb2"><div className="st">Redirect to Test &amp; Deploy</div><div className="sd">
          <p>After clicking <strong>Deploy Agent</strong>, you are automatically redirected to the <strong>Test &amp; Deploy</strong> section.</p>
          <p>From here you can:</p>
          <ul>
            <li>Test your agent by sending sample messages</li>
            <li>Preview how the agent appears on your website</li>
            <li>Verify that all responses and behaviors are functioning correctly</li>
          </ul>
          <div className="alert a-success"><span className="a-ico">✅</span><div><strong>You&apos;re live!</strong> Your Concierge Agent is now deployed. Use the Test &amp; Deploy section to confirm everything is working before sharing it with your visitors.</div></div>
        </div></div></div>
      </div>

      <div className="faq-section"><div className="faq-title">❓ FAQs — Agent Deployment</div><div className="faq-sub">Common questions about deploying your agent</div>
        <FaqItem question="What happens after I deploy my agent?">After deploying, you are redirected to the Test &amp; Deploy section where you can test your agent, preview it on your website, and confirm it is responding correctly. Your agent becomes visible to website visitors once the embed code is added to your site.</FaqItem>
        <FaqItem question="Do I need to add code to my website?">Yes. The Agent Deployment page provides an embed code snippet. Copy this and paste it just before the closing <span className="chip">&lt;/body&gt;</span> tag in your website&apos;s HTML. This is what makes the chat widget appear on your site. You only need to add this code once — future agent updates do not require code changes.</FaqItem>
        <FaqItem question="What is the purpose of the Configure option?">The Configure option opens the Integration module, where you can connect your MRM system (such as ABC Ignite, Daxko, or Club Automation) and enable advanced features. This allows your agent to work with real business data, improving the quality and accuracy of responses for your members.</FaqItem>
        <FaqItem question="How do I connect my MRM?">Click <strong>Configure</strong> on the deployment page to open the Integration module. Select your MRM provider (ABC Ignite, Daxko, or Club Automation) and follow the on-screen connection steps. Once connected, you can enable and configure the available features from the list.</FaqItem>
        <FaqItem question="Can I configure integrations after deployment?">Yes. Configuring integrations is optional and can be done before or after deploying your agent. You can access the Integration module at any time from the sidebar to add or update your MRM connection and feature settings.</FaqItem>
        <FaqItem question="Where can I test my agent?">After deployment you are automatically redirected to the Test &amp; Deploy section. You can also access it at any time from the left sidebar under <strong>Test &amp; Deploy</strong>. From there, use the Test Agent tab to send messages and verify responses, and the Website Preview tab to see how the widget looks on your site.</FaqItem>
      </div>

      <div className="page-nav">
        <Link href="/concierge/create/step-3" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Step 3: Knowledge Base</div></Link>
        <Link href="/concierge/deploy" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Test &amp; Deploy</div></Link>
      </div>
      <Feedback />
    </>
  );
}
