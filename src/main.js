import "babel-polyfill";
import Vue from 'vue';
import App from './App';

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
});