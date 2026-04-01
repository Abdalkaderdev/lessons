"use client";

import { useEffect, useRef } from "react";

interface CopyableContentProps {
  html: string;
  className?: string;
}

export default function CopyableContent({ html, className }: CopyableContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preBlocks = container.querySelectorAll("pre");

    const buttons: HTMLButtonElement[] = [];

    preBlocks.forEach((pre) => {
      // Skip if we already injected a button
      if (pre.querySelector("[data-copy-btn]")) return;

      pre.style.position = "relative";

      const btn = document.createElement("button");
      btn.setAttribute("data-copy-btn", "true");
      btn.textContent = "Copy";
      btn.type = "button";

      Object.assign(btn.style, {
        position: "absolute",
        top: "8px",
        right: "8px",
        padding: "2px 10px",
        fontSize: "12px",
        lineHeight: "1.6",
        border: "1px solid var(--border-subtle)",
        borderRadius: "4px",
        background: "var(--bg-elevated)",
        color: "var(--text-secondary)",
        cursor: "pointer",
        opacity: "0.75",
        transition: "opacity 150ms ease",
      });

      btn.addEventListener("mouseenter", () => {
        btn.style.opacity = "1";
        btn.style.background = "var(--bg-hover)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.opacity = "0.75";
        btn.style.background = "var(--bg-elevated)";
      });

      btn.addEventListener("click", () => {
        const code = pre.querySelector("code");
        const text = (code ?? pre).textContent ?? "";

        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = "Copied!";
          btn.style.color = "var(--accent-warm)";
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.style.color = "var(--text-secondary)";
          }, 1500);
        });
      });

      pre.appendChild(btn);
      buttons.push(btn);
    });

    return () => {
      buttons.forEach((btn) => btn.remove());
    };
  }, [html]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
