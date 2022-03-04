import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import '../node_modules/swiper/dist/css/swiper.css'
import axios from 'axios'
import store from './store/index'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueAwesomeSwiper)
fastclick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')