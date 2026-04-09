import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function UsersPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">User Management</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">👥 User Management</div><h1>User Management</h1><p>View all platform users, invite new team members, assign access roles, and track onboarding status.</p></div>
      <div className="sbox"><div className="sbox-title">Inviting a new user</div><div className="sbox-sub">Settings → User Management → + Invite User.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Click + Invite User</div><div className="sd"><p>Opens the Create User popup. Enter the new user&apos;s email address.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Assign a role</div><div className="sd"><p>Select a role from the dropdown. Roles must already exist in Roles &amp; Permissions before users can be invited.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Track status</div><div className="sd"><p>Status shows <span className="tag ta">Pending</span> until the user accepts the email invite, then becomes <span className="tag tg">Onboarded</span>.</p></div></div></div>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs</div><div className="faq-sub">Common questions</div>
        <FaqItem question="Why is the role dropdown empty?">Create roles first in Settings → Roles &amp; Permissions. The dropdown only shows roles that already exist.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
