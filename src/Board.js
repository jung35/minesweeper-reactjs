import React from "react";
import Block from "./Block";
import "./Board.scss";
import Timer from "./Timer";

export default function Board(props) {
  const grid = props.grid;

  if (!grid) {
    return null;
  }

  console.log("??", props.start_time);

  return (
    <>
      <h1>
        Timer: <Timer start_time={props.start_time} />
      </h1>
      <div className="Board">
        {grid.map(function(row, i) {
          return (
            <div key={i} className="Board--row">
              {row.map(function(column, j) {
                return (
                  <div key={j} className="Board--column">
                    <Block
                      block={column}
                      onShow={() => props.onShow(i, j)}
                      onFlag={e => props.onFlag(e, i, j)}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
