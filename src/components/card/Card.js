import React from "react";
import styles from "./styles.module.css";
import questionicon from "../../questionicon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../redux/cardsSlice";

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
      dispatch(toggleOpen(id));
    }, 1000);
  };
  return (
    <div className={styles.cardContainer} onClick={() => handleToggle(card.id)}>
      <img
        className={`${styles.cardImage_front} ${card.isOpen && styles.toggle}`}
        src={questionicon}
        alt={card.title}
      />
      <img
        className={`${styles.cardImage_back} ${!card.isOpen && styles.toggle}`}
        src={card.src}
        alt={card.title}
      />
    </div>
  );
}

export default Card;
