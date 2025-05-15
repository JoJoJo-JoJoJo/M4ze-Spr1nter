import "./Game.css";
import Grid from "../Grid/Grid";
import { useEffect, useReducer, useState } from "react";
import useDfsGenerateMaze from "../custom_hooks/useDfsGenerateMaze";
import mazeUpdater from "../custom_hooks/mazeUpdater";
import { difficulties, gameHeight, userStuff } from "../constants/constants";
import { DiffKeys } from "../constants/types";

const Game = () => {
  //? When the grid size is updated, the grid needs to be re-generated.
  //? The user request to change the difficulty also needs to be handled.
  const [diff /*, setDiff */] = useState<DiffKeys>(userStuff.difficulty); // This should probably be in a parent component.
  const [cols, rows] = difficulties[diff];

  // State for the 2D array of cell objects
  const [maze, dispatch] = useReducer(
    mazeUpdater,
    useDfsGenerateMaze(cols, rows)
  );

  // If somebody changes the difficulty at any point, generate a new maze.
  useEffect(() => dispatch({ type: "NEW" }), [diff]);

  return (
    <div
      className="game"
      style={{
        height: `${gameHeight + 10}px`,
        width: `${(cols / rows) * (gameHeight + 10)}px`,
      }}
      aria-live="polite"
      aria-label="Container for game and logic"
    >
      <Grid grid={maze} gridSize={[cols, rows]} eventDispatch={dispatch} />
    </div>
  );
};

export default Game;

/**
 * Make an overlay for the game, take x and y positions relative to '.game' element.
 * Pass these down as an update of state to the 'MazeIcon' component.
 * Use DragDirection Lock to ensure icon moves in a predictable pattern.
 * Create custom logic for icon transitioning from one bbox to another.
 */
