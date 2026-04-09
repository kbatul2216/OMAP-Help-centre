import Link from "next/link";
import { Feedback } from "@/components/Feedback";

export default function AuditDashboardPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/audit" className="bcl">Member Audit Agent</Link><span className="bcs">/</span><span className="bcs">Analytics</span><span className="bcs">/</span><span className="bcc">Dashboard</span></div>
      <div className="hero light"><div className="hero-badge hb-crimson">📊 Audit Dashboard</div><h1>Member Audit Dashboard</h1><p>A centralized view of compliance statistics, anomaly breakdowns, performance metrics, and member-level audit details across all selected clubs.</p></div>
      <div className="sbox"><div className="sbox-title">Dashboard sections</div><div className="sbox-sub">What the dashboard shows after processing.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", margin: "10px 0" }}>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "18px", fontWeight: 800, color: "var(--teal)" }}>2,847</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Total Members</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "18px", fontWeight: 800, color: "var(--green)" }}>2,614</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Clean Members</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "18px", fontWeight: 800, color: "var(--amber)" }}>233</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Anomalies</div></div>
          <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "8px", padding: "12px", textAlign: "center" }}><div style={{ fontSize: "18px", fontWeight: 800, color: "var(--crimson)" }}>8.2%</div><div style={{ fontSize: "10px", color: "var(--txt-sub)", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700 }}>Non-Compliance</div></div>
        </div>
        <p className="ov-p">Additional sections include: Anomalies by Category (dues out of range, invalid fees, invoice issues), Compliance by Membership Type, Compliance by Club, and the Members with Anomalies table showing Barcode, Name, Anomaly Type, Review Status, Fix Status, and AI Fix Notes.</p>
      </div>
      <Feedback />
    </>
  );
}
