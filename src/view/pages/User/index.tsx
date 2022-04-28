import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Spinner, Typography } from 'src/view/common';
import RepoList from 'src/view/components/RepoList';
import Search from 'src/view/components/Search';
import UserProfile from 'src/view/components/UserProfile';
import { useRepos, useUserProfile } from 'src/view/hooks';

const User: React.FC = () => {
  const [repoName, setRepoName] = useState('');
  const { username } = useParams() as { username: string };

  const { data: repos, isLoading: isLoadingRepos } = useRepos(
    username,
    repoName
  );
  const { data: profile, isLoading, isLoadingError } = useUserProfile(username);

  return (
    <Container size="md">
      {isLoading && <Spinner />}
      {isLoadingError && (
        <Typography tag="h4" title="Not Found" variant="secondary" />
      )}
      {profile && <UserProfile profile={profile} />}
      <Search
        title="Search repo"
        placeholder="Search"
        value={repoName}
        setValue={setRepoName}
      />
      {isLoadingRepos && <Spinner />}
      {!isLoadingRepos && <RepoList repos={repos?.items || []} />}
    </Container>
  );
};

export { User };
