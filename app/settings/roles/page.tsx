import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function RolesPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Roles &amp; Permissions</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">🔐 Roles &amp; Permissions</div><h1>Roles &amp; Permissions</h1><p>Define what each user can view and do across platform modules and agents. Configure roles before inviting users — every user must have a role assigned.</p></div>
      <div className="sbox"><div className="sbox-title">Creating a role</div><div className="sbox-sub">Settings → Roles &amp; Permissions → + Create Role.</div>
        <div className="step"><div className="sn">1</div><div className="sb2"><div className="st">Enter role name</div><div className="sd"><p>Give it a descriptive name — e.g. &quot;Support Staff&quot;, &quot;QA Reviewer&quot;, &quot;Organization Admin&quot;.</p></div></div></div>
        <div className="step"><div className="sn">2</div><div className="sb2"><div className="st">Set permissions</div><div className="sd"><p>For each module, choose <strong>View</strong> (read-only) and/or <strong>Edit</strong> (full actions). Granting neither hides that module from the user entirely.</p></div></div></div>
        <div className="step"><div className="sn">3</div><div className="sb2"><div className="st">Click Create — instant effect</div><div className="sd"><p>Role is immediately available. Editing a role later applies changes to all assigned users instantly.</p></div></div></div>
      </div>
      <div className="alert a-danger"><span className="a-ico">⛔</span><div><strong>Deleting a role is permanent.</strong> Ensure no active users are assigned before deleting — affected users lose access immediately.</div></div>
      <Feedback />
    </>
  );
}
