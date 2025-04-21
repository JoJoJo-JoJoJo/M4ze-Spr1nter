type AnchorProps = {
  href: string;
  text: string;
};

interface UserInfo {
  pathColor: string;
  targetColor: string;
  difficulty: DiffKeys;
}

type Undo = { type: "UNDO"; payload: { x: number; y: number } };
type Move = { type: "MOVE"; payload: { x: number; y: number } };
type New = { type: "NEW" };

type AppActions = Undo | Move | New;

type DiffKeys = "easy" | "medium" | "tough" | "mastermind";
type GridSize = [cols: number, rows: number];

type GridProps = {
  grid: CellProps[][];
  gridSize: GridSize;
  eventDispatch: React.ActionDispatch<[action: AppActions]>;
};

// All positions should be in the form [x, y].
type DirKeys = "d" | "u" | "r" | "l";
type Dirs = [DirKeys, [number, number]][];

interface CellProps {
  locatedAt: "start" | "end" | null;
  isActive: boolean;
  generation: {
    visited: boolean;
    walls: {
      d: boolean;
      u: boolean;
      r: boolean;
      l: boolean;
    };
    pos: [x: number, y: number];
  };
}

interface CellCompProps extends CellProps {
  eventDispatch: React.ActionDispatch<[action: AppActions]>;
  styles: {
    width: string;
    height: string;
  };
}

export type {
  UserInfo,
  AnchorProps,
  CellProps,
  GridProps,
  AppActions,
  DirKeys,
  Dirs,
  CellCompProps,
  GridSize,
  DiffKeys,
};
