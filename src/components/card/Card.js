import React from "react";
import styles from "./styles.module.css";
import questionicon from "../../questionicon.png";

function Card({ card }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={card.src} alt={card.title} />
    </div>
  );
}

export default Card;
