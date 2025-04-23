import { useState } from "react";
import Stack, { StackSkeleton } from "../constants/classes/Stack";
import { dirs, initCellState, oppWall } from "../constants/constants";
import { DirKeys, CellProps } from "../constants/types";

//* Function "generateGrid" runs as expected.
function generateGrid(cols: number, rows: number): CellProps[][] {
  const grid = [];

  for (let y = 0; y < rows; y++) {
    const row = [];

    for (let x = 0; x < cols; x++) {
      const cell = JSON.parse(JSON.stringify(initCellState));
      cell.generation.pos = [x, y];
      row.push(cell);
    }

    grid.push(row);
  }

  // console.log(grid);

  return grid;
}

//! Function "useDfsGenerateMaze" does not run as expected - all output cells should have different positions.
export default function useDfsGenerateMaze(
  cols: number,
  rows: number
): Array<Array<CellProps>> {
  const [stack, setStack] = useState<StackSkeleton<CellProps>>(new Stack());

  //todo: Helper functions
  const stackPush = (cell: CellProps) => {
    stack.push(cell);
    console.log("A");
    setStack(Stack.imutUpdate(stack.data()));
    console.log("B");
  };

  const stackPop = (): CellProps => {
    const rVal: CellProps | undefined = stack.pop();
    if (typeof rVal === "undefined") {
      throw new TypeError(
        "Item should not be popped off the stack if it is already empty."
      );
    }
    setStack(Stack.imutUpdate(stack.data()));
    return rVal;
  };

  const grid: Array<Array<CellProps>> = generateGrid(cols, rows);
  grid[0][0].locatedAt = "start";
  grid[rows - 1][cols - 1].locatedAt = "end";

  //todo - Choose the initial cell, mark it as visited and push it to the stack
  const init: CellProps = grid[0][0];
  init.generation.visited = true;
  //*----------------------------------------------------------------------------------------------------------

  stackPush(init);
  // console.log(stack.data());

  let curCell: CellProps = init;

  const outOfRange = (newX: number, newY: number): boolean =>
    newX < 0 || newX >= cols || newY < 0 || newY >= rows;

  //todo - While the stack is not empty:
  while (stack.size() > 0) {
    //todo - Pop a cell from the stack and make it a current cell
    curCell = stackPop();

    //todo - If the current cell has any neighbors which have not been visited
    const [cx, cy] = curCell.generation.pos;

    let dirChoices: [DirKeys, [number, number]][] = dirs;

    for (const [k, [x, y]] of dirs) {
      if (
        outOfRange(cx + x, cy + y) ||
        grid[cy + y][cx + x].generation.visited === true
      ) {
        dirChoices = dirChoices.filter((a) => a[0] !== k);
      }
    }

    if (dirChoices.length !== 0) {
      stackPush(curCell);
      const [k, [x, y]] =
        dirChoices[Math.floor(Math.random() * Object.keys.length)];
      const nextCell = grid[cy + y][cx + x];
      curCell.generation.walls[k] = false;
      nextCell.generation.walls[oppWall[k]] = false;

      nextCell.generation.visited = true;
      stackPush(nextCell);
    }
  }

  return grid;
}

/**
 *   COL COL COL COL
 *    |   |   |   |
 * [
 *  [{}, {}, {}, {}] <- ROW
 *  [{}, {}, {}, {}] <- ROW
 *  [{}, {}, {}, {}] <- ROW
 *  [{}, {}, {}, {}] <- ROW
 * ]
 *
 * [x, y] => [COL, ROW]
 */
