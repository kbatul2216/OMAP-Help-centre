"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "./Search";

export function Header() {
  const pathname = usePathname();

  const topNavActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/getting-started" && (pathname.startsWith("/getting-started"))) return true;
    if (path === "/faq" && pathname === "/faq") return true;
    return false;
  };

  return (
    <nav className="topnav">
      <Link href="/" className="logo">
        <div className="logo-mark">
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="13" stroke="white" strokeWidth="2.2" fill="none" />
            <circle cx="16" cy="16" r="6.5" stroke="white" strokeWidth="1.8" fill="none" />
            <circle cx="9" cy="16" r="2.5" fill="white" />
          </svg>
        </div>
        <div className="logo-wordmark">
          <span className="top">OMAP™</span>
          <span className="sub">BY ALTA·DX</span>
        </div>
      </Link>

      <Search />

      <div className="tnav">
        <Link href="/" className={`tn${topNavActive("/") ? " act" : ""}`}>Home</Link>
        <Link href="/getting-started" className={`tn${topNavActive("/getting-started") ? " act" : ""}`}>Get started</Link>
        <Link href="/faq" className={`tn${topNavActive("/faq") ? " act" : ""}`}>FAQ</Link>
      </div>
    </nav>
  );
}
