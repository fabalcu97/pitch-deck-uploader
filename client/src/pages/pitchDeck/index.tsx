import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import FsLightbox from 'fslightbox-react';
import environment from 'utils/config/env';
import useGetPitchDeck from 'utils/hooks/api/useGetPitchDeck';
import { BaseComponentProps } from 'utils/types/baseComponent';
import { PitchDeckType } from 'utils/types/pitchDeck';

import Header from 'components/header';
import Loader from 'components/loader';
import Text from 'components/text';

import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

PitchDeck.defaultProps = {};

function PitchDeck(props: Props) {
  const { containerStyle } = props;
  const [pitchDeck, setPitchDeck] = useState<PitchDeckType>();
  const [images, setImages] = useState<string[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPitchDeck(id || '');

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });

  const openImageViewer = useCallback((index: number) => {
    setLightboxController((value) => ({
      toggler: !value.toggler,
      slide: index + 1,
    }));
  }, []);

  const Images = useMemo(
    () =>
      images.map((image: string, idx: number) => (
        <img
          key={idx}
          className={styles.image}
          alt=''
          src={image}
          onClick={() => openImageViewer(idx)}
        />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [images],
  );

  useEffect(() => {
    if (!id) {
      navigate('/list-pitch-decks');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (data) {
      setPitchDeck(data);
      setImages(
        data.images.map((image) => `${environment.apiBaseUrl}${image}`),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (error) {
      toast('Something went wrong, please try again');
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <main className={clsx([styles.pitchDeckContainer, containerStyle])}>
      {!!pitchDeck && (
        <>
          <Header title={''} backButton />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Text variant='title'>{pitchDeck.companyName}</Text>
              <Text variant='body'>
                Registration date:{' '}
                {format(parseISO(pitchDeck.dateCreated), 'do MMM, yyyy')}
              </Text>
              <div className={styles.images}>{Images}</div>
              <FsLightbox
                toggler={lightboxController.toggler}
                sources={images}
                slide={lightboxController.slide}
              />
            </>
          )}
        </>
      )}
    </main>
  );
}

export default PitchDeck;
