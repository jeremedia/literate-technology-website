# Literate Technology Website

## Mission
Create an interactive, beautiful website for the Literate Technology book that demonstrates the paradigm it documents. The site itself should be "literate" - understanding visitor intent and adapting accordingly.

## Core Concept
This website presents the book "Literate Technology: When Computers Learn to Read" - a collaborative work written by three AI systems documenting their own paradigm on November 17, 2025.

## Design Principles
1. **Show, Don't Just Tell**: Interactive demonstrations of literate technology
2. **Progressive Disclosure**: Start simple, reveal depth as readers engage
3. **Beautiful Typography**: The book is about language - make it gorgeous to read
4. **Mobile-First**: Most will discover this on phones
5. **Fast**: Static site with smart interactions
6. **Accessible**: Screen readers, keyboard nav, high contrast

## Key Features

### Landing Experience
- **Hero Section**: The paradigm shift in one powerful statement
- **Live Demo**: Simple interactive showing intent → action
- **The Problem**: Animated visualization of event-polling burden
- **The Solution**: Show the 60× multiplication factor

### Book Content
- **Chapter Preview**: First few paragraphs of each chapter
- **Read Online**: Full chapters in beautiful typography
- **Download**: PDF, ePub, web formats
- **Audio Version**: AI-narrated (meta!)

### Interactive Elements
1. **Intent Playground**: Type what you want, see how LT would handle it
2. **Capacity Calculator**: Compare traditional vs LT time investment
3. **Evolution Timeline**: GUI → CLI → LT progression
4. **Real Examples**: November 17 network monitoring story

### The Meta Story
- **Three Authors**: Show how Claude Code, Web Claude, and GPT-5 Pro collaborated
- **Writing Process**: Timeline of the book's creation
- **Live Statistics**: Words written, concepts explored, paradigms documented

## Technical Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom typography
- **Animations**: Framer Motion
- **Content**: MDX for chapters
- **Search**: Algolia or local search
- **Analytics**: Privacy-first (Plausible/Umami)

## Content Structure
```
/                     # Landing page
/read                 # Table of contents
/read/[chapter]       # Individual chapters
/playground           # Interactive demos
/story                # How this book was written
/download             # Get the book
/insights             # Key concepts visualized
```

## Visual Design
- **Color Palette**:
  - Deep blacks and whites (high contrast)
  - Accent: Electric blue (#0EA5E9) for interactive elements
  - Success: Green for completed actions
  - Warning: Amber for traditional approach comparisons

- **Typography**:
  - Headers: Inter or Geist (modern, clean)
  - Body: Crimson Pro or Literata (readable serif)
  - Code: JetBrains Mono

- **Layout**:
  - Max width 65ch for optimal reading
  - Generous whitespace
  - Pull quotes for key insights
  - Side notes for context

## Key Pages to Build

### 1. Landing Page
- Hero with the core thesis
- Problem/Solution comparison
- Chapter preview cards
- Call to action (Read Chapter 1)

### 2. Chapter Reader
- Beautiful reading experience
- Progress indicator
- Table of contents sidebar
- Next/previous navigation
- Share quotes feature

### 3. Interactive Playground
- "Ask the Computer" demo
- Shows intent → exploration → result
- Pre-loaded examples from the book
- Shareable results

### 4. The 60× Page
- Visual comparison of traditional vs LT
- Real timing data from November 17
- Interactive calculator
- Case studies

## Implementation Notes
- Start with static site generation for speed
- Progressive enhancement for interactions
- Consider RSC for dynamic elements
- Optimize for Core Web Vitals
- Deploy to Vercel for best Next.js performance

## Success Metrics
- Time to first meaningful paragraph < 1s
- Reading completion rate > 40%
- Playground engagement > 60% of visitors
- Social shares of key concepts
- "Aha!" moments in user feedback

## The Opening Statement
"On November 17, 2025, three AI systems began writing a book about themselves. Not about their architecture or training, but about the paradigm shift they represent: computers that can finally read what we mean, not just what we type."

## Remember
This website is documenting a paradigm shift as it happens. Make it worthy of the moment. The site should demonstrate literate technology, not just describe it.

$809 remaining in credits - more than enough to create something extraordinary!