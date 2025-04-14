import "./Cell.css";
import * as motion from "motion/react-client";
import { CellProps } from "../../constants/types";
import { memo } from "react";

const Cell = ({ locatedAt, isActive }: CellProps) => {
  return (
    <div className="cell-border" aria-label="Tile wall">
      <motion.div
        className="cell"
        aria-label="Tile"
        style={{
          backgroundColor: locatedAt === null ? "white" : "blue",
          /* Some condition involving being at start/end of maze and/or on active tile */
        }}
        animate={{
          width: "100%",
          height: "100%",
          backgroundColor: isActive
            ? locatedAt === null
              ? "red"
              : "blue"
            : "white",
        }}
      />
    </div>
  );
};

export default memo(Cell);
