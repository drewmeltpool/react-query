import { useQuery } from 'react-query';
import * as api from 'src/api';
import { staleTime } from 'src/constants';

export const useUserProfile = (userName: string) => {
  return useQuery(['user', userName], () => api.user.get(userName), {
    retry: false,
    staleTime,
  });
};
