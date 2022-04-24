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

export const logoutApi = () => {
  return axios.post('/api/auth/jwt/logout');
};

export interface IForgotPasswordBody {
  email: string;
}
export const forgotPasswordApi = (body: IForgotPasswordBody) => {
  return axios.post('/api/auth/forgot-password', body);
};

export interface IResetPasswordBody {
  token: string;
  password: string;
}
export const resetPasswordApi = (body: IResetPasswordBody) => {
  return axios.post('/api/auth/reset-password', body);
};

export interface IRequestVerifyTokenBody {
  email: string;
}
export const requestVerifyTokenApi = (body: IRequestVerifyTokenBody) => {
  return axios.post('/api/auth/request-verify-token', body);
};

export interface IVerifyBody {
  token: string;
}
export const verifyApi = (body: IVerifyBody) => {
  return axios.post('/api/auth/verify', body);
};

export interface IGoogleAuthorizeRes {
  authorization_url: string;
}
export const googleAuthorizeApi = (): Promise<IGoogleAuthorizeRes> => {
  return axios.get('/api/auth/google/authorize');
};

interface IGoogleCallbackParams {
  code: string;
  code_verifier: string;
  state: string;
  error: string;
}
export const googleCallbackApi = (params: IGoogleCallbackParams) => {
  return axios.get('/api/auth/google/callback', {
    params,
  });
};

export interface ILinkedinAuthorizeRes {
  authorization_url: string;
}
export const linkedinAuthorizeApi = (): Promise<ILinkedinAuthorizeRes> => {
  return axios.get('/api/auth/linkedin/authorize');
};

interface ILinkedinCallbackParams {
  code: string;
  code_verifier: string;
  state: string;
  error: string;
}
export const linkedinCallbackApi = (params: ILinkedinCallbackParams) => {
  return axios.get('/api/auth/linkedin/callback', {
    params,
  });
};
