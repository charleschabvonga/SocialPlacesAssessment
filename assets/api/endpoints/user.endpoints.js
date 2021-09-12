import {
  API_PREFIX,
  getAuthHeaders,
  getHttpPostData,
} from './index';

const getUsersEndpoint = () => `${API_PREFIX}/users`;

export const getCreateUserRequest = (user) => [
  getUsersEndpoint(),
  getHttpPostData(user),
  // getHttpPostData(user, getAuthHeaders()),
];