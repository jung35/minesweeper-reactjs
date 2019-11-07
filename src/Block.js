import React from "react";
import { BLOCK_EMPTY, BLOCK_BOMB } from "./constants";
import "./Block.scss";

export default function Block(props) {
  let value = props.block.value;
  const show = props.block.show;

  if (value === BLOCK_EMPTY) {
    value = "";
  }

  if (value === BLOCK_BOMB) {
    value = "B";
  }

  if (!show) {
    value = "";
  }

  return (
    <div
      className={`Block ${show ? "show" : ""}`}
      onClick={props.onShow}
      onContextMenu={props.onFlag}
    >
      {value}
    </div>
  );
}
