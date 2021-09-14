import { mutations } from './user.mutations';
import { actions } from './user.actions';

export const userModule = {
  namespaced: true,
  state: () => ({
    users: [],
    user: undefined,
    loadingStatus: false,
    loginError: undefined,
  }),
  mutations,
  actions,
};
