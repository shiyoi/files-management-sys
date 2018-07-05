import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import {appRouter} from './router/router';
import store from './store';
import App from './app.vue';
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import util from './libs/util';
import axios from 'axios';//fengchehche
import VeeValidate from 'vee-validate';//fengchehche


Vue.use(VueI18n);
Vue.use(iView);
Vue.use(VeeValidate);

Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.baseURL = "http://10.2.104.201:8989/";//测试环境
// Vue.prototype.$axios.defaults.baseURL = "http://10.200.66.113:8989/";//蒋欣 
// Vue.prototype.$axios.defaults.baseURL = "http://172.16.7.125:8989/";//开哥
// Vue.prototype.$axios.defaults.baseURL = "http://10.2.104.179:8080/archive-systems/";//网关
// Vue.prototype.$axios.defaults.baseURL = "http://localhost:3000/";
// Vue.prototype.$axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";
// Vue.prototype.$axios.defaults.headers.post['Content-Type'] = "application/json";


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {
        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
        // iview-admin检查更新
        util.checkUpdate(this);
    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);



        Date.prototype.Format = function (fmt) { 
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    }
});




