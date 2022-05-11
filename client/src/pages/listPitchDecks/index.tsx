import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SearchIcon } from 'assets/icons';
import clsx from 'clsx';
import useGetPitchDecks from 'utils/hooks/api/useGetPitchDecks';
import { useDebounce } from 'utils/hooks/useDebounce';
import { BaseComponentProps } from 'utils/types/baseComponent';
import { PitchDeckType } from 'utils/types/pitchDeck';

import Header from 'components/header';
import VirtualizedList from 'components/list';
import PitchDeckListItem from 'components/pitchDeckItem';
import Text from 'components/text';
import TextInput from 'components/textInput';

import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

ListPitchDecks.defaultProps = {};

function ListPitchDecks(props: Props) {
  const { containerStyle } = props;
  const [searchValue, setSearchValue] = useState('');
  const [pitchDecksList, setPitchDecksList] = useState<PitchDeckType[]>([]);
  const debouncedSearchTerm: string = useDebounce<string>(searchValue, 250);
  const { data, isLoading, error } = useGetPitchDecks(debouncedSearchTerm);

  useEffect(() => {
    if (data) {
      setPitchDecksList(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast('Something went wrong, please try again');
      console.error(error);
    }
  }, [error]);

  return (
    <main className={clsx([styles.listPitchDecksContainer, containerStyle])}>
      <Header title='' backButton />
      <Text variant='title'>Pitch Decks</Text>
      <TextInput
        Icon={SearchIcon}
        placeholder='Search company'
        onChange={(ev) => setSearchValue(ev.target.value)}
        containerStyle={styles.searchBar}
      />
      <VirtualizedList<PitchDeckType>
        RenderItem={({ index, style }) => (
          <PitchDeckListItem
            style={style}
            key={pitchDecksList[index]._id}
            data={pitchDecksList[index]}
          />
        )}
        isLoading={isLoading}
        count={pitchDecksList.length}
        itemHeight={60}
        containerStyle={styles.listContainer}
      />
    </main>
  );
}

export default ListPitchDecks;
