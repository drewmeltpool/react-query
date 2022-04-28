import React, { useCallback, useState } from 'react';
import { Container, Spinner } from 'src/view/common';
import Search from 'src/view/components/Search';
import UserList from 'src/view/components/UserList';
import { useSearchUsers } from 'src/view/hooks';

const Home: React.FC = () => {
  const search = localStorage.getItem('search') || '';
  const [userName, setUserName] = useState(search);

  const { data, isLoading } = useSearchUsers(userName);

  const handleSearch = useCallback((searchStr: string) => {
    localStorage.setItem('search', searchStr);
    setUserName(searchStr);
  }, []);

  return (
    <Container size="md">
      <Search
        setValue={handleSearch}
        value={userName}
        placeholder="Search"
        title="User Search"
      />
      {isLoading && <Spinner />}
      {!isLoading && <UserList users={data?.items || []} />}
    </Container>
  );
};

export { Home };
