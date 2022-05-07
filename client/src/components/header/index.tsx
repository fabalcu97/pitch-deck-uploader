import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useIsMobile } from 'utils/hooks/useIsMobile';
import { BaseComponentProps } from 'utils/types/baseComponent';

import Button from 'components/button';
import Text from 'components/text';

import styles from './styles.module.scss';

type Props = {
  title: string;
  backButton?: boolean;
} & BaseComponentProps;

Header.defaultProps = {};

function Header(props: Props) {
  const { containerStyle, title, backButton } = props;
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={clsx([styles.headerContainer, containerStyle])}>
      <div className={styles.backButton}>
        {backButton && (
          <Button label='Back' variant='secondary' onClick={goBack} />
        )}
      </div>
      <div className={styles.content}>
        <Text
          variant={isMobile ? 'subtitle' : 'title'}
          containerStyle={styles.text}>
          {title}
        </Text>
      </div>
      {!isMobile && <div className={styles.empty} />}
    </div>
  );
}

export default Header;
