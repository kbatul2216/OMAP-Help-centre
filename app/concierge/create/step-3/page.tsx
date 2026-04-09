import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeStep3Page() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcs">Create an Agent</span><span className="bcs">/</span><span className="bcc">Step 3: Knowledge Base</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">Step 3 of 4</div><h1>Agent Knowledge Base</h1><p>Upload the content that powers your agent&apos;s answers — website URLs and documents. Without a knowledge base, the agent cannot answer any business-specific questions.</p></div>
      <div className="sbox"><div className="sbox-title">Overview</div><div className="sbox-sub">Why this step is critical</div>
        <p className="ov-p">The Knowledge Base is the brain of your Concierge Agent. It learns from every URL you add and every document you upload. The richer and more accurate the content, the better the agent responds. This step directly determines the quality of member answers after deployment.</p>
      </div>
      <div className="sbox"><div className="sbox-title">What to add</div><div className="sbox-sub">Two types of content: website URLs and uploaded documents.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Website URLs</div><div className="sd"><p>Add your main website or specific pages. The agent automatically crawls and learns from the content. Add multiple URLs to cover memberships, pricing, schedules, policies, and FAQs.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Upload Documents</div><div className="sd"><p>Upload PDFs, DOCX files, membership brochures, schedule sheets, policy guides, and any other reference material. Supported formats: <strong>PDF · DOCX · XLSX · PPT · TXT</strong>.</p></div>
          <div className="alert a-warn"><span className="a-ico">⚠️</span><div><strong>Required:</strong> Without a knowledge base, the agent cannot answer business-specific questions. Add at least your main website URL and one key document before proceeding.</div></div>
        </div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Step 3</div><div className="faq-sub">Common questions about the knowledge base</div>
        <FaqItem question="How many URLs and documents can I add?">You can add multiple URLs and upload multiple documents. There is no strict limit — add as much relevant content as possible for the best agent performance.</FaqItem>
        <FaqItem question="Can I update the knowledge base after deployment?">Yes — use Edit Agent → Step 3. After updating, use Refresh Agent (manual or auto) to reprocess the content so the agent uses the latest data.</FaqItem>
      </div>
      <div className="page-nav">
        <Link href="/concierge/create/step-2" className="page-nav-btn"><div className="nav-dir">← Previous</div><div className="nav-title">Step 2: Agent Behavior</div></Link>
        <Link href="/concierge/create/step-4" className="page-nav-btn next"><div className="nav-dir">Next →</div><div className="nav-title">Step 4: Deployment</div></Link>
      </div>
      <Feedback />
    </>
  );
}
