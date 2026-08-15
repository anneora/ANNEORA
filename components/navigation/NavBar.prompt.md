Top navigation — Cinzel wordmark on the left, uppercase wide-tracked links on the right. Transparent over the hero, frosts on scroll.

```jsx
<NavBar
  links={['Music', 'About', 'Live']}
  active="Music"
  onNavigate={setView}
  scrolled={scrollY > 40}
  right={<Button size="sm" variant="ghost">Follow</Button>}
/>
```

Pass `scrolled` from a scroll listener to trigger the frosted background + hairline border.
