import Button from 'components/button';
import React from 'react';
import styles from './styles.module.scss';

function Home() {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.title}>Welcome!</div>
        <div className={styles.subtitle}>What would you like to do?</div>
        <div className={styles.buttonGroup}>
          <Button label='Publish a pitch deck' href={'/publish-pitch-deck'} />
          <Button
            label='See available pitch decks'
            href={'/list-pitch-decks'}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
