import { memo } from "react";
import { GridProps } from "../constants/types";
import Cell from "./Cell/Cell";
import "./Grid.css";
import { gameHeight } from "../constants/constants";

const Grid = ({ grid, gridSize, eventDispatch }: GridProps) => {
  const [cols, rows] = gridSize;
  const cellH: number = gameHeight / rows;
  const cellW: number = (gameHeight * cols) / rows ** 2;

  return (
    <>
      <ul className="rows" aria-label="Grid">
        {grid.map((row, i) => (
          <ul
            className="row"
            key={`row${i + 1}`}
            aria-label="Grid row"
            style={{
              width: "100%",
              height: `${cellH}px`, 
            }}
          >
            {row.map((tile, j) => (
              <Cell
                key={`row${i + 1}_tile${j + 1}`}
                locatedAt={tile.locatedAt}
                isActive={tile.isActive}
                eventDispatch={eventDispatch}
                generation={tile.generation}
                styles={{
                  height: "100%",
                  width: `${cellW}px`,
                }}
              />
            ))}
          </ul>
        ))}
      </ul>
    </>
  );
};

export default memo(Grid);

// 'rows' doesn't take into account cell borders, so height is off.
// Width works though, so that's cool!
