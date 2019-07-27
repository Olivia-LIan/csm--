import vueRouter from "vue-router"
import home from "./components/tabbar/home.vue"
import search from "./components/tabbar/search.vue"
import member from "./components/tabbar/member.vue"
import shopcart from "./components/tabbar/shopcart.vue"
import newList from "./components/news/newList.vue"
import newsinfo from "./components/news/newsInfo.vue"
import photolist from "./components/photos/photoList.vue"
import photoinfo from "./components/photos/photoInfo.vue"
import goodslist from "./components/goods/goodsList.vue"
import goodsInfo from "./components/goods/goodsinfo.vue"
import goodsDetail from "./components/goods/goodsDetail.vue"
import goodsComment from "./components/goods/goodsComments.vue"

var router = new vueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: home },
        { path: "/member", component: member },
        { path: "/shopcart", component: shopcart },
        { path: "/search", component: search },
        { path: "/home/newlist", component: newList },
        { path: "/home/newsinfo/:id", component: newsinfo },
        { path: "/home/photolist", component: photolist },
        { path: "/home/photoinfo/:id", component: photoinfo },
        { path: "/home/goodslist", component: goodslist },
        { path: "/home/goodsInfo/:id", component: goodsInfo,name:"goodsInfo"},
        { path: "/home/goodsDetail/:id", component: goodsDetail,name:"goodsDetail"},
        { path: "/home/goodsComment/:id", component: goodsComment,name:"goodsComment"},
    ],
    linkActiveClass: "mui-active"
})

export default router