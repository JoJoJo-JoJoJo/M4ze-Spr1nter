import { motion } from "motion/react";
import { MazeIconProps } from "../../constants/types";
import { useState } from "react";
import "./MazeIcon.css";
import { userStuff } from "../../constants/constants";

const MazeIcon = ({ gridX, gridY, bbox }: MazeIconProps) => {
  const [activeDir, setActiveDir] = useState<"x" | "y" | null>(null);

  // When icon moves out of bbox, check activeDir and whether the axis value is greater or less in
  // that direction. Then use that to determine which component's bbox to use next.

  return (
    <motion.div
      className="maze-character"
      animate={{
        backgroundColor: userStuff.character,
        boxShadow: `1px 1px 2px ${userStuff.pathColor}`,
      }}
      drag
      dragConstraints={bbox}
      dragDirectionLock
      onDirectionLock={(dir) => setActiveDir(dir)}
      onDragEnd={() => setActiveDir(null)}
      whileDrag={{ cursor: "grabbing" }}
      dragElastic={0}
      dragTransition={{ bounceDamping: 10, bounceStiffness: 1000 }}
    />
  );
};

export default MazeIcon;
