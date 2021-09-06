import React from "react";
import styles from "./styles.module.css";
import questionicon from "../../questionicon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen, closeAgain } from "../../redux/cardsSlice";

function Card({ card }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cards.items);
  const myDoubleLength = useSelector((state) => state.cards.myDouble).length;

  const handleToggle = (id) => {
    const myitem = items.find((item) => item.id === card.id);
    const length = items.filter((item) => item.isOpen).length;
    console.log("isOpen", length);
    console.log("myDouble", myDoubleLength);

    if (myitem.isOpen) {
      console.log("zaten acık, tiklanmaz");
      return;
    }

    if (length >= 2) {
      return;
    }

    dispatch(toggleOpen(id));
    if (myDoubleLength === 1) {
      setTimeout(() => {
        dispatch(closeAgain());
      }, 1000);
    }
  };

  return (
    <label>
      <input type="checkbox" checked={card.isOpen} />
      <div
        className={`${styles.cardContainer} ${
          card.hidden ? styles.hidden : ""
        }`}
        onClick={() => handleToggle(card.id)}
      >
        <img
          className={`${styles.cardImage_front}`}
          src={questionicon}
          alt={card.title}
        />
        <img
          className={`${styles.cardImage_back} ${
            card.hidden && styles.finished
          }`}
          src={card.src}
          alt={card.title}
          draggable="false"
        />
      </div>
    </label>
  );
}

export default Card;
