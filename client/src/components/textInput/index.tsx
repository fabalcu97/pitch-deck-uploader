import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';

import { BaseComponentProps } from 'utils/types/baseComponent';
import styles from './styles.module.scss';

type Props = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  BaseComponentProps;

TextInput.defaultProps = {};

function TextInput(props: Props) {
  const { containerStyle, error, ...rest } = props;

  return (
    <div className={clsx([styles.textInputContainer, containerStyle])}>
      <input {...rest} />
      {error && <span className={styles.error}>* {error}</span>}
    </div>
  );
}

export default TextInput;
