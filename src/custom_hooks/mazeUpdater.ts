import { AppActions, CellProps } from "../constants/types";

export default function mazeUpdater(maze: CellProps[][], action: AppActions) {
  switch (action.type) {
    default:
      // Temporary return
      return maze;
  }
}
