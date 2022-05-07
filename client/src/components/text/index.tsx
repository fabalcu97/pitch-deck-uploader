import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

import styles from './styles.module.scss';

type Props = {
  variant: 'title' | 'subtitle' | 'body';
} & BaseComponentProps;

Text.defaultProps = {
  variant: 'body',
};

function Text(props: PropsWithChildren<Props>) {
  const { containerStyle, variant, children } = props;

  return (
    <div className={clsx([styles.textContainer, containerStyle])}>
      <span className={styles[variant]}>{children}</span>
    </div>
  );
}

export default Text;
