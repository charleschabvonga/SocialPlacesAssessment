import {
  create, login,
} from '../../../api/user.api';

import router from '../../../router/main';

export const actions = {
  create: async ({ commit }, user) => {
    commit('setLoadingStatus', true);
    await create(user)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        router.push({ name: 'login' });
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
      });
  },

  login: async ({ commit }, user) => {
    commit('setLoadingStatus', true);
    await login(user)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        router.push({ name: 'messages' });
        commit('setLoginError', undefined);
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setLoginError', error.response.data.error);
      });
  },
};
