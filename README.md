# M4ze Spr1nter

Welcome to M4ze Spr1nter! This is a game with a focus on high speed and precision - solve each maze in as short of a time as possible to set new high scores. From the classic maze to some abominations recommended by this game's community, there's fun and a challenge for everyone.

> Credit to Circlon Tech @FreePik for the maze icon.
> Credit to motion.dev for the burger SVG icon.
> Credit to V0 @typcn for the home icon - see [https://v0.app/icon/typcn/home](https://v0.app/icon/typcn/home).

## Upcoming (possible) Ideas

- Path through maze draggable by user
- Style the draggable path with anime.js or motion.dev
- Difficulty with invisible walls
- Difficulty with random portals
- Create cool dropdown menu for settings
- Insanely cool opening animation for game, involving anime.js SVG `createDrawable()`...

## Method for user-draggable path through maze

- Create a user draggable object, can be a shape, icon, etc.
- Implement collision detection (i.e. draggable object cannot "collide" with a wall)
- Detect when draggable object moves to a new cell, color the previous cell
- Maybe store previously visited cells in a stack, then if user moves the draggable object back one cell, it can simply be popped off of the stack.
- For super high efficiency could use a second stack for redo functionality? Might be overkill though.
