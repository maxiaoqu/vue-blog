import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/css/common.css';
import './assets/css/fontAwesome.css';
import './assets/less/index.less';

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
