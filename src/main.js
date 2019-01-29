import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'


Vue.config.productionTip = false;

Vue.component('app-sidebar', Sidebar);
Vue.component('app-header', Header);
Vue.component('app-main', Main);


new Vue({
  render: h => h(App),
}).$mount('#app');