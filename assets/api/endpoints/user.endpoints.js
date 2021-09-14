import {
  API_PREFIX,
  NO_API_PREFIX,
  getHttpPostData,
} from './index';

const getUsersEndpoint = () => `${API_PREFIX}/users`;
const getLoginEndpoint = () => `${NO_API_PREFIX}/login`;

export const getCreateUserRequest = (user) => [
  getUsersEndpoint(),
  getHttpPostData(user),
];

export const getLoginUserRequest = (user) => [
  getLoginEndpoint(),
  getHttpPostData(user),
];