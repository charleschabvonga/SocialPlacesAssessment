import {
    create,
    findAll,
  } from '../../../api/message.api';
  
//   import router from 'router';
//   import toastr from 'toastr';
  
  export const actions = {
    findAll: async ({ commit }) => {
      commit('setLoadingStatus', true);
      await findAll()
        .then(({ messages }) => {
          console.info('Action Success', messages);
          commit('setMessages', messages);
          commit('setLoadingStatus', false);
        }, (error) => {
          console.error(`Action Error: ${error}`);
          commit('setLoadingStatus', false);
          commit('setMessages', []);
        });
    },
  
    create: async ({ commit }, message) => {
      console.log(message);
      commit('setLoadingStatus', true);
      await create(message)
        .then((response) => {
          console.info('Action Success', response);
          commit('setMessageError', undefined);
        //   router.push({ name: 'Users' });
        //   toastr.success('The user profile was created successfully.', 'User Profile');
        }, (error) => {
          console.error(`Action Error: ${error.message}`);
          commit('setLoadingStatus', false);
          commit('setMessageError', error.response.data.error);
        //   toastr.error(error.response.data.message ?? 'Please complete the form to continue', 'User Profile');
        });
    },
  };
  