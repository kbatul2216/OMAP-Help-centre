import Link from "next/link";
import { FaqItem } from "@/components/FaqItem";
import { Feedback } from "@/components/Feedback";

export default function ConciergeApiPage() {
  return (
    <>
      <div className="bc"><Link href="/" className="bcl">Home</Link><span className="bcs">/</span><Link href="/concierge" className="bcl">Concierge Agent</Link><span className="bcs">/</span><span className="bcs">Settings</span><span className="bcs">/</span><span className="bcc">Custom API</span></div>
      <div className="hero light"><div className="hero-badge hb-teal">🔌 Custom API</div><h1>Custom API Configuration</h1><p>Connect your Concierge Agent to external systems using GET or POST endpoints — enabling real-time dynamic responses beyond the static knowledge base.</p></div>
      <div className="sbox"><div className="sbox-title">What Custom API enables</div><div className="sbox-sub">Live data integration for dynamic answers.</div>
        <p className="ov-p">Custom APIs let your agent fetch live data from external systems — class schedules, availability, booking status — and surface it in conversations. You define the endpoint, authentication method, parameters, and trigger conditions.</p>
        <table className="tbl"><thead><tr><th>Setting</th><th>Options</th></tr></thead><tbody>
          <tr><td><strong>Method</strong></td><td>GET, POST</td></tr>
          <tr><td><strong>Authentication</strong></td><td>None, Basic Auth, Bearer Token, API Key</td></tr>
          <tr><td><strong>Parameters</strong></td><td>Query, Path, Headers, Request Body</td></tr>
          <tr><td><strong>Trigger Conditions</strong></td><td>e.g. &quot;Show class schedule&quot;, &quot;Check membership&quot;</td></tr>
        </tbody></table>
      </div>
      <div className="faq-section"><div className="faq-title">❓ FAQs — Custom API</div><div className="faq-sub">Common questions about API integration</div>
        <FaqItem question="Can I test the API before connecting it?">Yes — use the built-in API tester on the configuration page to send a test request, view the response output, and validate the integration before saving.</FaqItem>
      </div>
      <Feedback />
    </>
  );
}
