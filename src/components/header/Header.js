import React from 'react'
import styles from "./styles.module.css";

function Header() {
    return (
        <div className={styles.headerContainer}>
            <p>Your Score:</p>
            <button>Play Again</button>
        </div>
    )
}

export default Header
