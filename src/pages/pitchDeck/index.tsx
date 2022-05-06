import { BaseComponentProps } from 'utils/types/baseComponent';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

PitchDeck.defaultProps = {};

function PitchDeck(props: Props) {
  const { containerStyle } = props;

  return (
    <div className={clsx([styles.pitchDeckContainer, containerStyle])}></div>
  );
}

export default PitchDeck;
