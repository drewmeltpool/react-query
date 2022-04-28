import React from 'react';
import cn from 'classnames';

import styles from './Spinner.module.scss';

interface ISpinnerProps {
  size?: 'sm' | 'md';
}

export const Spinner: React.FC<ISpinnerProps> = ({ size }) => {
  return <div className={cn(styles.loader, size && styles[size])} />;
};
