import axios from 'axios';

import { baseURL, routes } from '../utils/constants';
import { StorageConstants } from '../utils/enum';

const axiosClient = axios.create({
  baseURL: baseURL + '/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem(StorageConstants.ACCESS_TOKEN);
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401 || error.response.status === 500 || error.response.status === 500) {
      window.location = routes.AUTH;
      window.localStorage.clear();
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
