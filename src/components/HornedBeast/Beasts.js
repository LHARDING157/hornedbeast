import { useState } from "react";
import handleModal from "../../App";

export default function HornedBeast(props) {
  const [votes, setVotes] = useState(1);

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
      <h2>{props.title}</h2>
      <img onClick={handleModal} src={props.imageUrl} alt={props.title} />
      <p>{props.description}</p>
      <p>Horns: {props.horns}</p>
      <p class="heartbtn" onClick={handleClick}>
        ❤️: {votes}
      </p>
      <p class="heartbtn" onClick={handleClickDown}>
        :💚
      </p>
    </div>
  );
}
