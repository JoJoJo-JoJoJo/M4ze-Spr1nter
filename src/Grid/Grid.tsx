import { memo } from "react";
import { GridProps } from "../constants/types";
import Cell from "./Cell/Cell";
import "./Grid.css";

const Grid = ({ grid }: GridProps) => {
  return (
    <>
      <ul className="rows" aria-label="Grid">
        {grid.map((row, i) => (
          <ul className="tiles" key={`row${i + 1}`} aria-label="Grid row">
            {row.map((tile, j) => (
              <Cell
                key={`row${i + 1}_tile${j + 1}`}
                locatedAt={tile.locatedAt}
                isActive={tile.isActive}
              />
            ))}
          </ul>
        ))}
      </ul>
    </>
  );
};

export default memo(Grid);
