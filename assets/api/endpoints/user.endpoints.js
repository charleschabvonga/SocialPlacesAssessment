import {
  API_PREFIX,
  getAuthHeaders,
  getHttpPostData,
} from './index';

const getUsersEndpoint = () => `${API_PREFIX}/users`;
const getLoginEndpoint = () => `${API_PREFIX}/login`;

export const getCreateUserRequest = (user) => [
  getUsersEndpoint(),
  getHttpPostData(user),
  // getHttpPostData(user, getAuthHeaders()),
];

export const getLoginUserRequest = (user) => [
  getLoginEndpoint(),
  getHttpPostData(user),
  // getHttpPostData(user, getAuthHeaders()),
];