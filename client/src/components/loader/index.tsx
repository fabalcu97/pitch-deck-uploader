import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

Loader.defaultProps = {};

function Loader(props: Props) {
  const { containerStyle } = props;

  return (
    <div className={clsx([styles.loaderContainer, containerStyle])}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
