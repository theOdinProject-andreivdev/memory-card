import logo from "./logo.svg";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import CardsContainer from "./components/CardsContainer";

function App() {
  return (
    <div className="App">
      <Scoreboard></Scoreboard>
      <CardsContainer></CardsContainer>
    </div>
  );
}

export default App;
