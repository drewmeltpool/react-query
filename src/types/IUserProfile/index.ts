export interface IUserProfile {
  id: number | string;
  login: string;
  name: string;
  email: string;
  location: string;
  followers: number;
  following: number;
  bio: string;
  created_at: string;
  public_repos: string;
  avatar_url: string;
}
