import React from "react";
import generateBombLocations from "./utils/generateBombLocations";
import generateGrid from "./utils/generateGrid";
import Difficulty from "./Difficulty";
import "./App.scss";
import Board from "./Board";
import { BLOCK_BOMB, BLOCK_EMPTY } from "./constants";

export default function App() {
  const [grid, setGrid] = React.useState(null);
  const [start_time, setTime] = React.useState(-1);
  const [end_time, setEndTime] = React.useState(-1);

  function onPlayGame(difficulty) {
    const width = difficulty.width;
    const height = difficulty.height;
    const bombs =
      width * height > difficulty.bombs ? difficulty.bombs : width * height;

    const bomb_locations = generateBombLocations(width * height, bombs);

    setGrid(generateGrid(width, height, bomb_locations));
  }

  function onShow(i, j) {
    if (end_time !== -1) {
      return;
    }

    if (start_time === -1) {
      setTime(+new Date());
    }

    if (!grid[i][j].show) {
      grid[i][j].show = true;

      if (grid[i][j].value === BLOCK_EMPTY) {
        if (i > 0) {
          onShow(i - 1, j);
        }

        if (i < grid.length - 1) {
          onShow(i + 1, j);
        }

        if (j > 0) {
          onShow(i, j - 1);
        }

        if (j < grid[i].length - 1) {
          onShow(i, j + 1);
        }
      }
    }

    if (grid[i][j].value === BLOCK_BOMB) {
      console.log("GaME OVER");
      setEndTime(+new Date());
      // game end
    }

    setGrid([...grid]);
  }
  function onFlag(e, i, j) {
    e.preventDefault();

    if (start_time === -1) {
      setTime(+new Date());
    }

    grid[i][j].flag = !grid[i][j].flag;
    setGrid([...grid]);
  }

  return (
    <div className="App">
      {!grid && <Difficulty playGame={onPlayGame} />}
      <Board
        grid={grid}
        start_time={start_time}
        end_time={end_time}
        onShow={onShow}
        onFlag={onFlag}
      />
    </div>
  );
}
