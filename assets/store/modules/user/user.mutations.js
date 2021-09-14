export const mutations = {
  setUser: (state, value) => {
    state.user = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
  setLoginError: (state, value) => {
    state.loginError = value;
  },
};
