import React, { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

import styles from './styles.module.scss';

type Props = {
  Icon?: FC;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  BaseComponentProps;

TextInput.defaultProps = {};

function TextInput(props: Props) {
  const { containerStyle, error, Icon, ...rest } = props;

  return (
    <div className={clsx([styles.textInputContainer, containerStyle])}>
      <div className={styles.inputContainer}>
        {!!Icon && <Icon />}
        <input {...rest} />
      </div>
      {error && <span className={styles.error}>* {error}</span>}
    </div>
  );
}

export default TextInput;
