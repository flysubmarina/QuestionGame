// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import	AppMessage from './components/Message.vue';
import	AppQuestion from './components/Question.vue';
import	AppResultScreen from './components/ResultScreen.vue';
import	AppStartScreen from './components/StartScreen.vue';

Vue.component('AppMessage', AppMessage);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppResultScreen', AppResultScreen);
Vue.component('AppStartScreen', AppStartScreen);
//import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
