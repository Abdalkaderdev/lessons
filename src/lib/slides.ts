export function splitIntoSlides(markdown: string): string[] {
  return markdown
    .split(/\n---\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}
