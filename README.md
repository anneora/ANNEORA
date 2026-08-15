# Anneora Design System

> **voice from the void**

The design system for **Anneora** — a singer / songwriter creating *dark, atmospheric soundscapes*. The brand is one idea, held with discipline: a single voice (and a single point of light) suspended in near-total black. Everything here exists to protect that emptiness.

## Source material

This system was built from the artist's web presence:

- **GitHub:** [`mewondace/anneora`](https://github.com/mewondace/anneora) — the source single-page site (`index.html` + `style.css`). The radial-black ground, grain overlay, Cinzel/Inter pairing, glass track cards, and the *voice from the void* tagline all come directly from here.

The repo is small; explore it to confirm the original markup and to see the three real singles (*Angel Wings*, *Spent Time Alone*, *Echoes*). Everything beyond that — the token system, components, and extended UI kit — is a faithful extrapolation of that aesthetic, not invented from whole cloth.

---

## CONTENT FUNDAMENTALS

How Anneora writes.

- **Voice — first person, intimate, sparse.** The artist speaks as *I* directly to a single listener: *"I'm a singer / songwriter creating dark, atmospheric soundscapes."* Never corporate "we." Addressing the listener is implied, rarely "you" — the listener is alone in the room.
- **Tone — hushed, atmospheric, a little melancholic.** Copy reads like a whispered liner note, not marketing. Short declarative fragments. Negative space in words as much as in layout.
- **Casing.** Body and prose are sentence case. Labels, nav, buttons, and overlines are **UPPERCASE with wide tracking** (0.18em). The wordmark **ANNEORA** is always all-caps, widely spaced (0.25em+).
- **Punctuation.** The slash is a signature: *"singer / songwriter"*. Sparse periods; em-dashes for breath.
- **No emoji. No exclamation marks.** Energy is conveyed by restraint, never enthusiasm. Avoid hype words ("amazing", "stunning").
- **Vibe.** Twilight, reverb, solitude, the void, breath, echoes. Title tracks and pages with quiet, image-rich single words: *Echoes, Undertow, Hollow Light*.
- **Examples**
  - Tagline: `voice from the void`
  - CTA: `Listen` · `Follow` · `RSVP` (one word, imperative, calm)
  - Overline: `SINGER · SONGWRITER` · `DISCOGRAPHY` · `IN THE ROOM`
  - About: *"Each track is a room you walk into alone."*

---

## VISUAL FOUNDATIONS

- **Color.** Monochrome. A near-black **void** scale (`#000 → #2e2e2e`) for ground and surfaces; a **bone** scale (`#f5f5f5 → #6b6b6b`) for type. There is no chromatic accent — the *only* "color" is a **cold-white halo** (`rgba(255,255,255,.2)`). Use color tokens, never raw hex.
- **Ground.** A fixed **radial gradient**, light at the very top (`#1a1a1a`) falling to pure black — like a single dim source overhead. Always paired with a **grain overlay** (`assets/noise.svg`, ~5% opacity, `position: fixed`) so the black never looks flat or digital.
- **Type.** Two families. **Cinzel** (engraved classical serif, weight 500) for the wordmark and headings — carved, eternal, wide-tracked. **Inter** (weight 300) for everything you read — light, quiet, modern. Generous letter-spacing is the brand's signature; type breathes like sound in an empty room.
- **Spacing.** An 8px rhythm with *extra-tall* vertical padding (sections at 80–120px). Each idea lives alone in the dark — never crowd two together.
- **Backgrounds.** Always the fixed radial black + grain. No photography by default (if imagery is ever used it must be desaturated, cold, grainy, near-black). No bright panels, ever.
- **Surfaces / cards.** **Frosted glass:** a barely-there fill (`rgba(255,255,255,.04)`), a **hairline veil border** (`rgba(255,255,255,.08)`), `border-radius: 10px`, and `backdrop-filter: blur(10px)`. Cards float; they don't sit.
- **Shadows.** Almost never a drop shadow. Depth is **light leaking out of edges** — a soft outer halo (`0 0 32px rgba(255,255,255,.06)`) and a faint inner glow, not a dark cast. Reserve a wide near-black float shadow (`0 24px 60px rgba(0,0,0,.6)`) only for genuinely lifted overlays.
- **Glow.** The hero wordmark carries `text-shadow: 0 0 20px rgba(255,255,255,.2)`. The active/playing state glows brighter (filled bone + `0 0 34px`). Glow = emphasis; it replaces color entirely.
- **Borders.** Hairlines only. `veil-08` for resting cards, `veil-12` when lit/active. Dividers are 1px vertical lines fading to transparent.
- **Corner radius.** `10px` for cards/tracks (from the source site), `999px` pills for buttons/badges/inputs, `50%` for transport discs. Nothing sharp; nothing very round except controls.
- **Transparency & blur.** Used constantly — every surface is glass over the void. Blur is `10px` on cards, `16px` on the scrolled nav. The nav is fully transparent over the hero and frosts only once scrolled.
- **Buttons.** Pills. `ghost` (hairline glass) is the default; `glow` (filled bone + halo) is reserved for the *single* primary action per view; `text` for bare muted links.
- **Hover states.** Light *leaks in* — border brightens (`.18 → .45`), a faint halo appears, text lifts from muted to bone. Never a color change. Glow buttons brighten their halo and lift 1px.
- **Press states.** Quiet — no aggressive shrink. Glow controls intensify their halo. Transitions stay slow.
- **Motion.** Slow and dissolving — nothing snaps. Content **drifts up** on load (`1200ms`, translateY + blur fade). Easing is `cubic-bezier(0.16,1,0.3,1)` (out) / `cubic-bezier(0.22,0.61,0.36,1)` (veil). Durations 180/320/600/1200ms. No bounces, no infinite decorative loops. Respect `prefers-reduced-motion`.
- **Layout.** Centered and narrow. The wordmark centers in the viewport; prose caps at 600px, the track list at 700px. A fixed transparent nav. Lots of emptiness around everything.

---

## ICONOGRAPHY

- **The source site ships no icons** — it relies on the browser's native `<audio controls>` and on type alone. The system therefore defines a deliberately minimal icon approach.
- **Transport glyphs are drawn in-house** as simple filled play-triangle / pause-bars inside `PlayButton` — geometric, no library, scaling with the disc.
- **Social & utility icons:** **Lucide-style** thin strokes (1.6px, round caps/joins) rendered inside `IconButton`. This is a *substitution* — the brand has no documented icon set — chosen for its quiet, even, modern line that matches Inter. **⚠️ Flagged:** if Anneora adopts an official icon set, replace these. They can be linked from the Lucide CDN (`https://unpkg.com/lucide-static`) or kept inline as in `ui_kits/website/Footer.jsx`.
- **No emoji, ever.** Unicode is used sparingly and only as quiet ornament: `·` (middot) as a separator, `↓` for the scroll hint, `/` in "singer / songwriter".
- **Assets:** `assets/noise.svg` is the grain texture (an `feTurbulence` filter), used as a fixed low-opacity overlay everywhere. There is no figurative logo — the wordmark *is* the logo (Cinzel, all-caps, glowing).

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point consumers link (`@import` lines only).
- `README.md` — this guide. `SKILL.md` — portable Agent-Skill wrapper.

**`tokens/`** — CSS custom properties, each `@import`ed by `styles.css`
- `fonts.css` (Cinzel + Inter via Google Fonts) · `colors.css` (void / bone / halo / veils) · `typography.css` (families, scale, the tracking system) · `spacing.css` (8px rhythm, containers) · `effects.css` (radius, glass, glow, grain, motion).

**`components/`** — reusable React primitives (published under `window.AnneoraDesignSystem_*`)
- `core/` — **Button**, **IconButton**, **Card**, **Input**, **Badge**
- `media/` — **PlayButton**, **TrackRow**
- `navigation/` — **NavBar**

**`ui_kits/website/`** — full single-page recreation of the Anneora site (Hero, Music, About, Live, Footer). See its own `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`assets/`** — `noise.svg` grain texture.

---

## Substitutions & caveats

- **Fonts** are loaded from **Google Fonts** (Cinzel, Inter) — both are the exact families used by the source site, so no visual substitution, but they require network access. Swap to self-hosted `@font-face` for offline/production use.
- **Icons** are a Lucide-style substitution (see ICONOGRAPHY) — the brand has no official set.
- **Extended content** (additional tracks, tour dates, the EP "The Quiet") is plausible placeholder scaffolding for layout, not confirmed releases. Replace with real data.
