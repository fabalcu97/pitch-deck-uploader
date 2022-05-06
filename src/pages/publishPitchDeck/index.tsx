import { BaseComponentProps } from 'utils/types/baseComponent';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

PublishPitchDeck.defaultProps = {};

function PublishPitchDeck(props: Props) {
  const { containerStyle } = props;

  return (
    <div
      className={clsx([
        styles.publishPitchDeckContainer,
        containerStyle,
      ])}></div>
  );
}

export default PublishPitchDeck;
