import Vue from "vue";
import App from "./App.vue";
import VueFacebook from 'vue-facebook';

Vue.use(VueFacebook)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
