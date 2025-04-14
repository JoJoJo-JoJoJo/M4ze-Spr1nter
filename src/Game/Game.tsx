import "./Game.css";
import Grid from "../Grid/Grid";
import { TEST_GRID } from "../constants/constants";
// import { useReducer } from "react";

const Game = () => {
  // const [state, dispatch] = useReducer(reducer, useGenerateMaze());

  return (
    <div
      className="game"
      style={{ width: "50%" }}
      aria-live="polite"
      aria-label="Container for game and logic"
    >
      <Grid
        grid={TEST_GRID /* Replace with state */}
      />
    </div>
  );
};

export default Game;
