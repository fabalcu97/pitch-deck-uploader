import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

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
