import Vue from 'vue'
import App from './components/App'
import router from './router/main'
import vuetify from './plugins/vuetify'
import store from './store/main'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#root');
