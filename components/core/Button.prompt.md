Pill action button — uppercase wide-tracked Inter, glass by default with light leaking on hover.

```jsx
<Button variant="glow" size="lg" onClick={playAll}>Listen</Button>
<Button variant="ghost">Follow</Button>
<Button variant="text">Read more</Button>
```

Variants: `ghost` (hairline glass outline, the default), `glow` (filled bone-white with a halo — reserve for the single primary action), `text` (bare muted link). Sizes `sm | md | lg`. Hover leaks halo/lightens; never changes layout.
