import Vue from "vue";
import App from "./App.vue";

//引入mint-ui框架，一次性引入
import MintUi from "mint-ui";
Vue.use(MintUi);
import "mint-ui/lib/style.css";

//引入路由框架
import vueRouter from "vue-router";
Vue.use(vueRouter);
import router from "./router.js";

//引入vuex
import Vuex from "vuex";
Vue.use(Vuex);

var car =JSON.parse(localStorage.getItem("car") || "[]")
var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addShop(state, goodsNum) {
      var flag = true;
      state.car.some(item => {
        if (item.id === goodsNum.id) {
          item.count += parseInt(goodsNum.count);
          flag = false;
          return true;
        }
      });
      flag && state.car.push(goodsNum);
      localStorage.setItem("car",JSON.stringify(state.car))
    }
  },
  getters:{
    getCount(state){
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    }
  }
});

//引入缩略图
import VuePreview from "vue-preview";
Vue.use(VuePreview);

//引入mui
import "./assets/mui-master/dist/css/mui.css";
import "./assets/mui-master/dist/css/icons-extra(1).css";
import "./assets/mui-master/dist/fonts/mui-icons-extra.ttf";

//时间方式
import moment from "moment";
Vue.filter("dateFotmat", function(dataStr, patter) {
  return moment(dataStr).format(patter);
});

new Vue({
  el: "#app",
  data: {},
  render: h => h(App),
  router,
  store
});
