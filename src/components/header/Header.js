import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Header() {
  const myScore = useSelector((state) => state.cards.myScore);
  return (
    <div className={styles.headerContainer}>
      <p>Your Score: {myScore}</p>
      <button>Play Again</button>
    </div>
  );
}

export default Header;
