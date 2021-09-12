import axios from 'axios';

import {
  getCreateUserRequest,
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
