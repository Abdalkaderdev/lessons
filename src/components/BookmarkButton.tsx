"use client";

import { useState, useEffect } from "react";

interface BookmarkButtonProps {
  studentId: string;
  lessonKey: string;
  lessonTitle: string;
  moduleSlug: string;
  lessonSlug: string;
}

export default function BookmarkButton({
  studentId,
  lessonKey,
  lessonTitle,
  moduleSlug,
  lessonSlug,
}: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const storageKey = `bookmarks:${studentId}`;

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const bookmarks = JSON.parse(stored) as { key: string }[];
      setBookmarked(bookmarks.some((b) => b.key === lessonKey));
    }
  }, [storageKey, lessonKey]);

  function toggle() {
    const stored = localStorage.getItem(storageKey);
    const bookmarks: { key: string; title: string; moduleSlug: string; lessonSlug: string }[] =
      stored ? JSON.parse(stored) : [];

    if (bookmarked) {
      const filtered = bookmarks.filter((b) => b.key !== lessonKey);
      localStorage.setItem(storageKey, JSON.stringify(filtered));
      setBookmarked(false);
    } else {
      bookmarks.push({ key: lessonKey, title: lessonTitle, moduleSlug, lessonSlug });
      localStorage.setItem(storageKey, JSON.stringify(bookmarks));
      setBookmarked(true);
    }
  }

  return (
    <button
      onClick={toggle}
      className="no-print flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
      style={{
        color: bookmarked ? "var(--accent-warm)" : "var(--text-muted)",
        background: bookmarked ? "rgba(184, 98, 45, 0.1)" : "var(--bg-elevated)",
        border: `1px solid ${bookmarked ? "rgba(184, 98, 45, 0.2)" : "var(--border-subtle)"}`,
      }}
      title={bookmarked ? "Remove bookmark" : "Bookmark this lesson"}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={bookmarked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
      {bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
}
