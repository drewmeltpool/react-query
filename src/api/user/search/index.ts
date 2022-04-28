import { IUser } from 'src/types';
import { axios, createUrl } from 'src/utils';

interface ISearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IUser[];
}

export const search = async (userName = ''): Promise<ISearchResponse> => {
  const url = createUrl('search', `users?q=${userName}+in%3Alogin&type=Users`);

  return axios.get(url);
};
