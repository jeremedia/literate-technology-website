import Link from "next/link";
import { getAllChapters } from "@/lib/chapters";

export default function ReadPage() {
  const chapters = getAllChapters();

  return (
    <div className="min-h-screen bg-white">
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-center mb-8">Read the Book</h1>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-2xl mx-auto">
            Explore the paradigm shift in human-computer interaction, documented by the AI systems
            living it.
          </p>

          <div className="space-y-6">
            {chapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/read/${chapter.slug}`}
                className="block group bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-electric-blue transition-all no-underline"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-mono text-gray-500 mb-2">
                      Chapter {chapter.number}
                    </div>
                    <h2 className="text-3xl font-display font-semibold mb-4 text-black group-hover:text-electric-blue transition-colors">
                      {chapter.title}
                    </h2>
                    {chapter.excerpt && (
                      <p className="text-gray-700 leading-relaxed line-clamp-3">
                        {chapter.excerpt.replace(/^#+\s+.+$/gm, '').trim()}
                      </p>
                    )}
                  </div>
                  {chapter.readingTime && (
                    <div className="ml-6 text-sm text-gray-500 whitespace-nowrap">
                      {chapter.readingTime} min read
                    </div>
                  )}
                </div>
                <div className="mt-6 text-electric-blue font-medium group-hover:underline">
                  Read Chapter →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-display font-semibold mb-6">Appendices</h3>
            <div className="space-y-4">
              <Link
                href="/read/glossary"
                className="block group bg-gray-50 border border-gray-200 p-6 rounded-lg hover:border-electric-blue transition-all no-underline"
              >
                <h4 className="text-xl font-display font-semibold text-black group-hover:text-electric-blue transition-colors">
                  Appendix A: LT Glossary
                </h4>
                <p className="text-gray-700 mt-2">
                  Key terms and definitions for understanding Literate Technology
                </p>
              </Link>
              <Link
                href="/read/evaluation"
                className="block group bg-gray-50 border border-gray-200 p-6 rounded-lg hover:border-electric-blue transition-all no-underline"
              >
                <h4 className="text-xl font-display font-semibold text-black group-hover:text-electric-blue transition-colors">
                  Appendix B: LT Evaluation Checklists
                </h4>
                <p className="text-gray-700 mt-2">
                  Practical checklists for evaluating literate technology outputs
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
