import Vue from 'vue'
import Esnek from "../src/esnek";
import App from "./App";

Vue.use(Esnek);

new Vue({
  render: h => h(App),
}).$mount('#app');
