"use client";

import { useState, useEffect } from "react";

interface TeacherNotesProps {
  studentId: string;
  lessonKey: string;
}

export default function TeacherNotes({ studentId, lessonKey }: TeacherNotesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const storageKey = `teacher-note:${studentId}:${lessonKey}`;

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setNote(stored);
  }, [storageKey]);

  function save() {
    localStorage.setItem(storageKey, note);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="no-print flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
        style={{
          color: "var(--text-muted)",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        {note ? "View Notes" : "Add Notes"}
      </button>
    );
  }

  return (
    <div
      className="no-print"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "0.75rem",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
          }}
        >
          Teacher Notes (private)
        </span>
        <button
          onClick={() => setIsOpen(false)}
          style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}
        >
          Close
        </button>
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Notes about this lesson, student performance, things to revisit..."
        rows={4}
        style={{
          width: "100%",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "0.5rem",
          padding: "0.75rem",
          fontSize: "0.85rem",
          color: "var(--text-primary)",
          fontFamily: "var(--font-body)",
          resize: "vertical",
          outline: "none",
        }}
      />
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
        <button
          onClick={save}
          style={{
            padding: "0.375rem 0.875rem",
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: 500,
            background: "var(--accent-warm)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {saved ? "Saved!" : "Save"}
        </button>
        {note && (
          <button
            onClick={() => {
              setNote("");
              localStorage.removeItem(storageKey);
            }}
            style={{
              padding: "0.375rem 0.875rem",
              borderRadius: "0.5rem",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              background: "none",
              border: "1px solid var(--border-subtle)",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
