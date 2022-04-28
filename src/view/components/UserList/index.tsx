import React from 'react';

import { Container, List, Typography } from 'src/view/common';
import User from '../User';

import { IUser } from 'src/types';

interface IUserListProps {
  users: IUser[];
}

const UserList: React.FC<IUserListProps> = ({ users }) => {
  return (
    <List
      empty={
        <Typography
          align="center"
          title="Empty List"
          tag="h4"
          variant="secondary"
        />
      }
      data={users || []}
      element={(data) => <User image={data.avatar_url} userName={data.login} />}
      keyExtractor={(data) => data.id}
      wrap={({ children }) => <Container size="md">{children}</Container>}
    />
  );
};

export default UserList;
