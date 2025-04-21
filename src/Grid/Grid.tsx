import { memo } from "react";
import { GridProps } from "../constants/types";
import Cell from "./Cell/Cell";
import "./Grid.css";

const Grid = ({ grid, gridSize, eventDispatch }: GridProps) => {
  const [cols, rows] = gridSize;

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
              height: `${100 / rows}%`,
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
                  width: `${100 / cols}%`,
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
