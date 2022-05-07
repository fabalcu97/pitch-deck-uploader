import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

import Button from 'components/button';

import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

NotFound.defaultProps = {};

function NotFound(props: Props) {
  const { containerStyle } = props;

  return (
    <main className={clsx([styles.notFoundContainer, containerStyle])}>
      <div className={styles.title}>Not found!</div>
      <div className={styles.subtitle}>
        This page doesn't exist. Try going back.
      </div>
      <Button label='Home' href='/' />
    </main>
  );
}

export default NotFound;
