import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import "vant/lib/index.css";
import "./assets/less/public.less";
import Vant from "vant";

Vue.use(Vant);
Vue.use(VueMeta);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
