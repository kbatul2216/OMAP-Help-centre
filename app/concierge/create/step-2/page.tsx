import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { ExpandSection } from "@/components/ExpandSection";
import { Feedback } from "@/components/Feedback";

export default function ConciergeStep2Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcs">Create an Agent</span><span className="bcs">/</span><span className="bcc">Step 2: Agent Behavior</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">Step 2 of 4</div><h1>Agent Behavior</h1><p>Define how your Concierge Agent communicates — its greeting, tone of voice, behavior style, supported languages, voice mode, and custom response guidelines.</p></div>
      <div className="sbox"><div className="sbox-title">Overview</div><div className="sbox-sub">What this step controls</div>
        <p className="ov-p">While Step 1 controls how the agent <em>looks</em>, Step 2 controls how it <em>sounds and behaves</em>. This is where you define the agent&apos;s personality. The choices you make here shape every response the agent gives to your members.</p>
        <p className="ov-p">The <strong>Response Guidelines</strong> field is especially powerful — it lets you write custom rules that the agent follows in every conversation, giving you precise control over accuracy, tone, and compliance.</p>
      </div>
      <div className="sbox"><div className="sbox-title">Configuration fields</div><div className="sbox-sub">All fields in Step 2 explained.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">First Greeting Message</div><div className="sd"><p>The very first message members see when they open the chat. It should feel natural and on-brand. Example: <em>&quot;Hello! I&apos;m Wellness Wendy from GymCo. How can I assist you today?&quot;</em></p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Tone of Voice &amp; Behavior Style</div><div className="sd"><p><strong>Tone:</strong> Professional · Friendly · Casual · Formal · Enthusiastic<br /><strong>Behavior:</strong> Helpful · Direct · Empathetic · Analytical · Conversational &amp; Warm</p><p>Match these to your brand&apos;s communication standards.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Language &amp; Voice Mode</div><div className="sd"><p>English is selected by default. Optionally add <strong>Spanish</strong> and/or <strong>French</strong>. Enable <strong>Voice Mode</strong> to unlock agent voice selection and per-language voice preview.</p></div></div></div>
        <div className="step"><div className="sn">4</div><div className="sb2"><div className="st">Response Guidelines</div><div className="sd"><p>Write custom rules that control every agent response. Examples:</p><p>&quot;Always verify club location before sharing pricing&quot;<br />&quot;Only reference links from the official website&quot;<br />&quot;Be empathetic when a member asks about cancellation&quot;</p></div>
          <ExpandSection label="ℹ️ More guideline examples">
            <ul>
              <li>&quot;Keep answers under 3 sentences unless asked for more detail&quot;</li>
              <li>&quot;Always greet returning members by name if known&quot;</li>
              <li>&quot;Do not share competitor pricing or information&quot;</li>
              <li>&quot;If unsure, direct the member to call the front desk&quot;</li>
            </ul>
          </ExpandSection>
        </div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Step 2</div><div className="faq-sub">Common questions about agent behavior settings</div>
        <FaqItem question="What's the difference between Tone and Behavior Style?"><strong>Tone</strong> affects how the agent sounds (e.g. formal vs casual). <strong>Behavior Style</strong> affects how it approaches helping users (e.g. direct vs empathetic). Both work together to shape the agent&apos;s overall personality.</FaqItem>
        <FaqItem question="Can I add response guidelines after deployment?">Yes — use Edit Agent → Step 2 to update guidelines at any time. Save, then publish the new version from Version History.</FaqItem>
      </div>
      <div className="page-nav">
        <Link href="/concierge/create/step-1" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Step 1: User Interface</div></Link>
        <Link href="/concierge/create/step-3" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 3: Knowledge Base</div></Link>
      </div>
      <Feedback />
    </>
  );
}
