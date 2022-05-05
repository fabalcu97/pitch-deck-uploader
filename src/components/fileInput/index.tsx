import { BaseComponentProps } from 'utils/types/baseComponent';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

FileInput.defaultProps = {};

export function FileInput(props: Props) {
  const { containerStyle } = props;

  return (
    <div className={clsx([styles.fileInputContainer, containerStyle])}></div>
  );
}
