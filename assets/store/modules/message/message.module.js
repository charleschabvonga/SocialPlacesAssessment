import { mutations } from './message.mutations';
import { actions } from './message.actions';

export const messageModule = {
  namespaced: true,
  state: () => ({
    messages: [],
    message: undefined,
    messageError: undefined,
    loadingStatus: false,
  }),
  mutations,
  actions,
};

