import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'assets/icons';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';
import { PitchDeckType } from 'utils/types/pitchDeck';

import styles from './styles.module.scss';

type Props = {
  data: PitchDeckType;
  style: CSSProperties;
} & BaseComponentProps;

PitchDeckListItem.defaultProps = {};

function PitchDeckListItem(props: Props) {
  const { containerStyle, data, style } = props;

  return (
    <div style={style}>
      <Link to={`/pitch-deck/${data.id}`}>
        <div
          className={clsx([styles.pitchDeckListItemContainer, containerStyle])}>
          <span>{data.companyName}</span>
          <small>
            Open pitch
            <ChevronRight />
          </small>
        </div>
      </Link>
    </div>
  );
}

export default PitchDeckListItem;
