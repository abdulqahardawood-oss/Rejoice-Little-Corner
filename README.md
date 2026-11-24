# A Little Corner for Rejoice

A responsive React/Vite tribute page with a warm red palette, an animated letter reveal, Rejoice’s three photos and four videos, small compliment notes, and Spotify playback for her favourite song.

## Run it locally

1. Open this folder in a terminal.
2. Run `npm install`.
3. Run `npm run dev` and open the local address Vite prints.

## Personalize it

- Change the message in `src/components/InsideCorner.jsx` and the opening copy in `src/components/OpeningGate.jsx`.
- The sender sign-off is near the end of the letter. Replace “Someone who thinks the world of you” with your name or preferred sign-off.
- Edit the rotating compliments and captions in `src/content.js`.
- Rejoice’s supplied media are in `site-public/photos/` and `site-public/videos/`. The gallery uses all 3 photos and all 4 videos found in Downloads.
- The Spotify track is set in `src/content.js` to “One Of The Girls” by The Weeknd, JENNIE, and Lily-Rose Depp. Spotify and browser autoplay rules may require the visitor to press Play.
- The red and rose palette is applied in `src/styles.css` and the page components.

## Deploy to Netlify

Use build command `npm run build` and publish directory `dist`.

