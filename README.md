# NULL

First-person 3D revenge campaign. Runs in the browser (WebGL / Three.js).

## Play

### GitHub Pages
**https://promptpages.github.io/NULL-game/**

The live site loads Three.js from a CDN and the game from `js/null-game.js`.

To enable the **full campaign** on Pages (not just the title bootstrap):

1. Download [`null-game.js`](https://github.com/promptpages/NULL-game) from this project’s artifacts (or export it from the standalone build).
2. In the repo: **Add file → Upload files** → upload as `js/null-game.js` (overwrite).
3. Wait a minute for Pages to rebuild.

### Standalone (offline, recommended)

Open **`NULL-fullscreen.html`** in any modern browser. No server, no install — Three.js is embedded. This is the complete game.

---

## Controls

| Key | Action |
|---|---|
| WASD | Move |
| Shift | Sprint |
| C | Crouch |
| Ctrl (while sprinting) | Slide |
| Space | Jump |
| LMB | Fire |
| RMB | Aim |
| R | Reload |
| E | Interact / rob |
| Tab | Pause |
| Esc | Skip cutscene |

---

## Repo layout

| File | Role |
|---|---|
| `index.html` | GitHub Pages shell (UI + Three CDN + loads `js/null-game.js`) |
| `js/null-game.js` | Game logic (full campaign when the complete script is uploaded) |
| `NULL-fullscreen.html` | Offline standalone build |
| `.nojekyll` | Lets Pages serve JS without Jekyll filtering |
