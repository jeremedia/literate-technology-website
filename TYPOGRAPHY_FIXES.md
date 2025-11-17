# Typography Fixes Needed

## Critical Issues (from screenshot evidence)

### 1. **SPACING - Most Critical**
The headings have NO padding above or below, making the text unreadable.

**Current Problems:**
- H2 headers ("The Event-Polling Prison") are cramped against preceding text
- No visual separation between sections
- Paragraphs run together
- No breathing room anywhere

**Fix in globals.css:**
```css
/* Add proper spacing to ALL headings */
h1, h2, h3, h4, h5, h6 {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

/* First heading in a section needs less top margin */
h1:first-child,
h2:first-child {
  margin-top: 0;
}

/* Paragraphs need breathing room */
p {
  margin-bottom: 1.5rem;
}

/* Section breaks */
.prose h2 {
  padding-top: 3rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose h3 {
  padding-top: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
```

### 2. **Double Title Problem**
The chapter title appears twice - once in the header, once in the markdown content.

**Fix in lib/markdown.ts or wherever content is processed:**
```typescript
// Strip the first H1 if it matches the chapter title
const processedContent = content.replace(/^#\s+Chapter \d+:.*\n/m, '');
```

### 3. **Font Rendering**
The fonts look like system fonts, not the intended typography.

**Fix in layout.tsx - add font-display:**
```html
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### 4. **Prose Class Overrides**
The Tailwind prose classes might be conflicting with custom styles.

**Fix in the chapter page component:**
```tsx
<div
  className="prose prose-lg prose-slate max-w-none
    [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:text-4xl [&>h2]:font-bold
    [&>h3]:mt-12 [&>h3]:mb-4 [&>h3]:text-3xl [&>h3]:font-semibold
    [&>p]:mb-6 [&>p]:leading-relaxed
    [&>p+h2]:mt-20 [&>p+h3]:mt-16
    [&>ul]:my-6 [&>ol]:my-6
    [&>blockquote]:my-8"
  dangerouslySetInnerHTML={{ __html: contentHtml }}
/>
```

### 5. **Line Height Issues**
Text appears too tight vertically.

**Fix in globals.css:**
```css
body {
  line-height: 1.6;
}

p {
  line-height: 1.8;
}

h1, h2, h3 {
  line-height: 1.3;
}
```

## Quick Test Checklist

After applying fixes, verify:
- [ ] Headings have clear space above and below
- [ ] Paragraphs don't run together
- [ ] Chapter title appears only once
- [ ] Fonts are Crimson Pro (headings) and Literata (body)
- [ ] Text is comfortable to read with proper line spacing
- [ ] Visual hierarchy is clear

## Priority Order

1. **Fix spacing immediately** - This is making the site unreadable
2. Remove duplicate titles
3. Ensure fonts are loading
4. Fine-tune prose classes
5. Adjust line heights

The content is great but the typography is destroying the reading experience!