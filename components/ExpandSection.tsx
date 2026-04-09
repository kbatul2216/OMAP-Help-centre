"use client";

import { useState } from "react";

interface ExpandSectionProps {
  label: string;
  children: React.ReactNode;
}

export function ExpandSection({ label, children }: ExpandSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="exp-btn" onClick={() => setOpen(!open)}>
        {open ? "▴" : "▾"} {label}
      </button>
      {open && (
        <div className="exp-det open">
          {children}
        </div>
      )}
    </>
  );
}
