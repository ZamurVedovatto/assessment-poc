export interface UserName {
  title?: string;
  first?: string;
  last?: string;
}

export interface IUserInfo {
  email?: string;
  gender?: string;
  name?: UserName;
}
