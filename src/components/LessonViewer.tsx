"use client";

import { useState, useEffect, useCallback } from "react";
import { marked } from "marked";
import { splitIntoSlides } from "@/lib/slides";
import SlideControls from "./SlideControls";

interface LessonViewerProps {
  content: string;
  title: string;
  studentName: string;
}

export default function LessonViewer({ content, title, studentName }: LessonViewerProps) {
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
    <div className={isFullscreen ? "fixed inset-0 z-50 bg-slate-950 flex flex-col" : "flex flex-col h-full"}>
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-700 no-print">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setIsSlideMode(true); setCurrentSlide(1); }}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              isSlideMode ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            Slides
          </button>
          <button
            onClick={() => setIsSlideMode(false)}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              !isSlideMode ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            Full Page
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen((f) => !f)}
            className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-sm text-slate-300 hover:bg-slate-600 transition-colors"
            title="Toggle fullscreen (F)"
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 bg-blue-700 border border-blue-600 rounded text-sm text-white hover:bg-blue-600 transition-colors"
            title="Print / Save as PDF (P)"
          >
            Print PDF
          </button>
        </div>
      </div>

      {/* Progress bar */}
      {isSlideMode && (
        <div className="h-1 bg-slate-800 no-print">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        {/* Print header (hidden on screen) */}
        <div className="print-only mb-6 pb-4 border-b-2 border-gray-300">
          <p className="text-gray-500 text-sm">
            Student: {studentName} &mdash; {title}
          </p>
        </div>

        <div
          className="lesson-body max-w-3xl prose prose-invert prose-slate prose-headings:text-slate-100 prose-p:text-slate-300 prose-a:text-blue-400 prose-strong:text-slate-100 prose-code:text-amber-400 prose-code:bg-slate-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/5 prose-th:bg-slate-700 prose-td:border-slate-700 prose-th:border-slate-600"
          dangerouslySetInnerHTML={{ __html: currentHtml as string }}
        />

        {/* Mark as complete button */}
        <div className="max-w-3xl mt-8 pt-6 border-t border-slate-700 no-print">
          <button
            onClick={toggleComplete}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              completed
                ? "bg-green-600 text-white"
                : "bg-slate-700 border border-slate-600 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {completed ? "Completed" : "Mark as Complete"}
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
        />
      )}
    </div>
  );
}
