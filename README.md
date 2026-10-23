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

- Add red/green color for incorrect ranges
- Confirmation dialog for Clear Leaderboard
- Manual layout check at 375 px and 1920 px

---

## 📌 To Do

### US 3.1 — US 3.6

- Drag & drop
- Tooltip
- Reactions
- Pour Out
- Keyboard shortcuts
- Animations

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
