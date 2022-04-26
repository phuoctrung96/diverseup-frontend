import { User } from 'interfaces/user';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterResponse {
  user: User;
}
