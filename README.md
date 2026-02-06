# PerkPeeps - Invisible Loyalty Layer Landing Page

A story-driven, high-converting pre-launch landing page for PerkPeeps, an invisible loyalty rewards system for independent cafés.

## Design System

### Cyber-Matcha Boutique Aesthetic

**Color Palette:**
- **Carbon Background**: `#08090A`
- **Cyber Matcha (Primary)**: `#C1FF72` - Neon green highlights and CTAs
- **Electric Taro (Secondary)**: `#8B5CF6` - Purple accents and section dividers
- **Dragonfruit (Accent)**: `#FF5D8F` - High-dopamine highlights
- **Neutrals**: Dark grays for depth and readability

**Typography:**
- **Headings**: Outfit (Font weight: 800) - Bold, oversized, tight letter-spacing
- **Body Text**: Plus Jakarta Sans - Clean, readable, professional

## Page Structure

### 1. Hero Section: "The Awakening" (Level 01)
- Kinetic blooming animation on load
- Main headline: "Your Brand. Their Ritual."
- Subheadline highlighting the pain point
- Floating 3D phone mockup showing "+500 XP UNLOCKED" badge
- Primary CTA: "Join the Awakening" (WhatsApp integration)
- XP progress bar that fills as user scrolls

### 2. Ghost Phase: "Chapter 01: The Ghost Phase"
- Psychology-focused copy addressing "Anonymous Regulars"
- Copy: "They come. They go. You never know."
- Parallax scroll effect transitioning from grayscale to vibrant colors
- Stats highlighting the friction trap: 84% won't download apps
- Pain point visualization

### 3. Features Section: "Built for the Modern Maker"
- Bento Grid layout with 4 feature cards
- Card A (Double Size): Zero Downloads
- Card B: POS Agnostic
- Card C: Staff Stays Human
- Card D (Double Size): Dopamine Driven
- Hover animations with glassmorphism effect
- Interactive transitions and depth effects

### 4. Founder Invite: "Radical Honesty"
- Two founder cards with direct contact options
- Email, WhatsApp, and phone contact methods
- "Priority Line" messaging emphasizing personal service
- High-res "Vibe" photos placeholder
- Trust and transparency positioning

### 5. Footer: "The Final Vibe Check"
- Main CTA: "Ready to turn one-timers into all-the-timers?"
- Live counter: [15/20] Spots Claimed in Batch 01
- Social media links (Instagram, TikTok)
- Quick navigation links
- Copyright and batch info

## Technical Features

### Animations
- **Bloom**: Kinetic text entrance animation
- **Glow Pulse**: Neon glow effect on CTAs
- **Float**: Subtle floating motion on elements
- **Shimmer**: Gradient animation on text

### Interactive Elements
- Scroll progress bar (XP meter concept)
- Parallax scrolling effects
- Hover state animations on cards
- WhatsApp integration for CTAs
- Smooth scroll behavior

### Responsive Design
- Mobile-first approach
- All bento cards stack elegantly on mobile
- Optimized typography sizing across breakpoints
- Touch-friendly button sizes

### Visual Effects
- Film grain overlay (subtle texture)
- Glassmorphism with backdrop blur
- Gradient backgrounds with blur effects
- Border animations on hover
- Box shadow enhancements

## Component Structure

```
components/perkpeeps/
├── hero.tsx              # Hero section with floating phone mockup
├── ghost-phase.tsx       # Parallax scrolling pain point section
├── features.tsx          # Bento grid feature cards
├── founder-invite.tsx    # Founder contact section
├── footer.tsx            # Footer with stats and socials
└── progress-bar.tsx      # Top scroll progress indicator
```

## Key Features

### WhatsApp Integration
All CTAs trigger WhatsApp with pre-filled message:
```
"Yo PerkPeeps! I want to level up my shop. Let's talk."
```

### Live Counter System
Dynamic spots remaining counter (customizable):
- Total: 20 spots
- Current logic: `const spotsRemaining = 5`
- Update in `components/perkpeeps/footer.tsx`

### Glassmorphism Design
- Frosted glass effect with `backdrop-blur-sm`
- Semi-transparent backgrounds with border overlays
- Creates depth and modern aesthetic

### Kinetic Typography
- Outfit 800 weight for maximum impact
- Gradient text effects on key headlines
- Animated entrance sequences
- Tight letter-spacing for bold presence

## Customization

### Update Founder Information
Edit `components/perkpeeps/founder-invite.tsx`:
```javascript
const founders = [
  {
    id: 1,
    name: 'Your Name',
    email: 'your-email@perkpeeps.com',
    whatsapp: '+1 (555) 123-4567',
    // ...
  },
  // ...
]
```

### Adjust Live Counter
Edit `components/perkpeeps/footer.tsx`:
```javascript
const [spotsRemaining, setSpotsRemaining] = useState(5) // Change this number
```

### Modify Copy
All text is easily editable within each component file. Search for section headings and subheadings to update messaging.

### Color System
Update in `app/globals.css` under `:root`:
```css
--primary: #C1FF72;      /* Cyber Matcha */
--secondary: #8B5CF6;    /* Electric Taro */
--accent: #FF5D8F;       /* Dragonfruit */
```

## SEO & Metadata

- Title: "PerkPeeps - Invisible Loyalty Layer for Independent Cafés"
- Description: "The invisible rewards layer for cafés that care about vibe. Join 20 partner cafés in the awakening."
- Theme Color: #08090A (carbon background)
- Viewport optimized for mobile-first indexing

## Performance

- Optimized animations using CSS transforms
- Lazy loading ready for images
- Clean, semantic HTML structure
- Accessible ARIA labels and roles
- Fast interaction feedback

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tailwind CSS v3 compatible
- Smooth scroll behavior on supported browsers

---

**Built with:** Next.js 16, React 19, Tailwind CSS, Lucide Icons, Custom Animations

**Ready to deploy:** Optimized for Vercel deployment with zero configuration required.
