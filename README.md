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

### Fixes & Improvements

- Timer fix
- Empty ingredient view fix
- Visual pause button
- User name input
- Refactored view rendering
- Leaderboard item removal
- Menu settings

---

## 🚧 In Progress

- Update leaderboard icons (2nd and 3rd place)
- Add red/green color for incorrect ranges
- Responsive layout

---

## 📌 To Do

### US 2.1 — US 2.2

- Difficulty selection
- Save & continue game

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

## Game Rules

- Each recipe defines required ranges for **temperature**, **density**, and **magic power**.
- Every ingredient changes these parameters when added to the cauldron.
- Your goal is to match all recipe ranges within the allowed tolerance.
- A successful brew gives **score** and **bonus time**.
- A failed brew costs **one life**.
- When lives reach zero, the game ends.
- The timer runs continuously unless the game is paused.
- The **Top‑10 leaderboard** stores the best results.
- You can continue an unfinished game if a valid save exists.
