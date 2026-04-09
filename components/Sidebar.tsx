"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface L3Item {
  label: string;
  href: string;
}

interface L2Item {
  label: string;
  href?: string;
  children?: L3Item[];
}

interface L1Item {
  label: string;
  icon?: string;
  href?: string;
  children?: L2Item[];
}

interface Section {
  section: string;
  items: L1Item[];
}

const NAV: Section[] = [
  {
    section: "Platform",
    items: [
      { label: "Overview", icon: "🏠", href: "/" },
      {
        label: "Getting Started",
        icon: "🚀",
        children: [
          { label: "Sign Up", href: "/getting-started/signup" },
          { label: "Login", href: "/getting-started/login" },
        ],
      },
    ],
  },
  {
    section: "AI Agents",
    items: [
      {
        label: "Concierge Agent",
        icon: "🤖",
        children: [
          { label: "Overview", href: "/concierge" },
          {
            label: "Create an Agent",
            children: [
              { label: "Step 1: User Interface", href: "/concierge/create/step-1" },
              { label: "Step 2: Agent Behavior", href: "/concierge/create/step-2" },
              { label: "Step 3: Knowledge Base", href: "/concierge/create/step-3" },
              { label: "Step 4: Deployment", href: "/concierge/create/step-4" },
            ],
          },
          {
            label: "Test & Deploy",
            children: [
              { label: "Overview", href: "/concierge/deploy" },
              { label: "Test Agent", href: "/concierge/deploy/test" },
              { label: "Website Preview", href: "/concierge/deploy/preview" },
              { label: "Agent Deployment", href: "/concierge/deploy/agent" },
            ],
          },
          {
            label: "Edit Agent",
            children: [
              { label: "Overview", href: "/concierge/edit" },
            ],
          },
          { label: "Conversation Logs", href: "/concierge/logs" },
          {
            label: "Settings",
            children: [
              { label: "Refresh Agent", href: "/concierge/settings/refresh" },
              { label: "Custom API", href: "/concierge/settings/api" },
              { label: "Version History", href: "/concierge/settings/versions" },
            ],
          },
          {
            label: "Analytics",
            children: [
              { label: "Dashboard", href: "/concierge/dashboard" },
            ],
          },
        ],
      },
      {
        label: "L&D Agent",
        icon: "📚",
        children: [
          { label: "Overview", href: "/ld" },
          {
            label: "Create an Agent",
            children: [
              { label: "Step 1: Agent Profile", href: "/ld/create/step-1" },
              { label: "Step 2: Knowledge Base", href: "/ld/create/step-2" },
            ],
          },
          { label: "L&D Chat", href: "/ld/chat" },
          {
            label: "Edit Agent",
            children: [
              { label: "Overview", href: "/ld/edit" },
            ],
          },
          { label: "Conversation Logs", href: "/ld/logs" },
          {
            label: "Settings",
            children: [
              { label: "Invite Members", href: "/ld/settings/invite" },
            ],
          },
          {
            label: "Analytics",
            children: [
              { label: "Dashboard", href: "/ld/dashboard" },
            ],
          },
        ],
      },
      {
        label: "Collections Agent",
        icon: "💰",
        children: [
          { label: "Overview", href: "/collections" },
          {
            label: "Create an Agent",
            children: [
              { label: "Step 1: Agent UI", href: "/collections/create/step-1" },
              { label: "Step 2: Outreach Config", href: "/collections/create/step-2" },
              { label: "Step 3: Email Template", href: "/collections/create/step-3" },
            ],
          },
          { label: "Past Dues", href: "/collections/past-dues" },
          {
            label: "Settings",
            children: [
              { label: "Outreach", href: "/collections/settings/outreach" },
              { label: "Templates", href: "/collections/settings/templates" },
              { label: "Manual Dues Import", href: "/collections/settings/import" },
              { label: "Club Locations", href: "/collections/settings/clubs" },
            ],
          },
          {
            label: "Analytics",
            children: [
              { label: "Dashboard", href: "/collections/dashboard" },
            ],
          },
        ],
      },
      {
        label: "Member Audit Agent",
        icon: "🔍",
        children: [
          { label: "Overview", href: "/audit" },
          {
            label: "Create an Agent",
            children: [
              { label: "Configure Member Audit", href: "/audit/create/configure" },
            ],
          },
          { label: "Edit Agent", href: "/audit/edit" },
          {
            label: "Analytics",
            children: [
              { label: "Dashboard", href: "/audit/dashboard" },
            ],
          },
        ],
      },
    ],
  },
  {
    section: "Settings",
    items: [
      {
        label: "Integration",
        icon: "🔗",
        children: [
          { label: "Overview", href: "/integrations" },
          {
            label: "MRMs",
            children: [
              { label: "ABC Ignite", href: "/integrations/mrm/abc" },
              { label: "Daxko Operations", href: "/integrations/mrm/daxko" },
              { label: "Club Automation", href: "/integrations/mrm/clubauto" },
            ],
          },
          { label: "CRMs", href: "/integrations/crm" },
          { label: "Storage", href: "/integrations/storage" },
        ],
      },
      {
        label: "User Management",
        icon: "👥",
        children: [
          { label: "Overview", href: "/settings/users" },
        ],
      },
      {
        label: "Roles & Permissions",
        icon: "🔐",
        children: [
          { label: "Overview", href: "/settings/roles" },
        ],
      },
      {
        label: "Billing & Subscription",
        icon: "💳",
        children: [
          { label: "Overview", href: "/settings/billing" },
        ],
      },
    ],
  },
  {
    section: "Reference",
    items: [
      { label: "FAQs", icon: "❓", href: "/faq" },
    ],
  },
];

function isChildActive(pathname: string, children?: L2Item[]): boolean {
  if (!children) return false;
  return children.some(
    (c) =>
      (c.href && pathname === c.href) ||
      (c.children && c.children.some((g) => g.href && pathname === g.href))
  );
}

function isGrandchildActive(pathname: string, children?: L3Item[]): boolean {
  if (!children) return false;
  return children.some((c) => c.href && pathname === c.href);
}

function L2Group({ item, pathname }: { item: L2Item; pathname: string }) {
  const childActive = isGrandchildActive(pathname, item.children);
  const [open, setOpen] = useState(childActive);

  useEffect(() => {
    if (childActive) setOpen(true);
  }, [childActive]);

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        className={`sb-l2${pathname === item.href ? " act" : ""}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <>
      <div
        className={`sb-l2${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <span className="sb-arr">›</span>
      </div>
      <div className={`sb-l3-wrap${open ? " open" : ""}`}>
        {item.children.map((c, i) => (
          <Link
            key={i}
            href={c.href}
            className={`sb-l3${pathname === c.href ? " act" : ""}`}
          >
            {c.label}
          </Link>
        ))}
      </div>
    </>
  );
}

function L1Group({ item, pathname }: { item: L1Item; pathname: string }) {
  const childAct = isChildActive(pathname, item.children);
  const selfAct = item.href ? pathname === item.href : false;
  const [open, setOpen] = useState(childAct);

  useEffect(() => {
    if (childAct) setOpen(true);
  }, [childAct]);

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        className={`sb-l1${selfAct ? " act" : ""}`}
      >
        {item.icon && <span className="l1-ico">{item.icon}</span>}
        {item.label}
      </Link>
    );
  }

  return (
    <>
      <div
        className={`sb-l1${open ? " open" : ""}${childAct ? " act" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {item.icon && <span className="l1-ico">{item.icon}</span>}
        {item.label}
        <span className="sb-arr">›</span>
      </div>
      <div className={`sb-l2-wrap${open ? " open" : ""}`}>
        {item.children.map((c, i) => (
          <L2Group key={i} item={c} pathname={pathname} />
        ))}
      </div>
    </>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar" id="sidebar">
      {NAV.map((sec, si) => (
        <div key={si}>
          <div className="sb-section-lbl">{sec.section}</div>
          {sec.items.map((item, ii) => (
            <L1Group key={ii} item={item} pathname={pathname} />
          ))}
        </div>
      ))}
    </aside>
  );
}
