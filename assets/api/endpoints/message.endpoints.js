import {
    API_PREFIX,
    getAuthHeaders,
    getHttpPostData,
  } from './index';
  
  const getMessagesEndpoint = () => `${API_PREFIX}/messages`;
  
  export const getMessagesRequest = () => [
    getMessagesEndpoint(),
    // getHttpGetData(getAuthHeaders()),
  ];
  
  export const getCreateMessageRequest = (message) => [
    getMessagesEndpoint(),
    getHttpPostData(message),
    // getHttpPostData(message, getAuthHeaders()),
  ];
  