import axios from 'axios';

import {
  getCreateMessageRequest,
  getMessagesRequest,
} from './endpoints/message.endpoints';

export const findAll = async () => {
  try {
    const [endpoint, requestOptions] = getMessagesRequest();
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From messages/findAll: ${error.message}`);
    return Promise.reject(error);
  }
};

export const create = async (message) => {
  try {
    const [endpoint, requestOptions] = getCreateMessageRequest(message);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From messages/create: ${error.message}`);
    return Promise.reject(error);
  }
};