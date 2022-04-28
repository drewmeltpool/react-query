import React from 'react';
import cn from 'classnames';

import styles from './Typography.module.scss';

export interface ITypography {
  tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title?: string | React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text-primary' | 'text-secondary';
}

export const Typography: React.FC<ITypography> = ({
  tag: Tag,
  title,
  children,
  className,
  variant,
  align,
}) => {
  return (
    <Tag
      className={cn(
        styles.typography,
        variant && styles[variant],
        align && styles[align],
        className
      )}
    >
      {title ?? children}
    </Tag>
  );
};
