import { marked } from 'marked';

// Configure marked for better rendering
marked.setOptions({
  gfm: true,
  breaks: true,
});

export async function markdownToHtml(markdown: string): Promise<string> {
  return await marked(markdown);
}
