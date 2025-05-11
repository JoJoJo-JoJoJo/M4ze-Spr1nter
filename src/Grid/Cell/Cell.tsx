import "./Cell.css";
import * as motion from "motion/react-client";
import { CellCompProps } from "../../constants/types";
import { memo } from "react";
import { userStuff } from "../../constants/constants";
import { Colors } from "../../constants/enums";

const Cell = ({
  locatedAt,
  /* isActive, */
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
            locatedAt === "start"
              ? userStuff.pathColor
              : locatedAt === "end"
              ? userStuff.targetColor
              : Colors.WHITE,
          top: "15%",
          left: "15%",
        }}
        animate={{
          width: "70%",
          height: "70%",
          // backgroundColor: isActive && locatedAt !== "end" ? userStuff.pathColor : "white",
        }}
        // On mouse drag across tile from adjacent tile (and no wall interfering), dispatch x and y coords from event... or something like that.
      />
    </div>
  );
};

export default memo(Cell);
