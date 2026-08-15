A single song row for the music section — embeds a `PlayButton`, shows title + meta, a slim seek line, and duration.

```jsx
<TrackRow title="Angel Wings" meta="Single · 2025" duration="3:42"
          progress={0.4} playing active onToggle={toggle} />
```

Set `active` for the current track (brightens + inner halo). `progress` is 0..1. Stack several inside a `Card` or bare in a column with `gap`.
