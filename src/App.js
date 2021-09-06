import "./App.css";

import Header from "./components/header/Header";
import Card from "./components/card/Card";

import { useSelector } from "react-redux";

function App() {
  const cards = useSelector((state) => state.cards.items);

  return (
    <div className="App">
      <Header />
      <div className="gridCardsContainer">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
