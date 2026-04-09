import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function LdChatPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/ld" className="bcl">L&amp;D Agent</Link><span className="bcs">/</span><span className="bcc">L&amp;D Chat</span></div>
      <div className="hero teal-h"><div className="hero-badge hb-brand">💬 L&amp;D Chat</div><h1>L&amp;D Chat Interface</h1><p>The main chat interface where invited team members ask questions based on the uploaded training materials. Source files are displayed on the right for reference.</p></div>
      <div className="sbox"><div className="sbox-title">Using L&amp;D Chat</div><div className="sbox-sub">How team members interact with the agent.</div>
        <p className="ov-p">After deployment, click Continue to open the L&amp;D Chat page. In the center, type questions related to the uploaded documents. On the right side, <strong>Source Files</strong> shows which documents the agent is referencing. On the left, you can start new conversations and search past sessions.</p>
        <p className="ov-p">Typical questions: &quot;What is the policy for requesting time off?&quot;, &quot;Walk me through the onboarding checklist&quot;, &quot;What are the GDPR compliance requirements?&quot;</p>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — L&amp;D Chat</div><div className="faq-sub">Common questions</div>
        <FaqItem question="What if the agent can't find an answer?">The agent will say it couldn&apos;t find the answer in the available documents. This usually means the relevant document hasn&apos;t been uploaded. Add it via Edit Agent → Step 2 and re-deploy.</FaqItem>
      </div>
      <div className="page-nav">
        <Link href="/ld/create/step-2" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Step 2: Knowledge Base</div></Link>
        <Link href="/ld/edit" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Edit Agent</div></Link>
      </div>
      <Feedback />
    </>
  );
}
