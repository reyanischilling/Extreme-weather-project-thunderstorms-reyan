# Extreme Weather Project - Thunderstorms: Design Guidelines

## Design Approach

**Hybrid Approach**: Material Design foundation with inspiration from National Geographic, Weather.com, and NASA's clean scientific presentation styles. The design balances educational credibility with visual drama appropriate for atmospheric phenomena.

**Core Principle**: "Scientific clarity meets atmospheric drama" - Use the inherent visual power of thunderstorm imagery while maintaining clean, accessible information architecture.

---

## Color Palette

### Dark Mode (Primary)
- **Primary**: 220 70% 15% (Deep storm blue - backgrounds)
- **Secondary**: 220 20% 25% (Storm gray - cards/sections)
- **Accent**: 200 100% 60% (Electric blue - CTAs, highlights)
- **Warning**: 45 100% 55% (Lightning yellow - alerts, interactive elements)
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 220 10% 70%

### Light Mode
- **Primary**: 210 100% 97% (Sky blue - backgrounds)
- **Secondary**: 220 15% 92% (Cloud gray - cards)
- **Accent**: 220 85% 45% (Deep blue - CTAs)
- **Text Primary**: 220 25% 15%

---

## Typography

**Font Stack**:
- **Primary**: 'Inter' (Google Fonts) - body text, UI elements
- **Display**: 'Space Grotesk' (Google Fonts) - headings, dramatic statements

**Scale**:
- Hero Title: text-6xl font-bold (72px)
- Section Headers: text-4xl font-semibold (36px)
- Subsections: text-2xl font-medium (24px)
- Body: text-base leading-relaxed (16px)
- Captions: text-sm (14px)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 24 consistently
- Section padding: py-24 desktop, py-12 mobile
- Component gaps: gap-8 for cards, gap-4 for list items
- Container: max-w-7xl mx-auto px-4

**Grid Strategy**:
- Research sections: 2-column split (question + answer format)
- Danger/Warning cards: 3-column grid on desktop
- Mobile: Always single column stack

---

## Component Library

### Hero Section
- **Full-viewport dramatic hero** (min-h-screen) with storm imagery background
- Overlaid title + subtitle with blur backdrop
- Smooth scroll indicator at bottom
- Parallax effect on background image

### Content Sections
- **Information Cards**: Elevated cards (shadow-xl) with hover lift effect
- **Research Question Blocks**: Each question as expandable accordion with smooth transition
- **Warning Badges**: Pill-shaped with icon, yellow accent background
- **Data Visualizations**: Clean charts for historical data using simple bar/line graphs

### Interactive Elements
- **Tooltips**: Dark background (bg-gray-900/95), rounded-lg, subtle drop shadow, appear on hover with 150ms delay
- **Scroll Progress Bar**: Fixed top, lightning-yellow accent, tracks page progress
- **Image Lightbox**: Click to expand weather images, dark overlay with close button

### Navigation
- **Sticky header**: Blurred glass-morphism effect (backdrop-blur-lg)
- **Smooth anchor links**: Scroll to sections with offset for fixed header
- **Mobile menu**: Slide-in drawer from right

---

## Image Strategy

### Hero Image
**Large hero image**: Dramatic thunderstorm photograph - dark clouds, lightning bolt, ominous sky. Full-bleed, high contrast.

### Section Images
- **Formation Section**: Diagram/photo of cumulonimbus cloud development
- **Conditions Section**: Split images showing various thunderstorm types
- **Dangers Section**: Lightning strike, hail damage, flooding imagery
- **Preparation Section**: Weather radar screenshot, emergency kit items
- **History Section**: Historical local storm damage photos

**Image Treatment**: All images with subtle vignette overlay, rounded corners (rounded-xl), and lazy loading

---

## Animations & Interactivity

**Entrance Animations** (using Framer Motion or CSS):
- Fade-up on scroll for content sections (100ms stagger)
- Scale-in for cards (hover: scale-105)
- Slide-in from left for questions, right for answers

**Micro-interactions**:
- Button hover: Subtle glow effect on accent color
- Card hover: Lift effect (translateY -4px) + shadow increase
- Tooltip appearance: Fade + slide from top (200ms)
- Accordion expand: Smooth height transition (300ms ease-in-out)

**Scroll Effects**:
- Parallax hero background (30% scroll speed)
- Progress bar fills as user scrolls
- Fade header background on scroll (starts transparent)

**Minimize**: Avoid excessive motion - no floating elements, no continuous animations

---

## Research Sources Section

**Design**: Simple citation list in footer-style section
- Two-column layout (desktop)
- Each source as clickable card with favicon
- Numbered list with APA/MLA formatting
- Subtle border-left accent in lightning-yellow

---

## Accessibility Features

- High contrast ratios (WCAG AAA where possible)
- Focus indicators on all interactive elements
- Reduced motion media query support
- Alt text for all weather imagery
- Keyboard navigation for all interactions
- ARIA labels for tooltips and accordions