# Ruralift Call Bell

Reception → Production room calling bell over Socket.io.

## Pages
- `/reception` — mobile page with big "RING BELL" button (give this URL to reception phone)
- `/production` — PC page that plays bell sound when reception rings (open this on production room PC, tap "Enable Sound" once)

## Local run
```
npm install
npm start
```
Visit http://localhost:3000/reception and http://localhost:3000/production in two tabs to test.

## Deploy to Railway
1. Push this repo to GitHub
2. In Railway: New Project → Deploy from GitHub repo
3. Railway auto-detects Node.js, runs `npm install` then `npm start`
4. No env vars needed — PORT is auto-provided by Railway
5. Once deployed, open `https://<your-app>.up.railway.app/production` on the PC and `https://<your-app>.up.railway.app/reception` on the mobile

## Notes
- Sound is generated with Web Audio API (no audio file needed) — on the production PC, you must tap "Enable Sound" once after page load (browser autoplay policy requires a user gesture).
- Keep the /production tab open on the PC at all times (e.g. pin it, or use a spare monitor/browser window).
