import "./Cell.css";
import * as motion from "motion/react-client";
import { CellCompProps } from "../../constants/types";
import { memo } from "react";
import { userStuff } from "../../constants/constants";

const Cell = ({
  locatedAt,
  isActive,
  generation,
  /* eventDispatch, */
  styles,
}: CellCompProps) => {
  const borders: [string, boolean][] = Object.entries(generation.walls).filter(
    ([, v]) => v === true
  );

  return (
    <div
      className={String.raw`cell-border ${borders
        .map((b) => "border-" + b[0])
        .join(" ")}`}
      aria-label="Tile wall"
      style={styles}
    >
      <motion.div
        className="cell"
        aria-label="Tile"
        style={{
          backgroundColor:
            locatedAt !== null
              ? locatedAt === "start"
                ? userStuff.pathColor
                : userStuff.targetColor
              : "white",
          /* Some condition involving being at start/end of maze and/or on active tile */
        }}
        animate={{
          width: "100%",
          height: "100%",
          backgroundColor: isActive ? userStuff.pathColor : "white",
        }}
        // On mouse drag across tile from adjacent tile (and no wall interfering), dispatch x and y coords from event... or something like that.
      />
    </div>
  );
};

export default memo(Cell);
