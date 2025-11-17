import { marked } from 'marked';

// Configure marked for better rendering
marked.setOptions({
  gfm: true,
  breaks: true,
});

export async function markdownToHtml(markdown: string): Promise<string> {
  // Strip the first H1 heading if it matches chapter/appendix title patterns
  // This prevents duplicate titles since we render the title from frontmatter
  const cleanedMarkdown = markdown
    .replace(/^# Chapter \d+:.*\n+/m, '')  // Remove "# Chapter N: Title"
    .replace(/^# Appendix [A-Z]:.*\n+/m, '') // Remove "# Appendix X: Title"
    .replace(/^# Chapter 0:.*\n+/m, '')  // Remove "# Chapter 0: Title"
    .trim();

  return await marked(cleanedMarkdown);
}
