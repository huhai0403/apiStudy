import Vue from 'vue';
import iView from 'iview';
import Mint from 'mint-ui';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);
Vue.use(Mint);

import './libs/main.css'
import { Tabbar, TabItem } from 'mint-ui';


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

import store from "./vuex/store"
/*const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});*/


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});