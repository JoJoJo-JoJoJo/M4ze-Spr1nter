import {
  /* CellProps, */ DiffKeys,
  DirKeys,
  Dirs,
  GridSize,
  CellProps,
  UserInfo,
} from "./types";

const difficulties: Record<DiffKeys, GridSize> = {
  easy: [10, 10],
  medium: [20, 20],
  tough: [40, 20],
  mastermind: [120, 60],
};

// This is just for easier reusability in possible future releases.
const userStuff: UserInfo = {
  pathColor: "blue",
  targetColor: "orange",
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

// const TEST_GRID: CellProps[][] = [
//   [
//     {
//       locatedAt: "start",
//       isActive: true,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//   ],
//   [
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: null,
//       isActive: false,
//     },
//     {
//       locatedAt: "end",
//       isActive: false,
//     },
//   ],
// ];

export {
  difficulties,
  GITHUB_LINK,
  LAST_UPDATE_DATE,
  // TEST_GRID,
  dirs,
  initCellState,
  oppWall,
  userStuff,
};
