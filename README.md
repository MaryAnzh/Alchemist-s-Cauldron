# 🧪 Alchemist’s Cauldron

RS School game task  
Task URL: https://github.com/rolling-scopes-school/qualifying-stage/blob/main/tasks/game-alchemists-cauldron/README.md

## ✨ Creative Extension — Alchemist’s Journey

An extension of Alchemist’s Cauldron focused on personal player progress
and an integrated presentation for the project interview.

- [Assignment](https://github.com/rolling-scopes-school/qualifying-stage/blob/main/tasks/creative-extension/mini-games.md)
- [Assessment criteria](https://github.com/rolling-scopes-school/qualifying-stage/blob/main/tasks/creative-extension/mentors-check.md)

### Goals

- Give the player a persistent identity: name and avatar.
- Track completed games, statistics, and achievements.
- Present the idea, architecture, technical decisions, and results inside the application.

The extension uses Vanilla TypeScript and the existing component-based UI.
Profile data stays in localStorage; no backend, authentication, or framework
migration is planned.

### Progress

#### Foundation

- [x] Add hash-based routing and a profile placeholder
- [x] Configure Vitest and add route parsing tests
- [x] Add the profile model, storage service, and validation
- [x] Add profile validation tests
- [ ] Verify automated deployment from the development branch

#### Player profile

- [ ] Request the player's name before starting a game
- [ ] Show the player's name and avatar in the header
- [ ] Add profile navigation
- [ ] Add preset avatars and resized image uploads
- [ ] Record completed games without duplicates
- [ ] Preserve gameplay counters when continuing a saved game
- [ ] Display recent history and aggregated statistics
- [ ] Add achievements and unlock notifications
- [ ] Test history, statistics, and achievement rules

#### Integrated presentation

- [x] Add a presentation page and route
- [x] Add the slide component and initial title slide
- [x] Add the preview rendering skeleton
- [ ] Implement title, content, and split layouts
- [ ] Add slide navigation and clickable preview cards
- [ ] Add keyboard controls and a current-slide indicator
- [ ] Prepare content for a 5–10 minute presentation
- [ ] Add slide transitions with reduced-motion support

#### Final polish

- [ ] Handle unavailable or full localStorage with visible feedback
- [ ] Check responsive layouts and keyboard navigation
- [ ] Verify profile persistence and the existing game flow
- [ ] Rehearse the presentation and live demonstration

#### Optional

- [ ] Statistics charts
- [ ] Localization

### Data and limitations

The profile is planned to store the player's name, avatar, recent game
records, and unlocked achievements. Uploaded avatars will be resized
before storage.

Data belongs to the current browser and origin. It is not synchronized
between devices and may be lost when browser storage is cleared.

### Validation

```sh
npm run tsc
npm run lint
npm test
npm run build
```

Tests are added alongside each feature. Checklist items are marked complete
only after implementation and verification.

## 🔗 Deploy

https://maryanzh.github.io/Alchemist-s-Cauldron/

## 🧰 Tech Stack

- TypeScript
- Vite
- Custom UI Kit (Component, Button, Input, Portal)
- Vanilla State Store (EventEmitter + GameTimer + Storage)

---

## ✅ Completed

### Story 1 — project setup

- Repository preparation
- Tooling, folder structure
- Quality checks and linting

### Game Logic

- Base store with core game logic

### US 1.1

- Ingredient data
- Shelf cards
- Cauldron ingredient list

### US 1.2

- Three parameter bars
- Pure function for summing ingredient values

### US 1.3

- Recipe table
- Random recipe selection
- Recipe panel
- Brew check

### US 1.4 — US 1.5

- Timer
- Lives
- Pause
- Game-over flow
- Save state

### US 1.6

- Top‑10 leaderboard

### US 2.1 — Difficulty selection

- Easy / Medium / Hard with separate settings (time, lives, tolerance, score, shelf size, cauldron size, reactions)
- Difficulty switch in the menu
- Start screen with empty shelf and cauldron

### US 2.2 — Save & continue

- Auto-save on every important change and on pause
- **Continue Game** in the menu only for a valid unfinished save
- Saved game opens paused, ingredient stock is restored
- New game overwrites the save, **Exit to Menu** clears it
- Storage data validation, safe localStorage access
- Auto-pause when the tab is hidden
- Leaderboard per difficulty with a Difficulty column
- Game over reason (time / lives / out of ingredients)
- Score `0` is never added to the leaderboard; **Submit Score** is shown only for a new record
- Leaderboard: in-app confirmation for **Clear Leaderboard**, empty state, disabled clear button when empty, responsive table (name and date wrap on small screens)
- Menu closes on outside click
- Ingredient stock no longer leaks between games (shelf objects are copied)
- Pre-push hook checks `tsc`, ESLint, Prettier and build and fails on any error

### Level 1 visuals (US 1.2, US 1.4)

- Timer: red and pulsing when less than 15 seconds remain, shrinking time bar next to `MM:SS`
- Parameter bars: green glow when the current value is inside the recipe range

### Level 3 (Done)

- **US 3.4 Pour Out** — button under the cauldron, costs 10 s, disabled when the cauldron is empty
- **US 3.1 Drag & Drop** — ingredient cards are draggable into the cauldron (`dragstart` / `dragover` / `dragleave` / `drop`), the cauldron glows on drag-over, drops are ignored when paused / cauldron full / stock `0`, click still works
- Ingredient cards: gold glow (box-shadow) on hover and keyboard focus
- **US 3.2 Ingredient Tooltip** — on Hard the card shows only icon and name, values (`+` / `−`) are shown in a tooltip that opens left / up near screen edges and is hidden on pause
- New SVG icons: ingredient bottles in the Dragon Tears style (Frost Lotus, Mandrake Root, Caustic Acid, Essence of the Void, Phoenix Feather, Toad Slime) and Temperature / Magic Power icons on cards and range bars
- **US 3.6 Keyboard Shortcuts** — one handler, only in the `playing` state: `1–8` add ingredient, `B` brew, `X` pour out, `P` / `Esc` pause; ignored in text fields; hints in Rules and in the pause dialog
- Cauldron SVG split into layers (back wall / potion / front); potion appears when the cauldron has ingredients
- **US 3.3 Chemical Reactions** — 15 reactions in `store/logic/reactions.ts` (typed `IReaction[]`), `evaluateReactions` recalculates values from the ingredient list and returns only reactions that went `inactive → active`; one-time effects (time, life, clear cauldron) are applied by the store; layering `constants → types → logic` keeps imports free of cycles
- **US 3.5 Visual Feedback** — success: white potion + glow; fail: explosion + screen shake; ingredient icons float in the cauldron; recipe fades out and the new one fades in; all CSS keyframes
- Round result dialog removed: after Brew the next round starts at once, feedback is shown by animations
- Brew is disabled while the cauldron is empty; range arrows start at `0`
- Game Over: **Play again** button (new game with a new random stock), validation error under the name input no longer overlaps the field

### Fixes & Improvements

- Timer fix
- Empty ingredient view fix
- Visual pause button
- User name input
- Refactored view rendering
- Leaderboard item removal
- Menu settings
- Update leaderboard icons (2nd and 3rd place)
- Responsive layout

## 📌 Done -- Level 3 (115 points)

- [x] **US 3.1 Drag & Drop (20)** — HTML5 drag events (`dragstart`, `dragover`, `dragleave`, `drop`), drop-zone highlight, ignore drop when paused / cauldron full / stock `0`, click still works
- [x] **US 3.2 Ingredient Tooltip (15)** — cards show icon and name only; tooltip with Temperature / Density / Magic Power (`+` / `−`), opens left / up near screen edges, hidden on pause
- [x] **US 3.3 Chemical Reactions (35)** — typed `IReaction[]` (15 reactions), Easy 0 / Medium 2 / Hard 3, fire only on `inactive → active`, recalculate values from the ingredient list every time
- [x] **US 3.4 Pour Out (10)** — button clears the cauldron, costs 10 s, no life lost, disabled when empty, ingredients are not returned
- [x] **US 3.5 Visual Feedback (20)** — success glow and white potion, fail explosion and short screen shake, floating ingredient icons, smooth parameter bars, CSS-only animations. Optional floating time-bonus text is also implemented; recipe fade is an additional effect.
- [x] **US 3.6 Keyboard Shortcuts (15)** — one handler gated by `playing` state, pause / resume, ignored in text fields and on menu / pause / game-over screens
- [x] Level 3 settings: 150 s and 3 lives (Medium / Hard, see the settings table in the task)

---

## 🧪 Test combinations (manual check)

> For manual testing only. Combos were calculated by script with the real tolerance (Easy ±12, Medium ±8, Hard ±5), max ingredients (4 / 4 / 5) and enabled reactions of each level. Combos that fire Volatile Mix are excluded. The shelf is a random subset of ingredients, so use the 2nd combo if the 1st ingredient is not on the shelf. Mark `[x]` after a check.

### Easy (no reactions)

- [ ] **Moon Mist** — Dragon Tears; or Dragon Tears + Dragon Tears
- [ ] **Root Bloom** — Mandrake Root; or Caustic Acid
- [ ] **Frost Steam** — Fairy Dust; or Mandrake Root
- [ ] **Quiet Swirl** — Fairy Dust + Frost Lotus; or Frost Lotus + Frost Lotus
- [ ] **Bright Dew** — Dragon Tears + Mandrake Root; or Dragon Tears + Caustic Acid
- [ ] **Snow Dust** — Frost Lotus + Mandrake Root; or Frost Lotus + Caustic Acid

### Medium (reactions: Bubbling, Solar Frost)

- [ ] **Acid Spark** — Caustic Acid; or Dragon Tears + Caustic Acid
- [ ] **Void Ember** — Dragon Tears + Essence of the Void; or Fairy Dust + Essence of the Void
- [ ] **Heavy Acid** — Fairy Dust + Mandrake Root; or Mandrake Root + Caustic Acid
- [ ] **Frost Acid** — Fairy Dust + Frost Lotus; or Frost Lotus + Caustic Acid
- [ ] **Dusty Void** — Dragon Tears + Essence of the Void; or Fairy Dust + Essence of the Void
- [ ] **Dragon Void** — Dragon Tears ×2 + Essence of the Void; or Dragon Tears + Fairy Dust + Essence of the Void
- [ ] **Rooted Night** — Mandrake Root + Essence of the Void; or Dragon Tears + Mandrake Root + Essence of the Void

### Hard (reactions: Volatile Mix, Pressure Spike, Deep Freeze)

- [ ] **Phoenix Pulse** — Fairy Dust + Phoenix Feather; or Caustic Acid + Phoenix Feather
- [ ] **Slime Crown** — Mandrake Root ×2; or Mandrake Root + Toad Slime
- [ ] **Void Flame** — Dragon Tears ×2 + Essence of the Void; or Dragon Tears + Frost Lotus ×2 + Phoenix Feather
- [ ] **Acid Bog** — Fairy Dust + Toad Slime; or Mandrake Root + Caustic Acid
- [ ] **Frozen Ash** — Frost Lotus + Mandrake Root + Phoenix Feather
- [ ] **Triple Eclipse** — Fairy Dust + Mandrake Root + Essence of the Void; or Mandrake Root + Caustic Acid + Essence of the Void
- [ ] **Ember Soup** — Dragon Tears ×2 + Fairy Dust; or Dragon Tears ×2 + Caustic Acid

### 🧬 Reactions

15 reactions exist in `src/store/logic/reactions.ts`. Each difficulty enables only its own subset: **Easy** — none, **Medium** — Bubbling and Solar Frost, **Hard** — Volatile Mix, Pressure Spike and Deep Freeze. A reaction fires once, when it goes from inactive to active; values are always recalculated from the ingredient list.

| Reaction          | Difficulty  | Condition                                               | Effect                                      |
| ----------------- | ----------- | ------------------------------------------------------- | ------------------------------------------- |
| Bubbling          | Medium      | Fairy Dust + Caustic Acid                               | Magic Power +50%, timer −10 s (once)        |
| Solar Frost       | Medium      | Dragon Tears + Frost Lotus                              | Temperature becomes `0`, Density +20%       |
| Volatile Mix      | Hard        | Phoenix Feather + Essence of the Void                   | −1 life, the cauldron is cleared (once)     |
| Pressure Spike    | Hard        | Density ≥ 70                                            | Density is capped at `70`, Magic Power +10% |
| Deep Freeze       | Hard        | Temperature ≤ −20                                       | Density +15%, Magic Power −15%              |
| Rooted Steam      | not enabled | Mandrake Root + Toad Slime                              | Density +25%, Magic Power −10%              |
| Ashen Bloom       | not enabled | Phoenix Feather + Fairy Dust                            | Temperature +10, Magic Power +25%           |
| Annihilation      | not enabled | One ingredient with Temp > 15 and one with Temp < −15   | Temperature becomes `0`, Density ×2         |
| Magma Flux        | not enabled | Temperature ≥ 60                                        | Magic Power +20%, Density −10%              |
| Arcane Saturation | not enabled | Magic Power ≥ 80                                        | Magic Power capped at `80`, Temperature +5  |
| Steam Burst       | not enabled | Dragon Tears + Caustic Acid and Temperature ≥ 35        | Temperature +10, timer −5 s (once)          |
| Black Ice         | not enabled | Frost Lotus + Essence of the Void and Density ≤ 0       | Temperature −10, Magic Power +20%           |
| Heavy Spark       | not enabled | Fairy Dust + Toad Slime and Density ≥ 40                | Density +20%, Magic Power +10%              |
| Burning Root      | not enabled | Mandrake Root + Phoenix Feather and Temperature ≥ 40    | Temperature +15, Density −10%               |
| Void Resonance    | not enabled | Essence of the Void + Dragon Tears and Magic Power ≥ 50 | Magic Power +30%, Temperature −5            |

Visual effects of reactions are described in «Cauldron effects» below.

### Reaction checks

- [ ] Medium: Dragon Tears + Frost Lotus → Temperature `0`, Density +20% (Solar Frost)
- [ ] Medium: Fairy Dust + Caustic Acid → Magic Power +50%, timer −10 s once (Bubbling)
- [ ] Hard: Phoenix Feather + Essence of the Void → −1 life and the cauldron is cleared (Volatile Mix)
- [ ] Easy: any pair → no reactions
- [ ] Reload the page after a reaction → no second time / life penalty

---

## 🎨 Animations

### Implemented for the task

- **Timer warning (US 1.4)** — below 15 seconds, the timer turns red and pulses; the time bar shrinks as time runs out.
- **Parameter bars (US 1.2 / US 3.5)** — range arrows move smoothly; the target-zone glow indicates when a value is in range.
- **Brew success (US 3.5)** — the cauldron glows and the potion turns white.
- **Brew failure (US 3.5)** — an explosion effect and a short screen shake.
- **Ingredients in the cauldron (US 3.5)** — ingredient icons float.

### Additional effects added

- **Cauldron boiling** — bubbles loop while ingredients are present and stop when the cauldron is emptied.
- **Reactions** — bubbles, smoke and the reaction name float up when an enabled reaction fires. Volatile Mix has dark smoke and orange bubbles.
- **Successful brew** — floating `+Ns` bonus-time text (15 / 10 / 5 seconds by difficulty); this is optional in the task.
- **Recipe change** — the old recipe fades out and the new one fades in.

All visual effects use CSS animations; JavaScript creates/removes effect elements but does not use `setTimeout` or `setInterval` to animate them.

The earlier animation notes also listed the menu-opening effect and the timer-button hover change. These are separate UI polish items, not US 3.5 requirements; their final manual check is still outstanding.

### ✨ Cauldron effects (US 3.5, CSS only)

All effects are pure CSS keyframes. JS only creates elements and removes them on `animationend` (no `setTimeout` / `setInterval`).

| Effect                                                        | When                                  | Which reactions                                                               |
| ------------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------- |
| Boiling bubbles on the surface (6, looping)                   | While the cauldron has ≥ 1 ingredient | — (always)                                                                    |
| Burst of bubbles (9) + light purple smoke (5) + reaction name | A reaction fires                      | Any: Bubbling, Solar Frost (Medium); Pressure Spike, Deep Freeze (Hard); etc. |
| Dark smoke (8) + orange bubbles (5) + reaction name           | Volatile Mix fires                    | Volatile Mix (Hard)                                                           |
| Floating `+Ns` (gold, 15 / 10 / 5 by difficulty)              | Successful brew                       | —                                                                             |
| Green glow, white potion                                      | Successful brew                       | —                                                                             |
| Red explosion + screen shake                                  | Failed brew                           | —                                                                             |

**How to check**

- [ ] Add 1 ingredient → small bubbles keep popping on the potion surface
- [ ] Pour out / new round → the bubbles stop (cauldron is empty)
- [ ] Medium: Fairy Dust + Caustic Acid → the name «Bubbling» floats up, bubbles and smoke rise, all gone in ~3 s
- [ ] Medium: Dragon Tears + Frost Lotus → same effect with «Solar Frost»
- [ ] Hard: Phoenix Feather + Essence of the Void → dark smoke and orange bubbles, «Volatile Mix», −1 life
- [ ] Trigger two reactions in a row → the names stack, not overlap
- [ ] Brew a correct combo (see tables above) → `+Ns` floats up, potion turns white
- [ ] Brew a wrong combo → red explosion and screen shake
- [ ] Check at 375 px and 1920 px: effects stay above the cauldron and don't block clicks

## 🚀 Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev       # dev server (Vite)
npm run build     # type check + production build
npm run preview   # preview the build
npm run lint      # ESLint
npm run tsc       # type check
npm run format:check  # Prettier check
```

## Game Rules

- Each recipe defines required ranges for **temperature**, **density**, and **magic power**.
- Every ingredient changes these parameters when added to the cauldron.
- Your goal is to match all recipe ranges within the allowed tolerance.
- A successful brew gives **score** and **bonus time**.
- A failed brew costs **one life**.
- When lives reach zero, time runs out, or no ingredients are left, the game ends.
- The timer runs continuously unless the game is paused.
- The **Top‑10 leaderboard** stores the best results.
- You can continue an unfinished game if a valid save exists.
