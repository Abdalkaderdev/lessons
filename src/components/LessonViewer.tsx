"use client";

import { useState, useEffect, useCallback } from "react";
import { marked } from "marked";
import { splitIntoSlides } from "@/lib/slides";
import SlideControls from "./SlideControls";
import CopyableContent from "./CopyableContent";

interface LessonViewerProps {
  content: string;
  title: string;
  studentName: string;
  accentColor?: string;
}

export default function LessonViewer({ content, title, studentName, accentColor = "var(--accent-warm)" }: LessonViewerProps) {
  const [isSlideMode, setIsSlideMode] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const completionKey = `lesson-complete:${studentName}:${title}`;

  const slides = splitIntoSlides(content);
  const totalSlides = slides.length;

  useEffect(() => {
    const stored = localStorage.getItem(completionKey);
    if (stored === "true") setCompleted(true);
  }, [completionKey]);

  function toggleComplete() {
    const next = !completed;
    setCompleted(next);
    localStorage.setItem(completionKey, String(next));
  }

  const goNext = useCallback(() => {
    setCurrentSlide((s) => Math.min(s + 1, totalSlides));
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentSlide((s) => Math.max(s - 1, 1));
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" && isSlideMode) goNext();
      if (e.key === "ArrowLeft" && isSlideMode) goPrev();
      if (e.key === "f" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsFullscreen((f) => !f);
      }
      if (e.key === "p" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        handlePrint();
      }
      if (e.key === "Escape") setIsFullscreen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSlideMode, goNext, goPrev, handlePrint]);

  const currentHtml = isSlideMode
    ? marked(slides[currentSlide - 1] || "")
    : marked(content);

  const progressPercent = isSlideMode ? (currentSlide / totalSlides) * 100 : 100;

  return (
    <div className={isFullscreen ? "fixed inset-0 z-50 flex flex-col" : "flex flex-col h-full"} style={{ background: 'var(--bg-deep)' }}>
      {/* Toolbar */}
      <div className="viewer-toolbar flex items-center justify-between px-6 py-3 no-print">
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setIsSlideMode(true); setCurrentSlide(1); }}
            className={`viewer-btn ${isSlideMode ? "viewer-btn-active" : "viewer-btn-default"}`}
          >
            Slides
          </button>
          <button
            onClick={() => setIsSlideMode(false)}
            className={`viewer-btn ${!isSlideMode ? "viewer-btn-active" : "viewer-btn-default"}`}
          >
            Full Page
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen((f) => !f)}
            className="viewer-btn viewer-btn-default"
            title="Toggle fullscreen (F)"
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
          <button
            onClick={handlePrint}
            className="viewer-btn viewer-btn-accent"
            title="Print / Save as PDF (P)"
          >
            Print PDF
          </button>
        </div>
      </div>

      {/* Progress bar */}
      {isSlideMode && (
        <div className="h-[2px] no-print" style={{ background: 'var(--border-subtle)' }}>
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{
              width: `${progressPercent}%`,
              background: accentColor,
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-10">
        {/* Print header */}
        <div className="print-only mb-6 pb-4 border-b-2 border-gray-300">
          <p className="text-gray-500 text-sm">
            Student: {studentName} &mdash; {title}
          </p>
        </div>

        <CopyableContent
          html={currentHtml as string}
          className="lesson-body max-w-3xl"
        />

        {/* Mark as complete */}
        <div className="max-w-3xl mt-10 pt-6 no-print" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <button
            onClick={toggleComplete}
            className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
            style={{
              background: completed ? 'rgba(34, 197, 94, 0.15)' : 'var(--bg-elevated)',
              color: completed ? '#22c55e' : 'var(--text-secondary)',
              border: `1px solid ${completed ? 'rgba(34, 197, 94, 0.3)' : 'var(--border-subtle)'}`,
            }}
          >
            {completed ? "\u2713 Completed" : "Mark as Complete"}
          </button>
        </div>
      </div>

      {/* Slide controls */}
      {isSlideMode && (
        <SlideControls
          current={currentSlide}
          total={totalSlides}
          onPrev={goPrev}
          onNext={goNext}
          accentColor={accentColor}
        />
      )}
    </div>
  );
}
