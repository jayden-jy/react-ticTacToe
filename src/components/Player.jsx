import { useState } from "react";

export default function player({ initialName, symbol }) {
  const [ playerName, setPlayerName ] = useState(initialName)
  const [ isEditing, setisEditing ] = useState(false);

  function handleEditClick() {
    //setisEditing(!isEditing); // 해당값이 반전 됨. 이 방법은 여러 번의 상태 업데이트가 일어날 때 정확하게 동작하지 않을 수 있음
    setisEditing((editing) => !editing);
  }

  function handleChange(event) {
    // console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "수정";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    // btnCaption = "저장";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{ isEditing ? "저장" : "수정" }</button>
    </li>
  )
}