import { useEffect } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../../redux/cardsSlice";

function Header() {
  const dispatch = useDispatch();
  const myScore = useSelector((state) => state.cards.myScore);

  useEffect(() => {
    dispatch(playAgain());
  }, [dispatch]);

  return (
    <div className={styles.headerContainer}>
      <h1>REDUX MEMORY GAME</h1>
      <div className={styles.headerAltDiv}>
        <p>YOUR SCORE: {myScore}</p>
        <button onClick={() => dispatch(playAgain())}>PLAY AGAIN</button>
      </div>
    </div>
  );
}

export default Header;
