import React from "react";
import styles from "./styles.module.css";
import questionicon from "../../questionicon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen, closeAgain } from "../../redux/cardsSlice";

function Card({ card }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cards.items);

  const handleToggle = (id) => {
    const myitem = items.find((item) => item.id === card.id);
    const length = items.filter((item) => item.isOpen).length;

    if (myitem.isOpen) {
      console.log("zaten acık, tiklanmaz");
      return;
    }

    if (length >= 2) {
      return;
    }

    dispatch(toggleOpen(id));
    setTimeout(() => {
      dispatch(closeAgain(id));
    }, 1000);
  };
  
  return (
    <div
      className={`${styles.cardContainer} ${card.hidden ? styles.hidden : ""} ${
        !card.isOpen && styles.toggle
      }`}
      onClick={() => handleToggle(card.id)}
    >
      <img
        className={`${styles.cardImage_front}`}
        src={questionicon}
        alt={card.title}
      />
      <img
        className={`${styles.cardImage_back} ${card.hidden && styles.finished}`}
        src={card.src}
        alt={card.title}
      />
    </div>
  );
}

export default Card;
