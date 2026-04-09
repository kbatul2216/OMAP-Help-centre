"use client";

import { useState } from "react";

export function Feedback() {
  const [submitted, setSubmitted] = useState<"yes" | "no" | null>(null);

  if (submitted) {
    return (
      <div className="feedback">
        <p style={{ fontSize: "14px", color: "var(--txt-muted)", padding: "4px 0" }}>
          {submitted === "yes"
            ? "👍 Thanks! Glad this was helpful."
            : "👎 Thanks — we'll work on improving this."}
        </p>
      </div>
    );
  }

  return (
    <div className="feedback">
      <p>Was this page helpful?</p>
      <div className="fb-btns">
        <button className="fb-btn yes" onClick={() => setSubmitted("yes")}>👍 Yes</button>
        <button className="fb-btn no" onClick={() => setSubmitted("no")}>👎 No</button>
      </div>
    </div>
  );
}
