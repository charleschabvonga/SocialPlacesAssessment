export const mutations = {
  setUser: (state, value) => {
    state.user = value;
  },
  setUserError: (state, value) => {
    state.userError = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
};
