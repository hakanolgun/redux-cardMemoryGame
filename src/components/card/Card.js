import React from "react";
import styles from "./styles.module.css";
import questionicon from "../../questionicon.png";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../redux/cardsSlice";

function Card({ card }) {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.cardContainer}
      onClick={() => dispatch(toggleOpen(card.id))}
    >
      <img
        className={styles.cardImage}
        src={card.isOpen ? card.src : questionicon}
        alt={card.title}
      />
    </div>
  );
}

export default Card;
