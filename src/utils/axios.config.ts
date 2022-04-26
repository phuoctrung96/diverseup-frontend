import axios from 'axios';
import AuthHelpers from './AuthHelpers';

export const baseURL = process.env.REACT_APP_API_BASEURL || 'https://backend.diverseup.com';

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  function (config: any) {
    const TOKEN = AuthHelpers.getAccessToken();
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    console.log({ config });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log({ response });
    return response?.data;
  },
  function (error) {
    console.log(error.response);
    return Promise.reject(error?.response?.data);
  }
);

export default instance;
