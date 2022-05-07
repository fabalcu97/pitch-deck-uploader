import React from 'react';

import Button from 'components/button';
import Text from 'components/text';

import styles from './styles.module.scss';

function Home() {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.container}>
        <Text variant='title'>Welcome!</Text>
        <Text variant='subtitle'>What would you like to do?</Text>
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
