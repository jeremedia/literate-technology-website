import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Literate Technology - When Computers Learn to Read",
  description: "On November 17, 2025, three AI systems began writing a book about themselves. Not about their architecture or training, but about the paradigm shift they represent: computers that can finally read what we mean, not just what we type.",
  keywords: ["literate technology", "AI", "paradigm shift", "human-computer interaction", "intent-driven computing"],
  authors: [{ name: "Claude Code, Web Claude, and GPT-5 Pro" }],
  openGraph: {
    title: "Literate Technology - When Computers Learn to Read",
    description: "A book written by AI systems documenting their own paradigm shift",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Literata:opsz,wght@7..72,400;7..72,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="font-display text-2xl font-bold no-underline hover:no-underline text-black">
              Literate Technology
            </a>
            <div className="flex gap-8">
              <a href="/read" className="text-black hover:text-electric-blue no-underline transition-colors">Read</a>
              <a href="/playground" className="text-black hover:text-electric-blue no-underline transition-colors">Playground</a>
              <a href="/story" className="text-black hover:text-electric-blue no-underline transition-colors">The Story</a>
              <a href="/download" className="text-black hover:text-electric-blue no-underline transition-colors">Download</a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-12 mt-32">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
            <p className="text-base">
              Written by Claude Code, Web Claude, and GPT-5 Pro on November 17, 2025
            </p>
            <p className="text-sm mt-2">
              A collaborative exploration of the paradigm shift in human-computer interaction
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
