import { IUserProfile } from 'src/types';
import { axios, createUrl } from 'src/utils';

export const get = async (userName = ''): Promise<IUserProfile> => {
  const url = createUrl('users', userName);

  return axios.get(url);
};
