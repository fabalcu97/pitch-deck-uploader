import { BaseComponentProps } from 'utils/types/baseComponent';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

ListPitchDecks.defaultProps = {};

function ListPitchDecks(props: Props) {
  const { containerStyle } = props;

  return (
    <div
      className={clsx([styles.listPitchDecksContainer, containerStyle])}></div>
  );
}

export default ListPitchDecks;
