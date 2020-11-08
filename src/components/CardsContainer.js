import { useEffect, useState } from "react";
import Card from "./Card";

const CardsContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("init");
    setCards([
      {
        name: "Maria Bellucci",
        occupation: "Model, Actress",
        photoUrl: "http://someurl",
      },
      {
        name: "Sofia Vergara",
        occupation: "Actress",
        photoUrl: "http://someurl",
      },
      {
        name: "Justin Bieber",
        occupation: "Singer",
        photoUrl: "http://someurl",
      },
      {
        name: "Angelina Jolie Voigth",
        occupation: "Actress, Director",
        photoUrl: "http://someurl",
      },
      {
        name: "Charlize Theron",
        occupation: "Model, Actress",
        photoUrl: "http://someurl",
      },
    ]);
  }, []);

  const clickedOnCard = () => {
    console.log("clicked");
    //console.log(JSON.stringify(cards));
    //setCards(shuffleArray(cards));
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  console.log(JSON.stringify(cards));

  return (
    <div>
      <div>This is a CardsContainer</div>
      <div
        style={{
          display: "grid",
          width: "100%",
          height: "100%",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(5, auto)",
        }}
      >
        {cards.map((card) => {
          return (
            <Card
              onClick={clickedOnCard}
              name={card.name}
              occupation={card.occupation}
              photoUrl={card.photoUrl}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
