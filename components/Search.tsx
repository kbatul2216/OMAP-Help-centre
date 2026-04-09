"use client";

import { useState } from "react";
import Link from "next/link";

const PAGE_ROUTES: Record<string, string> = {
  "home": "/",
  "getting-started": "/getting-started",
  "signup": "/getting-started/signup",
  "login": "/getting-started/login",
  "concierge-overview": "/concierge",
  "concierge-step1": "/concierge/create/step-1",
  "concierge-step2": "/concierge/create/step-2",
  "concierge-step3": "/concierge/create/step-3",
  "concierge-step4": "/concierge/create/step-4",
  "concierge-deploy-overview": "/concierge/deploy",
  "concierge-test": "/concierge/deploy/test",
  "concierge-preview": "/concierge/deploy/preview",
  "concierge-deploy": "/concierge/deploy/agent",
  "concierge-edit-overview": "/concierge/edit",
  "concierge-logs": "/concierge/logs",
  "concierge-refresh": "/concierge/settings/refresh",
  "concierge-api": "/concierge/settings/api",
  "concierge-versions": "/concierge/settings/versions",
  "concierge-dashboard": "/concierge/dashboard",
  "ld-overview": "/ld",
  "ld-step1": "/ld/create/step-1",
  "ld-step2": "/ld/create/step-2",
  "ld-chat": "/ld/chat",
  "ld-edit-overview": "/ld/edit",
  "ld-logs": "/ld/logs",
  "ld-invite": "/ld/settings/invite",
  "ld-dashboard": "/ld/dashboard",
  "col-overview": "/collections",
  "col-step1": "/collections/create/step-1",
  "col-step2": "/collections/create/step-2",
  "col-step3": "/collections/create/step-3",
  "col-pastdues": "/collections/past-dues",
  "col-outreach": "/collections/settings/outreach",
  "col-templates": "/collections/settings/templates",
  "col-import": "/collections/settings/import",
  "col-clubs": "/collections/settings/clubs",
  "col-dashboard": "/collections/dashboard",
  "audit-overview": "/audit",
  "audit-configure": "/audit/create/configure",
  "audit-edit": "/audit/edit",
  "audit-dashboard": "/audit/dashboard",
  "int-overview": "/integrations",
  "int-abc": "/integrations/mrm/abc",
  "int-daxko": "/integrations/mrm/daxko",
  "int-clubauto": "/integrations/mrm/clubauto",
  "int-crm": "/integrations/crm",
  "int-storage": "/integrations/storage",
  "users-overview": "/settings/users",
  "roles-overview": "/settings/roles",
  "billing-overview": "/settings/billing",
  "faq": "/faq",
};

const IDX = [
  { t: "Overview — Home", p: "home", m: "Platform · All modules" },
  { t: "Getting Started — Overview", p: "getting-started", m: "Platform · Sign up, login" },
  { t: "Sign Up", p: "signup", m: "Getting Started · Registration form, OTP verification" },
  { t: "Login", p: "login", m: "Getting Started · Password, forgot password, reset" },
  { t: "Concierge Agent — Overview", p: "concierge-overview", m: "Agent · 24/7 support, multilingual, MRM optional" },
  { t: "Concierge Agent — Step 1: User Interface", p: "concierge-step1", m: "Agent · Name, colors, logo, welcome message, live preview" },
  { t: "Concierge Agent — Step 2: Agent Behavior", p: "concierge-step2", m: "Agent · Tone, greeting, language, voice mode, guidelines" },
  { t: "Concierge Agent — Step 3: Knowledge Base", p: "concierge-step3", m: "Agent · Website URLs, documents, file upload" },
  { t: "Concierge Agent — Step 4: Deployment", p: "concierge-step4", m: "Agent · Widget code, paste, publish, go live" },
  { t: "Concierge Agent — Test Agent", p: "concierge-test", m: "Test & Deploy · Sandbox, test conversations" },
  { t: "Concierge Agent — Website Preview", p: "concierge-preview", m: "Test & Deploy · Widget appearance check" },
  { t: "Concierge Agent — Agent Deployment", p: "concierge-deploy", m: "Test & Deploy · Copy code, paste, verify live" },
  { t: "Concierge Agent — Edit Agent", p: "concierge-edit-overview", m: "Edit · Draft versions, update, publish" },
  { t: "Concierge Agent — Conversation Logs", p: "concierge-logs", m: "Logs · Sandbox vs Live, admin notes, bookmarks" },
  { t: "Concierge Agent — Refresh Agent", p: "concierge-refresh", m: "Settings · Manual refresh, auto refresh schedule" },
  { t: "Concierge Agent — Custom API", p: "concierge-api", m: "Settings · Endpoints, auth, triggers, test API" },
  { t: "Concierge Agent — Version History", p: "concierge-versions", m: "Settings · Draft vs live, compare, publish" },
  { t: "Concierge Agent — Analytics Dashboard", p: "concierge-dashboard", m: "Analytics · Conversations, resolution rate, ratings" },
  { t: "L&D Agent — Overview", p: "ld-overview", m: "Agent · Internal training, no MRM required" },
  { t: "L&D Agent — Step 1: Agent Profile", p: "ld-step1", m: "Agent · Name, tagline, response guidelines" },
  { t: "L&D Agent — Step 2: Knowledge Base", p: "ld-step2", m: "Agent · Upload documents, deploy" },
  { t: "L&D Agent — L&D Chat", p: "ld-chat", m: "Agent · Chat interface, source files, conversations" },
  { t: "L&D Agent — Edit Agent", p: "ld-edit-overview", m: "Agent · Update profile, re-deploy" },
  { t: "L&D Agent — Conversation Logs", p: "ld-logs", m: "Agent · Session details, source attribution" },
  { t: "L&D Agent — Invite Members", p: "ld-invite", m: "Settings · Email invitations, CSV bulk upload" },
  { t: "L&D Agent — Analytics Dashboard", p: "ld-dashboard", m: "Analytics · Sessions, active members, answer rate" },
  { t: "Collections Agent — Overview", p: "col-overview", m: "Agent · Payment reminders, MRM required" },
  { t: "Collections Agent — Step 1: Agent UI", p: "col-step1", m: "Agent · Name, logo, club toggles" },
  { t: "Collections Agent — Step 2: Outreach Config", p: "col-step2", m: "Agent · Schedule, excluded statuses, invoice age" },
  { t: "Collections Agent — Step 3: Email Template", p: "col-step3", m: "Agent · Variables, AI generate, preview, deploy" },
  { t: "Collections Agent — Past Dues", p: "col-pastdues", m: "Agent · Member table, Notify Now" },
  { t: "Collections Agent — Outreach Settings", p: "col-outreach", m: "Settings · Update schedule and delivery rules" },
  { t: "Collections Agent — Templates", p: "col-templates", m: "Settings · Edit email content and variables" },
  { t: "Collections Agent — Manual Dues Import", p: "col-import", m: "Settings · CSV upload, add individual member" },
  { t: "Collections Agent — Club Locations", p: "col-clubs", m: "Settings · Enable/disable clubs for outreach" },
  { t: "Collections Agent — Analytics Dashboard", p: "col-dashboard", m: "Analytics · Outstanding, email engagement, trends" },
  { t: "Member Audit Agent — Overview", p: "audit-overview", m: "Agent · Compliance, anomaly detection, MRM required" },
  { t: "Member Audit Agent — Configure", p: "audit-configure", m: "Agent · Profile, clubs, frequency, create dashboard" },
  { t: "Member Audit Agent — Edit Agent", p: "audit-edit", m: "Agent · Update clubs and frequency" },
  { t: "Member Audit Agent — Analytics Dashboard", p: "audit-dashboard", m: "Analytics · Anomalies, compliance rate, member table" },
  { t: "Integration — Overview", p: "int-overview", m: "Settings · MRMs, CRMs, Storage" },
  { t: "Integration — ABC Ignite", p: "int-abc", m: "Settings · App ID, App Key, club chips, test connection" },
  { t: "Integration — Daxko Operations", p: "int-daxko", m: "Settings · Authorization flow, under review, connected" },
  { t: "Integration — Club Automation V2", p: "int-clubauto", m: "Settings · Auth, resync, disconnect" },
  { t: "Integration — CRMs", p: "int-crm", m: "Settings · CRM connectors" },
  { t: "Integration — Storage", p: "int-storage", m: "Settings · Cloud storage connections" },
  { t: "User Management", p: "users-overview", m: "Settings · Invite users, roles, Pending, Onboarded" },
  { t: "Roles & Permissions", p: "roles-overview", m: "Settings · Create role, View, Edit, delete" },
  { t: "Billing & Subscription", p: "billing-overview", m: "Settings · Value, Growth, Scale, Enterprise plans" },
  { t: "FAQs", p: "faq", m: "Reference · General platform questions" },
];

interface SearchProps {
  onResultClick?: () => void;
}

export function Search({ onResultClick }: SearchProps) {
  const [query, setQuery] = useState("");

  const results =
    query.length >= 2
      ? IDX.filter(
          (x) =>
            x.t.toLowerCase().includes(query.toLowerCase()) ||
            x.m.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8)
      : [];

  return (
    <div className="nav-search">
      <span className="nav-search-ico">🔍</span>
      <input
        type="text"
        placeholder="Search pages, agents, settings…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            background: "var(--surface)",
            border: "1.5px solid var(--border)",
            borderRadius: "var(--r12)",
            padding: "10px 14px",
            zIndex: 300,
            boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
          }}
        >
          {results.map((r) => (
            <Link
              key={r.p}
              href={PAGE_ROUTES[r.p] || "/"}
              className="sr-item"
              onClick={() => { setQuery(""); onResultClick?.(); }}
            >
              <div className="sr-t">{r.t}</div>
              <div className="sr-m">{r.m}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
