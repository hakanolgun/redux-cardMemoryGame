import React from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../../redux/cardsSlice";

function Header() {
  const dispatch = useDispatch();
  const myScore = useSelector((state) => state.cards.myScore);
  return (
    <div className={styles.headerContainer}>
      <h1>Redux Memory Game</h1>
      <div className={styles.headerAltDiv}>
        <p>Your Score: {myScore}</p>
        <button onClick={() => dispatch(playAgain())}>Play Again</button>
      </div>
    </div>
  );
}

export default Header;
