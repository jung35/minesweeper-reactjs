import { BLOCK_EMPTY } from "../constants";
import getGridValue from "./getGridValue";

export default function generateGrid(width, height, bomb_locations) {
  const grid = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!grid[i]) {
        grid[i] = [];
      }

      const value = getGridValue(i, j, width, height, bomb_locations);

      grid[i][j] = { value, show: false, flagged: false };
    }
  }

  // console log minesweeper grid
  console.table(
    grid.map(function(a) {
      return a.map(function(b) {
        if (b.value === BLOCK_EMPTY) {
          return null;
        }

        return b.value;
      });
    })
  );

  return grid;
}
