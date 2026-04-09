"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

export function FaqItem({ question, children }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span className="faq-q-text">{question}</span>
        <span className={`faq-arr${open ? " open" : ""}`}>▾</span>
      </button>
      <div className={`faq-a${open ? " open" : ""}`}>
        {children}
      </div>
    </div>
  );
}
