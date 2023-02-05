import { urls } from '../utils/constants';
import axiosClient from './axiosClient';

const authApi = {
  login(params) {
    const url = `/${urls.USERS}/login`;
    return axiosClient.post(url, params);
  },
};

export default authApi;
