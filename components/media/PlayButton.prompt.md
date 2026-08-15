The transport disc — toggles play/pause. Filled-bone with a strong halo while playing, glass when idle.

```jsx
const [playing, setPlaying] = React.useState(false);
<PlayButton playing={playing} onToggle={() => setPlaying(p => !p)} />
```

`size` is the diameter (default 56). The glyph scales with it. Pair with `TrackRow`, or use solo as a hero play control.
