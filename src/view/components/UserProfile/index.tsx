import React from 'react';
import { IUserProfile } from 'src/types';
import { Avatar, Typography } from 'src/view/common';

import styles from './User.module.scss';

interface IUserProfileProps {
  profile: IUserProfile;
}

const UserProfile: React.FC<IUserProfileProps> = ({ profile }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHead}>
        <Avatar
          rounded
          size="md"
          src={profile.avatar_url}
          alt={profile.login}
        />
        <div className={styles.profileInfo}>
          <Typography tag="h4" variant="secondary" title={profile.name} />
          <Typography tag="p" variant="text-secondary" title={profile.email} />
          <Typography
            tag="p"
            variant="text-secondary"
            title={profile.location}
          />
          <Typography
            tag="h4"
            variant="text-secondary"
            title={new Date(profile.created_at).toDateString()}
          />
          <Typography tag="p" variant="text-secondary">
            <Typography tag="span" title={profile.followers} />
            <Typography tag="span" title=" Followers" />
          </Typography>
          <Typography tag="p" variant="text-secondary">
            <Typography tag="span" title="Followings " />
            <Typography tag="span" title={profile.following} />
          </Typography>
        </div>
      </div>
      {profile.bio && (
        <div className={styles.profileBio}>
          <Typography tag="h4" variant="text-primary" title="Bio" />
          <Typography tag="p" variant="text-secondary" title={profile.bio} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
