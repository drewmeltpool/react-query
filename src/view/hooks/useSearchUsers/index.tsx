import { useQuery } from 'react-query';
import * as api from 'src/api';
import { staleTime } from 'src/constants';

export const useSearchUsers = (userName: string) => {
  return useQuery(['users', userName], () => api.user.search(userName), {
    retry: false,
    staleTime,
  });
};
