import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
        fileDetails: '',//当前打开的详情页面对应的  档案编号
        stockNos: []//电子库存编号
    },
    mutations: {
        //
        changeFileDetailsPage (state,newPage) {
            state.fileDetails = newPage;
        },
        changeStockNo (state,newV) {
            state.stockNos = newV;
        }

    },
    actions: {

    },
    modules: {
        app,
        user
    }
});

export default store;
