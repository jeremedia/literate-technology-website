"use client";

import { useState } from "react";

const exampleIntents = [
  {
    intent: "Check if the network is healthy and stable",
    traditional: [
      "Open System Preferences",
      "Navigate to Network settings",
      "Check connection status",
      "Open Terminal",
      "Run ping tests",
      "Check router admin panel",
      "Review connection logs",
      "Cross-reference with ISP status"
    ],
    traditionalTime: "5-10 minutes",
    literate: [
      "Analyzing MikroTik RB5009 status...",
      "Testing GL-BE3600 WiFi 7 connectivity...",
      "Checking active connections (25,583)...",
      "Reviewing error logs...",
      "✓ Network healthy: 0 errors, stable performance"
    ],
    literateTime: "8 seconds"
  },
  {
    intent: "Find all TODO comments in my codebase",
    traditional: [
      "Open each file manually",
      "Use Cmd+F to search 'TODO'",
      "Copy findings to notepad",
      "Repeat for all project files",
      "Organize by priority",
      "Format results"
    ],
    traditionalTime: "15-20 minutes",
    literate: [
      "Scanning project files...",
      "Found 23 TODO comments across 12 files",
      "Grouping by priority and file...",
      "✓ Generated organized report with context"
    ],
    literateTime: "3 seconds"
  },
  {
    intent: "Create a backup of my database",
    traditional: [
      "Find database credentials",
      "Look up backup command syntax",
      "Open terminal",
      "Navigate to correct directory",
      "Run mysqldump with flags",
      "Verify backup completed",
      "Move to backup location",
      "Update backup log"
    ],
    traditionalTime: "10-15 minutes",
    literate: [
      "Locating database credentials...",
      "Creating timestamped backup...",
      "Compressing backup file...",
      "Moving to /backups/...",
      "✓ Backup complete: db_2025-11-17_14-30.sql.gz (2.3 MB)"
    ],
    literateTime: "12 seconds"
  }
];

export default function PlaygroundPage() {
  const [selectedIntent, setSelectedIntent] = useState(0);
  const [customIntent, setCustomIntent] = useState("");
  const [showComparison, setShowComparison] = useState(false);

  const currentExample = exampleIntents[selectedIntent];

  const handleTryIntent = () => {
    if (customIntent.trim()) {
      setShowComparison(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="section">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-center mb-8">Interactive Playground</h1>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Experience the paradigm shift firsthand. See how Literate Technology transforms
            intent into action.
          </p>

          {/* Custom Intent Input */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-display font-semibold mb-4">Try Your Own Intent</h2>
            <div className="flex gap-4">
              <input
                type="text"
                value={customIntent}
                onChange={(e) => setCustomIntent(e.target.value)}
                placeholder="What do you want the computer to do?"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-md focus:border-electric-blue focus:outline-none text-lg"
                onKeyDown={(e) => e.key === 'Enter' && handleTryIntent()}
              />
              <button
                onClick={handleTryIntent}
                className="btn-primary"
              >
                Analyze
              </button>
            </div>
            {showComparison && customIntent && (
              <div className="mt-6 p-6 bg-white rounded-lg border-2 border-electric-blue">
                <p className="text-gray-700 mb-4">
                  <strong>Your intent:</strong> "{customIntent}"
                </p>
                <p className="text-gray-700">
                  In traditional computing, you'd need to know the specific commands, tools, and
                  sequences to accomplish this. With Literate Technology, you express what you want,
                  and the system understands and executes it—handling the complexity for you.
                </p>
              </div>
            )}
          </div>

          {/* Pre-loaded Examples */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-semibold mb-6">Real Examples from November 17</h2>
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              {exampleIntents.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIntent(index)}
                  className={`px-6 py-3 rounded-md font-medium whitespace-nowrap transition-all ${
                    selectedIntent === index
                      ? 'bg-electric-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {example.intent}
                </button>
              ))}
            </div>

            {/* Comparison View */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Approach */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display text-red-500">Traditional Computing</h3>
                  <span className="text-sm font-mono text-gray-600">{currentExample.traditionalTime}</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  {currentExample.traditional.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="text-gray-700">{step}</div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-300 text-amber-warning font-semibold">
                    Total: {currentExample.traditionalTime}
                  </div>
                </div>
              </div>

              {/* Literate Technology Approach */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display text-terminal-green">Literate Technology</h3>
                  <span className="text-sm font-mono text-gray-600">{currentExample.literateTime}</span>
                </div>
                <div className="bg-black text-terminal-green p-6 rounded-lg space-y-3 font-mono text-sm">
                  <div className="text-white">
                    <span className="text-gray-500">$ </span>
                    {currentExample.intent}
                  </div>
                  <div className="border-t border-gray-700 pt-3 space-y-2">
                    {currentExample.literate.map((step, index) => (
                      <div key={index} className="text-blue-400">
                        {step}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-700 text-terminal-green font-semibold">
                    Total: {currentExample.literateTime}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Multiplication Effect */}
          <div className="bg-electric-blue text-white p-12 rounded-lg text-center">
            <div className="text-6xl font-bold font-display mb-4">60×</div>
            <div className="text-2xl mb-6">Average Capacity Multiplication</div>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              When you shift from event-polling to intent expression, you don't just save time—you
              fundamentally change what's possible. Tasks that would take hours now take seconds.
            </p>
          </div>

          {/* How It Works */}
          <div className="mt-16 space-y-12">
            <h2 className="text-3xl font-display font-semibold text-center">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Express Intent</h3>
                <p className="text-gray-700">
                  Say what you want in natural language. No need to know the specific commands or tools.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">System Comprehends</h3>
                <p className="text-gray-700">
                  Literate Technology understands context, nuance, and what you actually mean—not just keywords.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Action Executed</h3>
                <p className="text-gray-700">
                  The system handles all the complexity, using the right tools and sequences automatically.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Ready to learn more about this paradigm shift?
            </p>
            <a href="/read" className="btn-primary inline-block no-underline">
              Read the Full Book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
