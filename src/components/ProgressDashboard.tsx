"use client";

import { useState, useEffect } from "react";
import { formatModuleName } from "@/lib/types";

interface Lesson {
  title: string;
  slug: string;
  moduleSlug: string;
}

interface Module {
  slug: string;
  lessons: Lesson[];
}

interface ProgressDashboardProps {
  modules: Module[];
  studentName: string;
  accentColor: string;
}

export default function ProgressDashboard({
  modules,
  studentName,
  accentColor,
}: ProgressDashboardProps) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const keys = new Set<string>();
    for (const mod of modules) {
      for (const lesson of mod.lessons) {
        const key = `lesson-complete:${studentName}:${lesson.title}`;
        if (localStorage.getItem(key) === "true") {
          keys.add(key);
        }
      }
    }
    setCompleted(keys);
  }, [modules, studentName]);

  function isCompleted(lesson: Lesson): boolean {
    return completed.has(`lesson-complete:${studentName}:${lesson.title}`);
  }

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalCompleted = modules.reduce(
    (sum, m) => sum + m.lessons.filter((l) => isCompleted(l)).length,
    0,
  );
  const overallPercent = totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Overall summary */}
      <div
        style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "0.75rem",
          padding: "1.25rem 1.5rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
            fontSize: "1.25rem",
            margin: "0 0 0.75rem",
          }}
        >
          Overall Progress
        </h2>
        <div
          style={{
            height: "0.5rem",
            borderRadius: "0.25rem",
            background: "var(--bg-hover)",
            overflow: "hidden",
            marginBottom: "0.5rem",
          }}
        >
          <div
            style={{
              width: `${overallPercent}%`,
              height: "100%",
              borderRadius: "0.25rem",
              background: accentColor,
              transition: "width 0.3s ease",
            }}
          />
        </div>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.875rem",
            margin: 0,
          }}
        >
          {totalCompleted} of {totalLessons} completed
        </p>
      </div>

      {/* Module cards */}
      {modules.map((mod) => {
        const modCompleted = mod.lessons.filter((l) => isCompleted(l)).length;
        const modPercent =
          mod.lessons.length > 0 ? (modCompleted / mod.lessons.length) * 100 : 0;

        return (
          <div
            key={mod.slug}
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
                fontSize: "1rem",
                margin: "0 0 0.75rem",
              }}
            >
              {formatModuleName(mod.slug)}
            </h3>
            <div
              style={{
                height: "0.375rem",
                borderRadius: "0.1875rem",
                background: "var(--bg-hover)",
                overflow: "hidden",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  width: `${modPercent}%`,
                  height: "100%",
                  borderRadius: "0.1875rem",
                  background: accentColor,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.8125rem",
                margin: "0 0 0.75rem",
              }}
            >
              {modCompleted} of {mod.lessons.length} completed
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              {mod.lessons.map((lesson) => {
                const done = isCompleted(lesson);
                return (
                  <li
                    key={lesson.slug}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.8125rem",
                      color: done ? "var(--text-primary)" : "var(--text-muted)",
                    }}
                  >
                    <span
                      style={{
                        width: "1.125rem",
                        height: "1.125rem",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        flexShrink: 0,
                        border: done ? "none" : "1.5px solid var(--border-subtle)",
                        background: done ? accentColor : "transparent",
                        color: done ? "#fff" : "transparent",
                        fontSize: "0.625rem",
                      }}
                    >
                      {done ? "\u2713" : ""}
                    </span>
                    {lesson.title}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
