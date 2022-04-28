import React from 'react';
import { IRepo } from 'src/types';
import { Container, List, Typography } from 'src/view/common';
import Repo from '../Repo';

interface IRepoListProps {
  repos: IRepo[];
}

const User: React.FC<IRepoListProps> = ({ repos }) => {
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
      data={repos}
      element={(data) => (
        <Repo
          html_url={data.html_url}
          name={data.name}
          forks={data.forks}
          stars={data.stargazers_count}
        />
      )}
      keyExtractor={(data) => data.id}
      wrap={({ children }) => <Container size="md">{children}</Container>}
    />
  );
};

export default User;
