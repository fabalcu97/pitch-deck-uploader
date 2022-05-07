import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import { generatePitchDeck } from 'utils/factories/pitchDeck';
import { BaseComponentProps } from 'utils/types/baseComponent';
import { PitchDeckType } from 'utils/types/pitchDeck';

import Header from 'components/header';
import Text from 'components/text';

import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

PitchDeck.defaultProps = {};

function PitchDeck(props: Props) {
  const { containerStyle } = props;
  const [pitchDeck, setPitchDeck] = useState<PitchDeckType>();

  const { id } = useParams();
  const navigate = useNavigate();

  const getPitchDeck = (_id: string) => {
    setPitchDeck(generatePitchDeck());
  };

  useEffect(() => {
    if (!id) {
      navigate('/list-pitch-decks');
      return;
    }
    getPitchDeck(id);
  }, [id]);

  return (
    <main className={clsx([styles.pitchDeckContainer, containerStyle])}>
      {!!pitchDeck && (
        <>
          <Header title={''} backButton />
          <Text variant='title'>{pitchDeck.companyName}</Text>
          <Text variant='body'>
            Registration date:{' '}
            {format(parseISO(pitchDeck.createdDate), 'do MMM, yyyy')}
          </Text>
          <div className={styles.images}>
            {pitchDeck.images.map((image, idx) => (
              <img key={idx} className={styles.image} alt='' src={image} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default PitchDeck;
