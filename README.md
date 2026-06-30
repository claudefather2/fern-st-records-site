# Fern St Records — Website

Public marketing site for **Fern St Records**, a static one-page site (vintage analog label
aesthetic) hosted on GitHub Pages. The private catalog/business repo lives separately at
`fern-st-records`.

## Files
- `index.html` — the single-page site (hero, roster, releases, about, contact)
- `styles.css` — vintage/analog styling
- `script.js` — mobile nav, single-track playback (only one plays at a time), scroll reveal, Spotify-link activation
- `assets/songs/*.mp3` — full song audio, one file per track (basename = song slug)

## Run locally
Just open `index.html` in a browser, or serve it:
```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Adding / updating a song
Drop the full MP3 into `assets/songs/<song-slug>.mp3` (slug must match the catalog repo), then add
or update its `<audio>` element in `index.html`:
```html
<audio controls preload="none" src="assets/songs/<song-slug>.mp3"></audio>
```
`script.js` automatically wires every `<audio>` so only one track plays at a time.

## Adding a Spotify link (once released)
`script.js` activates any `a.chip[data-spotify]` element: set the `data-spotify` attribute to the
track's Spotify URL and on load it becomes a live "Spotify" button. To use it, add a chip beside a
track in `index.html`:
```html
<a class="chip chip--soon" data-spotify="https://open.spotify.com/track/XXXX">Spotify · soon</a>
```
(No tracks are released yet, so there are currently no Spotify chips in the page.)

## Deploy
Hosted via **GitHub Pages** from `main` (root). Pushing to `main` updates the live site.

— Not legal advice; see the private repo's `LEGAL.md` for IP/commercial posture.
