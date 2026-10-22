# NULL

A first-person 3D action campaign about a man raised from birth to be an assassin, whose father is murdered by an organisation called **Nook** when he is sixteen.

Open **`index.html`** to play. Nothing to install — it runs in the browser with WebGL (Three.js is loaded from a CDN).

---

## Controls

| Key | Action |
|---|---|
| **W A S D** | Move |
| **Shift** | Sprint — drains stamina, cannot sprint at zero |
| **C** | Crouch |
| **Ctrl** (while sprinting) | Slide — fast, low, drops your profile |
| **Space** | Jump |
| **LMB** | Fire |
| **RMB** | Aim down sights (tighter spread, less sway) |
| **R** | Reload |
| **V** | Melee |
| **E** | Interact / search / **rob a store** |
| **Tab** | Pause — resume, checkpoint & mission select, settings, keybinds, intel |
| **Esc** | Skip a cutscene |

All binds can be changed in **Tab → Keybinds**. Settings and binds persist in your browser.

---

## Difficulty

1. **Easy** — they shoot late, miss often, you can take a beating.
2. **Normal** — a fair fight; vital hits matter, cover matters more.
3. **Hard** — they aim, they flank, **headshots kill you**.
4. **NULL** — one round to the head, neck or heart and you are gone.

---

## Damage model

- **Head / jugular / heart** — lethal. NPCs die instantly; on Hard and NULL so do you.
- **Torso** — normal damage, with a chance the round finds something vital.
- **Arms** — reduced damage but **your vision blurs and recoil control collapses** until you recover.
- **Legs** — reduced damage and your movement is impaired.

Enemies fire in bursts, use cover distance, strafe, and reload.

---

## Systems

- **Cash** — found on the ground, taken from Nook bodies, or stolen from registers.
- **Weapons** — rare. You start with a pistol; SMGs, rifles, sawn-off shotguns and a marksman rifle must be found or taken from the dead. Kills sometimes drop ammo.
- **Stores** — three shops in *Blood Market* can be robbed. Do it and the owner and every employee pull a weapon. Survive and your **reputation** drops.
- **Reputation** — 0–100, starts at 50. Killing Nook troops raises it. Robbery, civilian kills and assault lower it. Let it fall far enough and ordinary people in the street will attack you.
- **Checkpoints** — saved automatically at every objective. Die and you can return to the last checkpoint or restart the mission from the pause menu.

---

## Campaign — 7 missions

| # | Mission | |
|---|---|---|
| 1 | **ASHFALL** | A Nook checkpoint in a rain-soaked yard. You meet Jackson. |
| 2 | **COLD TRAIL** | Warehouse 4. The crew. A manifest with four hundred names on it. |
| 3 | **SIXTH FLOOR** | The relay station that tells Nook where everyone is. |
| 4 | **BLOOD MARKET** | A civilian street full of Nook money — and robable tills. |
| 5 | **THE CAGE** | You are captured. You wake up unarmed. Harrow is watching. |
| 6 | **LONG NIGHT** | The depot that fed the men who took you. Jackson does not walk out. |
| 7 | **NOOK TOWER** | The last address. Only Sofie is still standing at the end. |

A full run of the campaign, played cleanly, is roughly **20–30 minutes** plus cutscenes.

---

## The crew

You are **NULL** — tall, strong, military buzz cut, no name.

- **JACKSON** — tall, broad, the wall between you and them. Always at your side.
- **SOFIE** — tall, curvy, the best fighter in the room. Fights beside you and Jackson on almost every mission.
- **WREN** — small, round, cheerful, obsessed with explosives.
- **KESTREL** — lean, wiry, overwatch with a marksman rifle.
- **DICE** — wiry, glasses, signals and locks, talks too much.
- **BISHOP** — heavy-set, bald, beard, heavy weapons.

Behind them: **Harrow**, the man who runs Nook, and the man who stood in your father's yard eight years ago.

---

## Notes

- Cutscenes are cinematic camera sequences with subtitles (no voice acting).
- Gore is present but restrained — blood particles, impact decals, no dismemberment. It can be turned off in settings.
- Audio is procedurally generated (gunfire, impacts, ambience) — no audio files needed.
