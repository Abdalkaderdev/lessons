"use client";

interface SlideControlsProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  accentColor?: string;
}

export default function SlideControls({ current, total, onPrev, onNext, accentColor = "var(--accent-warm)" }: SlideControlsProps) {
  return (
    <div className="slide-controls flex items-center justify-between px-6 py-3 no-print">
      <button
        onClick={onPrev}
        disabled={current <= 1}
        className="viewer-btn viewer-btn-default disabled:opacity-30 disabled:cursor-not-allowed"
      >
        &larr; Prev
      </button>

      <div className="flex items-center gap-3">
        {/* Dots indicator */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: Math.min(total, 12) }, (_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i + 1 === current ? 20 : 6,
                height: 6,
                background: i + 1 === current ? accentColor : 'var(--border-medium)',
                borderRadius: i + 1 === current ? 3 : '50%',
              }}
            />
          ))}
          {total > 12 && (
            <span className="text-xs ml-1" style={{ color: 'var(--text-muted)' }}>+{total - 12}</span>
          )}
        </div>
        <span className="text-xs tabular-nums" style={{ color: 'var(--text-muted)' }}>
          {current}/{total}
        </span>
      </div>

      <button
        onClick={onNext}
        disabled={current >= total}
        className="viewer-btn viewer-btn-default disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Next &rarr;
      </button>
    </div>
  );
}
