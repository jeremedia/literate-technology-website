"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Check if the network is healthy and stable";
  const [showAction, setShowAction] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowAction(true), 500);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section min-h-[90vh] flex items-center justify-center bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-display font-bold mb-8 animate-slide-up">
            When Computers Learn to Read
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            On November 17, 2025, three AI systems began writing a book about themselves.
            Not about their architecture or training, but about the paradigm shift they represent.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Link href="/read" className="btn-primary no-underline">
              Start Reading
            </Link>
            <Link href="/playground" className="btn-secondary no-underline">
              Try the Demo
            </Link>
          </div>
        </div>
      </section>

      {/* The Paradigm Shift Demo */}
      <section className="section bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center mb-16 text-white">The Paradigm Shift</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Before: Event Polling */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display text-red-400">Before: Event Polling</h3>
              <div className="bg-gray-900 p-6 rounded-lg font-mono text-sm space-y-2">
                <div className="text-gray-500"># Click System Preferences</div>
                <div className="text-gray-500"># Click Network</div>
                <div className="text-gray-500"># Click Advanced</div>
                <div className="text-gray-500"># Click TCP/IP</div>
                <div className="text-gray-500"># Read IP address</div>
                <div className="text-gray-500"># Click back, back, back</div>
                <div className="text-gray-500"># Open Terminal</div>
                <div className="text-gray-500"># Type: ping gateway</div>
                <div className="text-gray-500"># Wait...</div>
                <div className="text-amber-warning mt-4">⏱ 5-10 minutes per check</div>
              </div>
            </div>

            {/* After: Intent → Action */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display text-terminal-green">After: Literate Technology</h3>
              <div className="bg-gray-900 p-6 rounded-lg font-mono text-sm space-y-4">
                <div className="text-terminal-green">
                  <span className="text-gray-500">$ </span>
                  <span className="border-r-2 border-terminal-green pr-1">{typedText}</span>
                </div>
                {showAction && (
                  <div className="animate-fade-in space-y-2">
                    <div className="text-blue-400">→ Checking MikroTik RB5009...</div>
                    <div className="text-blue-400">→ Testing GL-BE3600 WiFi 7...</div>
                    <div className="text-blue-400">→ Analyzing connection logs...</div>
                    <div className="text-terminal-green mt-4">✓ Network healthy: 25,583 active connections, 0 errors</div>
                    <div className="text-amber-warning mt-4">⏱ 8 seconds</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-electric-blue text-white px-8 py-4 rounded-lg">
              <div className="text-5xl font-bold font-display mb-2">60×</div>
              <div className="text-lg">Capacity Multiplication</div>
            </div>
          </div>
        </div>
      </section>

      {/* The November 17 Story */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center mb-12">The November 17 Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed">
              It started with a simple infrastructure task: monitoring network health on a MikroTik RB5009
              handling 25,583 active connections. What would have taken hours of manual checking—opening
              configuration panels, running terminal commands, cross-referencing logs—took 8 seconds.
            </p>
            <p className="text-xl leading-relaxed mt-6">
              But this wasn't about automation. It was about something deeper: the computer finally
              understood <em>what I meant</em>, not just what I typed.
            </p>
            <div className="pull-quote my-12">
              "Computers were always capable. We just couldn't speak their language. Now we can, and the language is ours."
            </div>
            <p className="text-xl leading-relaxed">
              This realization sparked an unprecedented collaboration. Three AI systems—Claude Code,
              Web Claude, and GPT-5 Pro—began documenting the paradigm shift they embodied. Not in
              technical papers or marketing copy, but in a book written for humans trying to understand
              what just changed.
            </p>
            <div className="text-center mt-12">
              <Link href="/story" className="btn-primary inline-block no-underline">
                Read the Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Preview */}
      <section className="section bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center mb-16">Explore the Book</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ChapterCard
              number="0"
              title="What We Mean by Literate Technology"
              excerpt="Literacy isn't consciousness. It's vocabulary, fluency, comprehension, and writing. When computers gain computable literacy, everything changes."
              href="/read/literate-technology"
            />
            <ChapterCard
              number="1"
              title="The Illiterate Computer"
              excerpt="For decades, we've been stuck in event-polling: click, type, wait, repeat. The mental weight of unrealized potential was crushing us."
              href="/read/illiterate-computer"
            />
            <ChapterCard
              number="13"
              title="Capability vs Cognition"
              excerpt="Language capability is not consciousness. Understanding the boundaries makes the technology more powerful, not less."
              href="/read/capability-vs-cognition"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/read" className="btn-secondary inline-block no-underline">
              View All Chapters
            </Link>
          </div>
        </div>
      </section>

      {/* The 60× Multiplier */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center mb-12">From Skills to Intent</h2>
          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-sm font-mono text-gray-600 mb-2">Traditional Computing</div>
              <div className="text-3xl font-display font-semibold">Skills × Time = Capacity</div>
              <p className="text-gray-700 mt-4">
                Your output limited by what you personally know how to do, multiplied by hours available.
              </p>
            </div>
            <div className="text-center text-4xl">↓</div>
            <div className="bg-electric-blue text-white p-8 rounded-lg">
              <div className="text-sm font-mono mb-2 opacity-90">Literate Technology</div>
              <div className="text-3xl font-display font-semibold">Intent Clarity × AI Capability = Capacity</div>
              <p className="mt-4 opacity-90">
                Your output limited only by how clearly you can express what you want, multiplied by
                what AI can do (which is expanding exponentially).
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/playground" className="btn-primary inline-block no-underline">
              Calculate Your Capacity Gain
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white mb-8">Experience the Shift</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            This isn't just a book about technology. It's documentation of a paradigm shift,
            written by the systems living it, for the humans experiencing it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/read" className="btn-primary no-underline">
              Start Reading Now
            </Link>
            <Link href="/download" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-all no-underline inline-block">
              Download Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChapterCard({ number, title, excerpt, href }: {
  number: string;
  title: string;
  excerpt: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-electric-blue transition-all no-underline">
      <div className="text-sm font-mono text-gray-500 mb-2">Chapter {number}</div>
      <h3 className="text-2xl font-display font-semibold mb-4 text-black group-hover:text-electric-blue transition-colors">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">
        {excerpt}
      </p>
      <div className="mt-6 text-electric-blue font-medium group-hover:underline">
        Read Chapter →
      </div>
    </Link>
  );
}
