import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Chapter {
  slug: string;
  number: string;
  title: string;
  content: string;
  excerpt?: string;
  readingTime?: number;
}

const chaptersDirectory = path.join(process.cwd(), 'book-content/chapters');
const appendicesDirectory = path.join(process.cwd(), 'book-content/appendices');

export function getChapterBySlug(slug: string): Chapter | null {
  try {
    const fullPath = path.join(chaptersDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract title from first # heading if not in frontmatter
    let title = data.title || '';
    let number = data.number || '';

    if (!title) {
      const titleMatch = content.match(/^#\s+(.+)$/m);
      if (titleMatch) {
        title = titleMatch[1];
        // Extract chapter number if present
        const numberMatch = title.match(/^Chapter\s+(\d+):\s+(.+)/i);
        if (numberMatch) {
          number = numberMatch[1];
          title = numberMatch[2];
        }
      }
    }

    // Calculate reading time (average 200 words per minute)
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);

    // Get excerpt (first paragraph)
    const excerpt = content.split('\n\n')[1] || content.substring(0, 200);

    return {
      slug,
      number,
      title,
      content,
      excerpt,
      readingTime,
    };
  } catch (error) {
    console.error(`Error loading chapter ${slug}:`, error);
    return null;
  }
}

export function getAllChapters(): Chapter[] {
  const chapters: Chapter[] = [];

  // Define chapter mappings
  const chapterFiles = [
    { file: '00-literate-technology', number: '0', slug: 'literate-technology' },
    { file: '01-illiterate-computer', number: '1', slug: 'illiterate-computer' },
    { file: '13-capability-vs-cognition', number: '13', slug: 'capability-vs-cognition' },
    { file: '14-measuring-literateness', number: '14', slug: 'measuring-literateness' },
  ];

  for (const chapterInfo of chapterFiles) {
    try {
      const fullPath = path.join(chaptersDirectory, `${chapterInfo.file}.md`);
      if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Extract title from first # heading
        let title = data.title || '';
        if (!title) {
          const titleMatch = content.match(/^#\s+(.+)$/m);
          if (titleMatch) {
            title = titleMatch[1];
            const numberMatch = title.match(/^Chapter\s+\d+:\s+(.+)/i);
            if (numberMatch) {
              title = numberMatch[1];
            }
          }
        }

        const words = content.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200);
        const excerpt = content.split('\n\n')[1] || content.substring(0, 200);

        chapters.push({
          slug: chapterInfo.slug,
          number: chapterInfo.number,
          title,
          content,
          excerpt,
          readingTime,
        });
      }
    } catch (error) {
      console.error(`Error loading chapter ${chapterInfo.file}:`, error);
    }
  }

  return chapters.sort((a, b) => parseInt(a.number) - parseInt(b.number));
}

export function getAppendix(slug: string): Chapter | null {
  try {
    const fullPath = path.join(appendicesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    let title = data.title || '';
    if (!title) {
      const titleMatch = content.match(/^#\s+(.+)$/m);
      if (titleMatch) {
        title = titleMatch[1];
      }
    }

    return {
      slug,
      number: 'A',
      title,
      content,
    };
  } catch (error) {
    console.error(`Error loading appendix ${slug}:`, error);
    return null;
  }
}
