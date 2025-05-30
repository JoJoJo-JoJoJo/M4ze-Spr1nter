import { Colors } from "./enums";
import {
  DiffKeys,
  DirKeys,
  Dirs,
  GridSize,
  CellProps,
  UserInfo,
} from "./types";

const gameHeight: number = 720;

const difficulties: Record<DiffKeys, GridSize> = {
  easy: [9, 9],
  medium: [18, 18],
  tough: [36, 18],
  master: [72, 36],
};

// This is just for easier reusability in possible future releases.
const userStuff: UserInfo = {
  character: Colors.BLUE,
  pathColor: Colors.BLUE,
  targetColor: Colors.ORANGE,
  difficulty: "tough",
};

const dirs: Dirs = [
  ["d", [0, 1]],
  ["u", [0, -1]],
  ["r", [1, 0]],
  ["l", [-1, 0]],
];

const oppWall: Record<DirKeys, DirKeys> = {
  d: "u",
  u: "d",
  r: "l",
  l: "r",
};

const initCellState: CellProps = {
  locatedAt: null,
  isActive: false,
  generation: {
    visited: false,
    walls: {
      d: true,
      u: true,
      r: true,
      l: true,
    },
    pos: [0, 0],
  },
};

const GITHUB_LINK = "https://github.com/JoJoJo-JoJoJo";
const LAST_UPDATE_DATE = "14/04/2025";

export {
  gameHeight,
  difficulties,
  GITHUB_LINK,
  LAST_UPDATE_DATE,
  dirs,
  initCellState,
  oppWall,
  userStuff,
};
