import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeLogsPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcc">Conversation Logs</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">💬 Conversation Logs</div><h1>Conversation Logs</h1><p>Review all conversations your Concierge Agent has handled — both internal test sessions (Sandbox) and real member interactions (Live). Use logs to monitor quality, flag issues, and improve the agent.</p></div>
      <div className="sbox"><div className="sbox-title">Understanding Conversation Logs</div><div className="sbox-sub">What you can see and do in this section.</div>
        <p className="ov-p">The Conversation Logs page displays a filterable table of every chat session. Each row shows date, user session ID, category, sentiment, duration, and review status. Click any row to open the full transcript with all messages, timing, and the agent version that handled it.</p>
        <table className="tbl"><thead><tr><th>Filter</th><th>What it shows</th></tr></thead><tbody>
          <tr><td><span className="tag tt">Sandbox</span></td><td>Internal test sessions by your team — don&apos;t count towards plan limits</td></tr>
          <tr><td><span className="tag tg">Live</span></td><td>Real conversations from website visitors — count towards plan</td></tr>
          <tr><td><span className="tag ta">Bookmarked</span></td><td>Conversations flagged for later review</td></tr>
          <tr><td><span className="tag tr">Under Review</span></td><td>Conversations with open admin notes needing attention</td></tr>
        </tbody></table>
      </div>
      <div className="sbox"><div className="sbox-title">Working with individual conversations</div><div className="sbox-sub">Actions available when reviewing a session.</div>
        <p className="ov-p">Open any conversation to see the full transcript. On the right panel you can: <strong>Bookmark</strong> it for future reference, mark it as <strong>Reviewed</strong>, mark the answer as <strong>Correct</strong>, flag it as a <strong>Member</strong> interaction, and add <strong>Admin Notes</strong> for issues the team should address.</p>
        <p className="ov-p">Admin notes progress through statuses: <span className="tag ta">Under Review</span> → <span className="tag tt">Reviewed</span> → <span className="tag tg">Resolved</span> → <span className="tag tg">Published</span>. This workflow helps your team systematically improve the agent over time.</p>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Conversation Logs</div><div className="faq-sub">Common questions about monitoring conversations</div>
        <FaqItem question="What's the difference between Sandbox and Live conversations?">Sandbox = internal test chats by your team. Live = real member conversations from your deployed website widget. They&apos;re stored separately and both appear in Conversation Logs with their respective labels.</FaqItem>
        <FaqItem question="How do I use conversation logs to improve the agent?">Filter for Live conversations and look for questions the agent answered poorly. Use Admin Notes to flag specific issues, then update the Knowledge Base with better content to address those gaps. Re-test after refreshing.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
