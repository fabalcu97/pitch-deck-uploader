import React, { ButtonHTMLAttributes, useMemo } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { BaseComponentProps } from 'utils/types/baseComponent';

import styles from './styles.module.scss';

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  variant: 'primary' | 'secondary';
} & BaseComponentProps;

Button.defaultProps = {
  variant: 'primary',
};

function Button(props: Props) {
  const { containerStyle, label, onClick, href, variant, buttonProps } = props;
  const isSecondary = useMemo(() => variant === 'secondary', [variant]);

  return (
    <div className={clsx([styles.buttonContainer, containerStyle])}>
      {href ? (
        <Link to={href}>
          <div
            className={clsx([styles.button, isSecondary && styles.secondary])}>
            {label}
          </div>
        </Link>
      ) : (
        <button
          className={clsx([styles.button, isSecondary && styles.secondary])}
          onClick={onClick}
          {...buttonProps}>
          {label}
        </button>
      )}
    </div>
  );
}

export default Button;
