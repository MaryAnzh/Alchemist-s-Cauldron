# 🧪 Alchemist’s Cauldron

RS School game task  
Task URL: https://github.com/rolling-scopes-school/qualifying-stage/blob/main/tasks/game-alchemists-cauldron/README.md

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

### US 1.3 (15/10–16/10)

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

### Level 3 (in progress)

- **US 3.4 Pour Out** — button under the cauldron, costs 10 s, disabled when the cauldron is empty
- **US 3.1 Drag & Drop** — ingredient cards are draggable into the cauldron (`dragstart` / `dragover` / `dragleave` / `drop`), the cauldron glows on drag-over, drops are ignored when paused / cauldron full / stock `0`, click still works
- Ingredient cards: gold glow (box-shadow) on hover and keyboard focus
- **US 3.2 Ingredient Tooltip** — on Hard the card shows only icon and name, values (`+` / `−`) are shown in a tooltip that opens left / up near screen edges and is hidden on pause
- New SVG icons: ingredient bottles in the Dragon Tears style (Frost Lotus, Mandrake Root, Caustic Acid, Essence of the Void, Phoenix Feather, Toad Slime) and Temperature / Magic Power icons on cards and range bars
- **US 3.6 Keyboard Shortcuts** — one handler, only in the `playing` state: `1–8` add ingredient, `B` brew, `X` pour out, `P` / `Esc` pause; ignored in text fields; hints in Rules and in the pause dialog
- Cauldron SVG split into layers (back wall / potion / front); potion appears when the cauldron has ingredients
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

---

## 🚧 In Progress

- Animated cauldron potion (bubbles, success / fail effects, floating ingredients) — part of US 3.5

---

## 📌 To Do — Level 3 (115 points)

- [x] **US 3.1 Drag & Drop (20)** — HTML5 drag events (`dragstart`, `dragover`, `dragleave`, `drop`), drop-zone highlight, ignore drop when paused / cauldron full / stock `0`, click still works
- [x] **US 3.2 Ingredient Tooltip (15)** — cards show icon and name only; tooltip with Temperature / Density / Magic Power (`+` / `−`), opens left / up near screen edges, hidden on pause
- [ ] **US 3.3 Chemical Reactions (35)** — typed `IReaction[]` (15 reactions), Easy 0 / Medium 2 / Hard 3, fire only on `inactive → active`, recalculate values from the ingredient list every time
- [x] **US 3.4 Pour Out (10)** — button clears the cauldron, costs 10 s, no life lost, disabled when empty, ingredients are not returned
- [ ] **US 3.5 Visual Feedback (20)** — success animation, explosion + short screen shake on fail, floating ingredient icons in the cauldron, smooth bars, CSS-only animations (no `setInterval` / `setTimeout`)
- [x] **US 3.6 Keyboard Shortcuts (15)** — one handler gated by `playing` state, pause / resume, ignored in text fields and on menu / pause / game-over screens
- [ ] Level 3 settings: 150 s and 3 lives

---

## 🎨 Animations

- Range arrow animation
- Hover: change timer button to pause button
- Open menu animation

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
