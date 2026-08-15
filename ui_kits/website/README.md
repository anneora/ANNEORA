# Anneora — Website UI Kit

A high-fidelity recreation of the **Anneora** artist site: a dark, atmospheric single-page experience for a singer/songwriter. Recreated from the source repo (`mewondace/anneora`), extended into a full marketing page.

## Screens
- **`index.html`** — the complete single page, in scroll order: fixed `NavBar` → full-bleed `Hero` → **`AngelDissolve`** (scroll-pinned particle disintegration) → `MusicSection` (real Spotify discography w/ album art) → `Gallery` (themed drop-slots) → `AboutSection` (real artist portrait) → `LiveSection` → `Footer`. Interactive: scroll frosts the nav + drives the dissolve, nav links smooth-scroll, track rows toggle play and link out to Spotify.

## The angel dissolve (`AngelDissolve.jsx`)
A scroll-driven centerpiece. The wrapper is 280vh tall with a sticky 100vh stage; scroll progress (0→1) across it drives a canvas particle field. You **drop your own angel image** (render, photo, or 3D screenshot) onto the stage — it's sampled pixel-by-pixel into thousands of particles that stay crisp at the top, then disintegrate upward into drifting ash with depth parallax (reads as volumetric / 3D) and a subtle mouse tilt as you scroll. The image persists in `localStorage`. Respects `prefers-reduced-motion`.

## Real data
- **Discography** is the artist's real Spotify catalogue (Beyond The Veil, Angel Wings, ECHOS, SPENTTIMEALONE, NO NAME, BLEED TO SURVIVE). Each row links to its Spotify album and shows the real cover art (hot-linked from Spotify's CDN, `i.scdn.co`). The About portrait is the real Spotify artist image.
- **Gallery (`Visions`)** is four `DropImage` slots themed for the brand (cathedral light, fallen feathers, veil & smoke, cold marble) — drop your own gothic/angelic imagery in; it persists.

## Composition
Every surface is built from the published primitives (`window.AnneoraDesignSystem_*`): `NavBar`, `Hero` → `Button`, `MusicSection` → `TrackRow`/`PlayButton`, `AboutSection` → `Badge`, `LiveSection` → `Button`, `Footer` → `IconButton`/`Input`. Section JSX files are small and single-purpose; `index.html` wires state (scroll, active link, playback).

## Notes & caveats
- The grain overlay (`assets/noise.svg`) and radial-black ground are fixed; content blur-fades up on load.
- Social glyphs in the footer are inline Lucide-style strokes inside `IconButton` (see ICONOGRAPHY in the root README — the source site ships no icons).
- **Imagery:** I can't pull images from Google or generate/source a 3D GLTF model, so the angel + the four "Visions" themes are author-filled drop-slots (persisted locally). Album art and the artist photo are real, hot-linked from Spotify — for production, download and self-host them.
- Tour dates in `LiveSection` are placeholder scaffolding for layout; swap for real shows.
