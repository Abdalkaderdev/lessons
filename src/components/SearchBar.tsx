"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

interface SearchResult {
  title: string;
  moduleName: string;
  moduleSlug: string;
  lessonSlug: string;
  snippet: string;
}

export default function SearchBar({ studentId }: { studentId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, close]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (query.trim().length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query)}&student=${encodeURIComponent(studentId)}`
        );
        const data: SearchResult[] = await res.json();
        setResults(data);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, studentId]);

  const highlightSnippet = (snippet: string) => {
    if (!query.trim()) return snippet;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = snippet.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} style={{ background: "var(--accent-warm)", color: "var(--text-primary)", borderRadius: "2px", padding: "0 1px" }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="no-print">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Search lessons"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px",
          color: "var(--text-secondary)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "min(20vh, 120px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              margin: "0 16px",
              background: "var(--bg-elevated)",
              borderRadius: "12px",
              border: "1px solid var(--border-medium)",
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            {/* Search input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
                gap: "10px",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search lessons..."
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  color: "var(--text-primary)",
                  fontFamily: "inherit",
                }}
              />
              <kbd
                style={{
                  fontSize: "11px",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-muted)",
                  background: "var(--bg-deep)",
                  fontFamily: "inherit",
                }}
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              {loading && query.trim().length >= 2 && (
                <div style={{ padding: "16px", color: "var(--text-muted)", textAlign: "center", fontSize: "14px" }}>
                  Searching...
                </div>
              )}

              {!loading && query.trim().length >= 2 && results.length === 0 && (
                <div style={{ padding: "16px", color: "var(--text-muted)", textAlign: "center", fontSize: "14px" }}>
                  No results found
                </div>
              )}

              {results.map((result, i) => (
                <Link
                  key={`${result.moduleSlug}-${result.lessonSlug}-${i}`}
                  href={`/${studentId}/${result.moduleSlug}/${result.lessonSlug}`}
                  onClick={close}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border-subtle)",
                    transition: "background 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--bg-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "2px" }}>
                    {result.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--accent-warm)", marginBottom: "4px" }}>
                    {result.moduleName}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                    {highlightSnippet(result.snippet)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
