import axios from 'axios';

import {
  getCreateUserRequest, getLoginUserRequest,
} from './endpoints/user.endpoints';

export const create = async (user) => {
  try {
    const [endpoint, requestOptions] = getCreateUserRequest(user);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From users/create: ${error.message}`);
    return Promise.reject(error);
  }
};

export const login = async (user) => {
  try {
    const [endpoint, requestOptions] = getLoginUserRequest(user);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From users/login: ${error.message}`);
    return Promise.reject(error);
  }
};
