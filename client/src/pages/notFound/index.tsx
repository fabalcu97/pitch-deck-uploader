import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

import Button from 'components/button';
import Text from 'components/text';

import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

NotFound.defaultProps = {};

function NotFound(props: Props) {
  const { containerStyle } = props;

  return (
    <main className={clsx([styles.notFoundContainer, containerStyle])}>
      <Text variant={'title'}>Not found!</Text>
      <Text variant={'subtitle'}>This page doesn't exist. Try going back.</Text>
      <Button label='Home' href='/' />
    </main>
  );
}

export default NotFound;
