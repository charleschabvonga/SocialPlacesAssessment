export const mutations = {
  setMessages: (state, value) => {
    state.messages = value;
  },
  setMessage: (state, value) => {
    state.message = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
  setMessageSuccess: (state, value) => {
    state.messageSuccess = value;
  },
};
