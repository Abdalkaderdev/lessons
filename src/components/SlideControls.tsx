"use client";

interface SlideControlsProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function SlideControls({ current, total, onPrev, onNext }: SlideControlsProps) {
  return (
    <div className="flex items-center justify-between border-t border-slate-700 px-6 py-3 bg-slate-800/80 no-print">
      <button
        onClick={onPrev}
        disabled={current <= 1}
        className="px-4 py-2 bg-slate-700 border border-slate-600 rounded text-sm text-slate-200 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        &larr; Previous
      </button>
      <span className="text-slate-400 text-sm">
        {current} / {total}
      </span>
      <button
        onClick={onNext}
        disabled={current >= total}
        className="px-4 py-2 bg-slate-700 border border-slate-600 rounded text-sm text-slate-200 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Next &rarr;
      </button>
    </div>
  );
}
