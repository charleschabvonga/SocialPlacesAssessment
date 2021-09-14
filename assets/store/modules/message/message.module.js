import { mutations } from './message.mutations';
import { actions } from './message.actions';

export const messageModule = {
  namespaced: true,
  state: () => ({
    messages: [],
    message: undefined,
    loadingStatus: false,
    messageSuccess: false,
  }),
  mutations,
  actions,
};

