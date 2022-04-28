import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Spinner, Typography } from 'src/view/common';
import { useUserProfile } from 'src/view/hooks';

import styles from './User.module.scss';

export interface IUserProps {
  image: string;
  userName: string;
}

const User: React.FC<IUserProps> = ({ image, userName }) => {
  const { data, isLoading } = useUserProfile(userName);

  return (
    <Link to={userName} className={styles.user}>
      <Avatar rounded src={image} alt={userName} size="sm" />
      <Typography
        className={styles.userName}
        tag="h4"
        variant="text-primary"
        title={userName}
      />
      {isLoading && <Spinner size="sm" />}
      {data && (
        <Typography tag="h5" variant="text-secondary">
          <Typography tag="span" title="Repo: " />
          <Typography tag="span" title={data.public_repos} />
        </Typography>
      )}
    </Link>
  );
};

export default User;
