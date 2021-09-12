import Vue from "vue";
import Vuex from "vuex";
import { messageModule } from "./modules/message/message.module";
import { userModule } from "./modules/user/user.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    message: messageModule,
    user: userModule,
  },
  // strict: true, // prevents the store being modified outside of a mutation
});