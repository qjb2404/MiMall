import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'


// mock开关
const mock = false;
if (mock) {
    require('./mock/api');
}
// 根据前端的跨域方式做调整
//axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        window.location.href = '/#/login';
        //return Promise.reject(res);
    } else {
        //Message.warning(res.msg);
        //return Promise.reject(res);
        alert(res.msg);
    }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')