type AnchorProps = {
  href: string;
  text: string;
};

type CellProps = {
  locatedAt: "start" | "end" | null;
  isActive: boolean;
};

type GridProps = {
  grid: CellProps[][];
};

export type { AnchorProps, CellProps, GridProps };
