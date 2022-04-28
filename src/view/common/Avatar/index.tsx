import React from 'react';

import cn from 'classnames';

import styles from './Avatar.module.scss';

export interface IAvatar {
  size: 'sm' | 'md';
  src: string;
  alt: string;
  rounded?: boolean;
}

export const Avatar: React.FC<IAvatar> = ({ size, rounded, src, alt }) => {
  return (
    <div className={cn(styles.avatar, styles[size], rounded && styles.rounded)}>
      <img className={styles.avatarImage} src={src} alt={alt} />
    </div>
  );
};
