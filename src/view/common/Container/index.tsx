import React from 'react';

import cn from 'classnames';
import styles from './Container.module.scss';

export interface IContainerProps {
  size: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}

export const Container: React.FC<IContainerProps> = ({
  size,
  className,
  children,
}) => {
  return (
    <div className={cn(styles.container, styles[size], className)}>
      {children}
    </div>
  );
};
