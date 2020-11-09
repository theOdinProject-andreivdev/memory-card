import { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import uniqid from "uniqid";

const CardsContainer = () => {
  const [cards, setCards] = useState([]);
  const [, updateState] = useState();
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    console.log("init");
    setCards([
      {
        key: uniqid(),
        picked: false,
        name: "Angelina Jolie Voight",
        occupation: "Actress, Director",
        photoUrl:
          "http://beauty-around.com/images/sampledata/Hollywood_Actress/1Anjelina-Jolie.jpg",
      },
      {
        key: uniqid(),
        picked: false,
        name: "Charlize Theron",
        occupation: "Model, Actress",
        photoUrl:
          "http://beauty-around.com/images/sampledata/Hollywood_Actress/2sharliz.jpg",
      },
      {
        key: uniqid(),
        picked: false,
        name: "Jessica Alba",
        occupation: "Model, Actress",
        photoUrl:
          "http://beauty-around.com/images/sampledata/Hollywood_Actress/3Alba.jpg",
      },
      {
        key: uniqid(),
        picked: false,
        name: "Megan Denise Fox",
        occupation: "Model, Actress",
        photoUrl:
          "http://beauty-around.com/images/sampledata/Hollywood_Actress/4Megan_Fox.jpg",
      },
      {
        key: uniqid(),
        picked: false,
        name: "Keira Knightley",
        occupation: "Actress",
        photoUrl:
          "http://beauty-around.com/images/sampledata/Hollywood_Actress/6Keira_Knightley.jpg",
      },
    ]);
  }, []);

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const onClickShuffle = () => {
    let shuffledCards = shuffle(cards);

    setCards(shuffledCards);
    forceUpdate();
  };

  const handleClickAction = (name) => {
    console.log("clicked " + name);

    cards.forEach((element) => {
      if (element.name === name) {
        if (!element.picked) {
          element.picked = true;
          setCurrentScore(currentScore + 1);
        } else {
          if (currentScore > bestScore) setBestScore(currentScore);
          setCurrentScore(0);
          cards.forEach((card) => {
            card.picked = false;
          });
        }
      }
    });
    onClickShuffle();
  };

  return (
    <div>
      <div>
        <div>
          Current score: {currentScore}
          <br />
          Best score: {bestScore}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          width: "100%",
          height: "100%",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
        }}
      >
        {cards.map((card) => {
          return (
            <div>
              <Card
                key={card.key}
                picked={card.picked}
                name={card.name}
                occupation={card.occupation}
                photoUrl={card.photoUrl}
                handleClick={handleClickAction}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
