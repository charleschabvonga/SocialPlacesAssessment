import {
  create,
  findAll,
} from '../../../api/message.api';

export const actions = {
  findAll: async ({ commit }) => {
    commit('setLoadingStatus', true);
    await findAll()
      .then(({ messages }) => {
        console.info('Action Success', messages);
        commit('setLoadingStatus', false);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
      });
  },

  create: async ({ commit }, message) => {
    console.log(message);
    commit('setLoadingStatus', true);
    await create(message)
      .then((response) => {
        commit('setLoadingStatus', false);
        console.info('Action Success', response);
        commit('setMessage', undefined);
        commit('setMessageSuccess', true);
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setMessage', undefined);
        commit('setMessageSuccess', false);
      });
  },
};
  