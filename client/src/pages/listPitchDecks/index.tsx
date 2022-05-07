import React, { useEffect, useState } from 'react';
import { SearchIcon } from 'assets/icons';
import clsx from 'clsx';
import { generatePitchDecks } from 'utils/factories/pitchDeck';
import { BaseComponentProps } from 'utils/types/baseComponent';
import { PitchDeckType } from 'utils/types/pitchDeck';

import Button from 'components/button';
import VirtualizedList from 'components/list';
import PitchDeckListItem from 'components/pitchDeckItem';
import TextInput from 'components/textInput';

import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

ListPitchDecks.defaultProps = {};

const elements: PitchDeckType[] = generatePitchDecks(100);

function ListPitchDecks(props: Props) {
  const { containerStyle } = props;
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <main className={clsx([styles.listPitchDecksContainer, containerStyle])}>
      <span className={styles.title}>Pitch Decks</span>
      <div className={styles.header}>
        <Button label={'Back'} href='/' variant='secondary' />
        <TextInput
          Icon={SearchIcon}
          placeholder='Search company'
          onChange={(ev) => setSearchValue(ev.target.value)}
          containerStyle={styles.searchBar}
        />
      </div>
      <VirtualizedList<PitchDeckType>
        RenderItem={({ index, style }) => (
          <PitchDeckListItem
            style={style}
            key={elements[index].id}
            data={elements[index]}
          />
        )}
        count={elements.length}
        itemHeight={60}
        containerStyle={styles.listContainer}
      />
    </main>
  );
}

export default ListPitchDecks;
