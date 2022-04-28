import { IRepo } from 'src/types';
import { axios, createUrl } from 'src/utils';

export const search = async (
  userName: string,
  repoName: string
): Promise<{ items: IRepo[] }> => {
  const encodeUrl = encodeURIComponent(`${repoName} user:${userName}`);
  const url = createUrl('search', `repositories?q=${encodeUrl}`);

  return axios.get(url);
};
