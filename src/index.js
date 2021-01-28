import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from "vue";
import Vuex from 'vuex'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from "./views/main.vue";
import router from "./router";
import ConstantMixin from "./config/constant_mixins";
import store from "./vuex/state";

axios.defaults.baseURL = "http://localhost:8000/api/"

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.mixin(ConstantMixin);

new Vue({
    router,
    store: store(),
    render: (h) => h(App),
}).$mount("#app");