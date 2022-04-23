import axios from '../utils/axios.config';

export interface IRegisterBody {
  email: string;
  password: string;
  is_active?: boolean;
  is_superuser?: boolean;
  is_verified?: boolean;
}
export const registerApi = (body: IRegisterBody) => {
  return axios.post('/api/auth/register', body);
};

export interface ILoginBody {
  username: string;
  password: string;
}
export interface ILoginRes {
  access_token: string;
  token_type: string;
}
export const loginApi = (body: ILoginBody): Promise<ILoginRes> => {
  const form = new FormData();
  form.append('username', body.username);
  form.append('password', body.password);
  return axios.post('/api/auth/jwt/login', form, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

export const logout = () => {
  return axios.post('/api/auth/jwt/logout');
};

export interface IGetGoogleAuthorizeRes {
  authorization_url: string;
}
export const getGoogleAuthorize = async () => {
  const res: IGetGoogleAuthorizeRes = await axios.get('/api/auth/google/authorize');
  return res;
};

interface IGetGoogleCallbackReq {
  code: string;
  code_verifier: string;
  state: string;
  error: string;
}
export const getGoogleCallback = (params: IGetGoogleCallbackReq) => {
  return axios.get('/api/auth/google/callback', {
    params,
  });
};
