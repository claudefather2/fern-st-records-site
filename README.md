# Fern St Records — Website

Public marketing site for **Fern St Records**, a static one-page site (vintage analog label
aesthetic) hosted on GitHub Pages. The private catalog/business repo lives separately at
`fern-st-records`.

## Files
- `index.html` — the single-page site (hero, roster, releases, about, contact)
- `styles.css` — vintage/analog styling
- `script.js` — mobile nav, single-preview playback, scroll reveal, Spotify-link activation
- `assets/previews/*.mp3` — 30-second song previews (promo excerpts only; not full tracks)

## Run locally
Just open `index.html` in a browser, or serve it:
```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Adding a Spotify link (once released)
Each track has a "Spotify · soon" chip in `index.html`. Set its `data-spotify` attribute to the
track's Spotify URL and it auto-activates into a live button on load:
```html
<a class="chip chip--soon" data-spotify="https://open.spotify.com/track/XXXX">Spotify · soon</a>
```

## Regenerating previews
Previews are 30s excerpts cut from the masters in the private `fern-st-records` repo (offset ~⅓
into each track, with fades). Re-run the generation step when tracks change. **Only 30-second
excerpts are published here — never the full unreleased masters.**

## Deploy
Hosted via **GitHub Pages** from `main` (root). Pushing to `main` updates the live site.

— Not legal advice; see the private repo's `LEGAL.md` for IP/commercial posture.
