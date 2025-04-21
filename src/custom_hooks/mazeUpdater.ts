import { AppActions, InitCellProps } from "../constants/types";

export default function mazeUpdater(maze: InitCellProps[][], action: AppActions) {
  switch (action.type) {
    default:
      // Temporary return
      return maze;
  }
}
