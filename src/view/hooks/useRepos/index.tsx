import { useQuery } from 'react-query';
import * as api from 'src/api';
import { staleTime } from 'src/constants';

export const useRepos = (userName: string, repoName: string) => {
  return useQuery(
    ['repos', userName, repoName],
    () => api.repo.search(userName, repoName),
    {
      retry: false,
      staleTime,
    }
  );
};
