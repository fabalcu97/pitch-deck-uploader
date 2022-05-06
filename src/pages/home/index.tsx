import React from 'react';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.title}>Welcome!</div>
        <div className={styles.subtitle}>What would you like to do?</div>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>Publish a pitch deck</button>
          <button className={styles.button}>See available pitch decks</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
