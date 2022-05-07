import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

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
