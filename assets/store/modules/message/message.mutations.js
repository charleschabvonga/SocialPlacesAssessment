export const mutations = {
  setMessages: (state, value) => {
    state.messages = value;
  },
  setMessage: (state, value) => {
    state.message = value;
  },
  setUserError: (state, value) => {
    state.messageError = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
};