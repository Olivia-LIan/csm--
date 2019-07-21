import Vue from 'vue'
import App from './App.vue'

// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

import MintUi from "mint-ui"
Vue.use(MintUi)
import "mint-ui/lib/style.css"


import vueRouter from "vue-router"
Vue.use(vueRouter)
import router from "./router.js"

import vueResource from "vue-resource"
Vue.use(vueResource)
Vue.http.options.root ="http://www.liulongbin.top:3005/"

//引入缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//引入mui
import "./assets/mui-master/dist/css/mui.css"
import "./assets/mui-master/dist/css/icons-extra(1).css"
import "./assets/mui-master/dist/fonts/mui-icons-extra.ttf"

//时间方式
import moment from "moment"
Vue.filter("dateFotmat",function(dataStr,patter) {
  return moment(dataStr).format(patter)
})

new Vue({
  el:"#app",
  data:{},
  render: h => h(App),
  router,
})
