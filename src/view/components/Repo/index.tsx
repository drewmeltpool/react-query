import React from 'react';
import { Typography } from 'src/view/common';

import styles from './Repo.module.scss';

export interface IRepoProps {
  name: string;
  forks: number;
  stars: number;
  html_url: string;
}

const Repo: React.FC<IRepoProps> = ({ name, forks, stars, html_url }) => {
  return (
    <a href={html_url} target="_blank" className={styles.repo} rel="noreferrer">
      <Typography tag="h4" variant="text-primary" title={name} />
      <div className={styles.repoInfo}>
        <Typography tag="h5" variant="text-secondary">
          <Typography tag="span" title="Forks: " />
          <Typography tag="span" title={forks} />
        </Typography>
        <Typography tag="h5" variant="text-secondary">
          <Typography tag="span" title="Stars: " />
          <Typography tag="span" title={stars} />
        </Typography>
      </div>
    </a>
  );
};

export default Repo;
