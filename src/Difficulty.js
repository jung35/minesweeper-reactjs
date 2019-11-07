import React from "react";

import "./Difficulty.scss";

export default function Difficulty(props) {
  const [selected, setSelected] = React.useState(BEGINNER);
  const [custom_difficulty, setCustom] = React.useState({
    ...DIFFICULTY_OPTIONS[EXPERT],
    ...DIFFICULTY_OPTIONS[CUSTOM]
  });

  function onSelectDifficulty(k) {
    setSelected(k);
  }

  function onPlay() {
    if (selected !== CUSTOM) {
      props.playGame(DIFFICULTY_OPTIONS[selected]);

      return;
    }

    props.playGame(custom_difficulty);
  }

  function onChangeCustom(type, value) {
    setCustom({ ...custom_difficulty, [type]: parseInt(value) || 1 });
  }

  return (
    <div className="Difficulty">
      <h1>Select the difficulty you want to play</h1>
      <ul>
        {Object.keys(DIFFICULTY_OPTIONS).map(function(k) {
          const option = DIFFICULTY_OPTIONS[k];
          const is_selected = k === selected ? "selected" : "";

          return (
            <li
              key={option.name}
              className={is_selected}
              onClick={() => onSelectDifficulty(k)}
            >
              {option.name}
            </li>
          );
        })}
      </ul>

      {selected === CUSTOM && (
        <div className="custom_difficulty">
          <div className="form_group">
            <label className="label">Board width</label>
            <input
              id="width"
              type="text"
              value={custom_difficulty.width}
              onChange={e => onChangeCustom("width", e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="label">Board height</label>
            <input
              id="height"
              type="text"
              value={custom_difficulty.height}
              onChange={e => onChangeCustom("height", e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="label">Bomb count</label>
            <input
              id="bombs"
              type="text"
              value={custom_difficulty.bombs}
              onChange={e => onChangeCustom("bombs", e.target.value)}
            />
          </div>
        </div>
      )}

      <button onClick={onPlay}>Play</button>
    </div>
  );
}

const BEGINNER = "BEGINNER";
const INTERMEDIATE = "INTERMEDIATE";
const EXPERT = "EXPERT";
const CUSTOM = "CUSTOM";

const DIFFICULTY_OPTIONS = {
  [BEGINNER]: { name: "Beginner", width: 8, height: 8, bombs: 10 },
  [INTERMEDIATE]: { name: "Intermediate", width: 16, height: 16, bombs: 40 },
  [EXPERT]: { name: "Expert", width: 24, height: 24, bombs: 99 },
  [CUSTOM]: { name: "Custom" }
};
