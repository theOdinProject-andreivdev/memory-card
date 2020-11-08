import { useState } from "react";

const Card = (props) => {
  const [name, setName] = useState(props.name);
  const [occupation, setOccupation] = useState(props.occupation);
  const [photoUrl, setPhotoUrl] = useState(props.photoUrl);

  return (
    <div style={{ background: "red", margin: "20px" }}>
      <div>This is a card</div>
      <h1>{name}</h1>
      <br />
      <h2>{occupation}</h2>
      <img src={photoUrl}></img>
    </div>
  );
};

export default Card;
