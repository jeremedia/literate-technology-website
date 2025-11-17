import { notFound } from "next/navigation";
import Link from "next/link";
import { getChapterBySlug, getAllChapters, getAppendix } from "@/lib/chapters";
import { markdownToHtml } from "@/lib/markdown";

export async function generateStaticParams() {
  const chapters = getAllChapters();
  const appendices = ['glossary', 'evaluation'];

  return [
    ...chapters.map((chapter) => ({
      slug: chapter.slug,
    })),
    ...appendices.map((slug) => ({ slug })),
  ];
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try to load as chapter first, then appendix
  let chapter = getChapterBySlug(
    slug === 'literate-technology' ? '00-literate-technology' :
    slug === 'illiterate-computer' ? '01-illiterate-computer' :
    slug === 'capability-vs-cognition' ? '13-capability-vs-cognition' :
    slug === 'measuring-literateness' ? '14-measuring-literateness' :
    slug
  );

  if (!chapter) {
    // Try loading as appendix
    const appendixSlug =
      slug === 'glossary' ? 'lt-glossary' :
      slug === 'evaluation' ? 'lt-evaluation-checklists' :
      slug;

    chapter = getAppendix(appendixSlug);
  }

  if (!chapter) {
    notFound();
  }

  const contentHtml = await markdownToHtml(chapter.content);
  const allChapters = getAllChapters();
  const currentIndex = allChapters.findIndex(c => c.slug === slug);
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-40">
        <div className="h-full bg-electric-blue transition-all duration-300" style={{ width: '0%' }} id="reading-progress"></div>
      </div>

      <article className="section">
        <div className="max-w-3xl mx-auto px-6">
          {/* Chapter header */}
          <div className="mb-12">
            <Link href="/read" className="text-gray-600 hover:text-electric-blue mb-4 inline-block">
              ← Back to Contents
            </Link>
            {chapter.number && (
              <div className="text-sm font-mono text-gray-500 mb-2">
                Chapter {chapter.number}
              </div>
            )}
            <h1 className="mb-4">{chapter.title}</h1>
            {chapter.readingTime && (
              <div className="text-gray-600">
                {chapter.readingTime} minute read
              </div>
            )}
          </div>

          {/* Chapter content */}
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-display prose-headings:font-semibold
              prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-3xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline
              prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-black prose-pre:text-white
              prose-strong:font-semibold prose-strong:text-black
              prose-em:italic
              prose-blockquote:border-l-4 prose-blockquote:border-electric-blue prose-blockquote:pl-6 prose-blockquote:italic
              prose-ul:list-disc prose-ul:ml-6
              prose-ol:list-decimal prose-ol:ml-6
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
            {prevChapter ? (
              <Link
                href={`/read/${prevChapter.slug}`}
                className="group flex items-center gap-2 text-gray-600 hover:text-electric-blue no-underline"
              >
                <span>←</span>
                <div>
                  <div className="text-sm">Previous</div>
                  <div className="font-medium">{prevChapter.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            {nextChapter ? (
              <Link
                href={`/read/${nextChapter.slug}`}
                className="group flex items-center gap-2 text-gray-600 hover:text-electric-blue no-underline text-right"
              >
                <div>
                  <div className="text-sm">Next</div>
                  <div className="font-medium">{nextChapter.title}</div>
                </div>
                <span>→</span>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </article>

      {/* Reading progress script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressBar = document.getElementById('reading-progress');
            if (progressBar) {
              progressBar.style.width = scrolled + '%';
            }
          });
        `
      }} />
    </div>
  );
}
