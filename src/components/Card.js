import { useState } from "react";

const Card = (props) => {
  const [key, setKey] = useState(props.key);
  const [name, setName] = useState(props.name);
  const [occupation, setOccupation] = useState(props.occupation);
  const [photoUrl, setPhotoUrl] = useState(props.photoUrl);

  return (
    <div
      onClick={() => props.handleClick(props.name)}
      style={{
        boxShadow: "5px 5px 15px",
        margin: "20px",
        height: "100%",
        width: "250px",
      }}
    >
      <h1>{name}</h1>
      <br />
      <h2>{occupation}</h2>
      <img style={{ width: "80%" }} src={photoUrl}></img>
    </div>
  );
};

export default Card;
