import { Variants } from "motion/react";
import { ReactElement, ReactSVGElement } from "react";

//* Generic component prop types -------------------------------->

type AnchorProps = {
  href: string;
  text: string;
};

//* Dropdown menu types -------------------------------->

type ItemsList<T> = T[];

type DropdownMenuProps<T> = {
  children: ReactElement;
  items: ItemsList<T>;
};

type PathProps = {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
};

//? Icon should not be optional, but leave it for now
type MenuNode = {
  icon?: ReactSVGElement;
  text: string;
};

type MenuListProps = {
  items: ItemsList<MenuNode>;
};

type MenuItemProps = {
  item: MenuNode;
};

//* Button component types -------------------------------->

interface BtnProps {
  children: ReactElement | string;
  classNames: string[];
}

interface HoverBtnProps extends BtnProps {
  onMouseOver: () => void;
}

interface ClickBtnProps extends BtnProps {
  onClick: () => void;
}

//* Game logic types -------------------------------->

interface UserInfo {
  pathColor: string;
  targetColor: string;
  difficulty: DiffKeys;
}

type Undo = { type: "UNDO"; payload: { x: number; y: number } };
type Move = { type: "MOVE"; payload: { x: number; y: number } };
type New = { type: "NEW" };

type AppActions = Undo | Move | New;

type DiffKeys = "easy" | "medium" | "tough" | "master";
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
  HoverBtnProps,
  ClickBtnProps,
  DropdownMenuProps,
  MenuNode,
  PathProps,
  MenuListProps,
  MenuItemProps,
  CellProps,
  GridProps,
  AppActions,
  DirKeys,
  Dirs,
  CellCompProps,
  GridSize,
  DiffKeys,
};
