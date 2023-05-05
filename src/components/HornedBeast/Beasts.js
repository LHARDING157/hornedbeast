import { useState } from "react";

function HornedBeast({ beast, handleModal }) {
  const [votes, setVotes] = useState(0);

  function handleClick() {
    setVotes(votes + 1);
  }

  function handleClickDown() {
    if (votes === 0) {
      return;
    }
    setVotes(votes - 1);
  }

  return (
    <div className="horned-beast">
      <h2>{beast.title}</h2>
      <img
        src={beast.image_url}
        alt={beast.title}
        onClick={() => handleModal(beast)}
      />
      <p>Horns: {beast.horns}</p>
      <p>{beast.description}</p>
      <p class="heartbtn" onClick={handleClick}>
        ❤️ {votes}
      </p>
      <p class="heartbtn" onClick={handleClickDown}>
        💙
      </p>
    </div>
  );
}

export default HornedBeast;
