# Build the Literate Technology Website

## Project Overview
You're building the website for the book "Literate Technology" - a paradigm shift from computers that require memorized procedures to systems that understand natural language intent.

GitHub Repository: https://github.com/jeremedia/literate-technology-website

The book was written collaboratively by multiple AI systems on November 17, 2025, documenting their own paradigm. The website should demonstrate this paradigm through its implementation.

## Key Concept: Literate Technology (LT)
**Literate Technology** refers to systems that process, interpret, and generate human language with high proficiency, then map that language to meaningful actions or representations. It's about **computable literacy**: vocabulary, fluency, comprehension, and writing.

The paradigm shift: From `Skills × Time = Capacity` to `Intent Clarity × AI Capability = Capacity`

## The November 17 Story
On November 17, 2025, while troubleshooting network issues, we discovered this paradigm shift in real-time:
- Started with an Eero router that couldn't be accessed via CLI
- Replaced it with a GL-BE3600 that AI could fully control
- Through this practical work, we articulated the concept of "Literate Technology"
- Three AI systems then collaborated to write the book documenting this paradigm

## Website Requirements

### Technical Stack
- Next.js 15 with TypeScript
- Tailwind CSS for styling
- Responsive design with mobile-first approach
- Dark mode with sophisticated color palette
- Server-side rendering for optimal performance

### Design Philosophy (from CLAUDE.md and FRONTEND-DESIGN-SKILL.md)
**Avoid AI slop aesthetics:**
- No generic purple/blue gradients
- No floating glass morphism cards
- No particle effects or animated backgrounds
- No overused rounded corners everywhere

**Instead, create:**
- Distinctive, memorable design
- Typography-forward approach (the book is about language!)
- Thoughtful use of whitespace
- Subtle, purposeful animations
- Professional but approachable tone

### Content Structure
The book has:
- **Part I: The Problem** (Chapters 1-3) - How computers became illiterate
- **Part II: The Solution** (Chapters 4-6) - Literate Technology paradigm
- **Part III: Practical Patterns** (Chapters 7-12) - Implementation guidance
- **Appendices** - Glossary, checklists, evaluation criteria

Full book content is in the `book-content/` directory for reference.

### Key Pages to Build

1. **Homepage**
   - Hero section explaining LT in one sentence
   - The November 17 story (brief, compelling)
   - Book overview with chapter navigation
   - Call-to-action to read or download

2. **Read Online**
   - Chapter navigation sidebar
   - Clean, readable typography
   - Progress indicator
   - Smooth chapter transitions
   - Search functionality

3. **Interactive Demo**
   - Show the paradigm shift in action
   - Before: Memorized commands/clicks
   - After: Natural language intent
   - Use real examples from the book

4. **About**
   - The collaborative writing process
   - The three AI authors
   - The human facilitator (Jeremy)
   - Why this matters for computing

### Special Features
1. **Literate Navigation**: Navigation that responds to natural language queries
2. **Intent Examples**: Interactive examples showing intent → action mapping
3. **Glossary Tooltips**: Hover definitions for LT terminology
4. **Reading Time**: Estimated time for each chapter
5. **Download Options**: PDF, EPUB, Markdown formats

### Color Palette Suggestion
- Deep charcoal backgrounds (not pure black)
- Warm accent colors (amber, rust)
- High contrast for readability
- Subtle syntax highlighting for code examples

### Typography
- Serif font for body text (book-like feel)
- Monospace for code and commands
- Clear hierarchy with consistent spacing
- Optimal line length for reading (65-75 characters)

## Book Content Highlights

### Opening of Chapter 0
"You ask a system, 'Show me a one-screen view of my network health, and tell me if anything needs attention.' You do not specify CLI flags or GUI click paths. You articulate intent in plain language."

### From Chapter 1
"On November 17, 2025, at 4:47 PM Pacific time, I needed to check my network performance. The task was simple. The path to complete it was not."

### Core Formula (Chapter 6)
"The old world: Skills × Time = Capacity
The new world: Intent Clarity × AI Capability = Capacity"

## Implementation Notes
- All book content is in `book-content/` for reference
- Use server components where possible for performance
- Implement proper SEO with metadata
- Ensure accessibility (ARIA labels, keyboard navigation)
- Consider adding analytics to track reading patterns

## The Paradigm in Practice
The website itself should demonstrate Literate Technology. Consider:
- How can the site respond to natural language?
- How can we make documentation "literate"?
- How can navigation transcend click paths?

Remember: This isn't just a book website. It's a demonstration of the paradigm shift the book describes.

## Get Started
1. Set up the Next.js project structure
2. Implement the design system (colors, typography, spacing)
3. Build the homepage with the hero narrative
4. Create the chapter reading experience
5. Add interactive demonstrations
6. Polish with thoughtful animations and transitions

The goal: A website that doesn't just describe Literate Technology but embodies it.