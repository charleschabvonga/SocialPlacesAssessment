import {
  create,
} from '../../../api/user.api';

// import router from '@/router';
// import toastr from 'toastr';

export const actions = {
  create: async ({ commit }, user) => {
    commit('setLoadingStatus', true);
    await create(user)
      .then((response) => {
        console.info('Action Success', response);
        commit('setUserError', undefined);
        // router.push({ name: 'login' });
        // toastr.success('The user profile was created successfully.', 'User Profile');
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setUserError', error.response.data.error);
        // toastr.error(error.response.data.message ?? 'Please complete the form to continue', 'User Profile');
      });
  },
};
