import cookie from 'react-cookies';

const COOKIE_DOMAIN = window.location.hostname;

const EStorage = {
  COOKIE_ACCESS_TOKEN: 'atk',
  COOKIE_REFRESH_TOKEN: 'rtk',
  LOCAL_STORAGE_USER_INFO: 'userInfo',
};

const cookieSetting = {
  path: '/',
  domain: COOKIE_DOMAIN,
};

const setCookie = (name: string, value: string) => cookie.save(name, value, cookieSetting);

const getCookie = (name: string) => cookie.load(name);

const removeCookie = (name: string) => cookie.remove(name, cookieSetting);

const setLocalStorage = (name: string, value: string) => {
  const isString = typeof value === 'string';
  localStorage.setItem(name, isString ? value : JSON.stringify(value));
};

const getLocalStorage = (name: string) => localStorage.getItem(name);

const removeLocalStorage = (name: string) => localStorage.removeItem(name);

class AuthHelpers {
  getRefreshToken = () => getCookie(EStorage.COOKIE_REFRESH_TOKEN);

  storeRefreshToken = (refreshToken: string) =>
    setCookie(EStorage.COOKIE_REFRESH_TOKEN, refreshToken);

  getAccessToken = () => getCookie(EStorage.COOKIE_ACCESS_TOKEN);

  storeAccessToken = (accessToken: string) => {
    setCookie(EStorage.COOKIE_ACCESS_TOKEN, accessToken);
  };

  getUserInfo = () => JSON.parse(getLocalStorage(EStorage.LOCAL_STORAGE_USER_INFO) as string);

  storeUserInfo = (userInfo: any) => setLocalStorage(EStorage.LOCAL_STORAGE_USER_INFO, userInfo);

  clearStorage = () => {
    removeCookie(EStorage.COOKIE_ACCESS_TOKEN);
    removeCookie(EStorage.COOKIE_REFRESH_TOKEN);
    removeLocalStorage(EStorage.LOCAL_STORAGE_USER_INFO);
  };
}

const instance = new AuthHelpers();
export default instance;
