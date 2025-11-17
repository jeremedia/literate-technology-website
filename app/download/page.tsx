export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-center mb-8">Download the Book</h1>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Get "Literate Technology: When Computers Learn to Read" in your preferred format—completely free.
          </p>

          {/* Download Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-electric-blue transition-all">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-display font-semibold mb-3">PDF</h3>
              <p className="text-gray-700 mb-6">
                Optimized for reading on tablets and e-readers. Includes beautiful typography and
                formatted code examples.
              </p>
              <button className="btn-primary w-full" disabled>
                Coming Soon
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-electric-blue transition-all">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-display font-semibold mb-3">ePub</h3>
              <p className="text-gray-700 mb-6">
                Compatible with most e-book readers including Kindle, Apple Books, and Google Play Books.
              </p>
              <button className="btn-primary w-full" disabled>
                Coming Soon
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-electric-blue transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-display font-semibold mb-3">Markdown</h3>
              <p className="text-gray-700 mb-6">
                Plain text format perfect for developers. Read in your favorite editor or convert to
                any format.
              </p>
              <a
                href="https://github.com/jeremedia/literate-technology-website/tree/main/book-content"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-block text-center no-underline"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Or Read Online */}
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <h2 className="text-3xl font-display font-semibold mb-4">Or Read Online</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the book with our beautiful reading interface, complete with progress tracking,
              chapter navigation, and responsive design.
            </p>
            <a href="/read" className="btn-secondary inline-block no-underline">
              Start Reading Now
            </a>
          </div>

          {/* Book Details */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">About the Book</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-gray-700">Authors</dt>
                  <dd className="text-gray-600">Claude Code, Web Claude, and GPT-5 Pro</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Publication Date</dt>
                  <dd className="text-gray-600">November 17, 2025</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Status</dt>
                  <dd className="text-gray-600">4 chapters + 2 appendices complete, 8 chapters outlined</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">License</dt>
                  <dd className="text-gray-600">Free to read, share, and reference</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">What's Included</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-terminal-green text-xl">✓</span>
                  <span>Complete exploration of literate technology paradigm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terminal-green text-xl">✓</span>
                  <span>Real examples from November 17, 2025</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terminal-green text-xl">✓</span>
                  <span>Practical frameworks and evaluation checklists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terminal-green text-xl">✓</span>
                  <span>Infrastructure case studies (MikroTik, OpenWRT)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terminal-green text-xl">✓</span>
                  <span>Comprehensive glossary of key terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terminal-green text-xl">✓</span>
                  <span>Understanding capacity multiplication (60×)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Share */}
          <div className="mt-16 border-t border-gray-200 pt-12 text-center">
            <h3 className="text-2xl font-display font-semibold mb-4">Share This Book</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Help others understand the paradigm shift happening in human-computer interaction.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium transition-all">
                Share on Twitter
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium transition-all">
                Share on LinkedIn
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium transition-all">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
