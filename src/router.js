import vueRouter from "vue-router"
import home from "./components/tabbar/home.vue"
import search from "./components/tabbar/search.vue"
import member from "./components/tabbar/member.vue"
import shopcart from "./components/tabbar/shopcart.vue"
import newList from "./components/news/newList.vue"
import newsinfo from "./components/news/newsInfo.vue"
import photolist from "./components/photos/photoList.vue"
import photoinfo from "./components/photos/photoInfo.vue"
import goodsliat from "./components/goods/goodsList.vue"

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
        { path: "/home/goodslist", component: goodsliat }
    ],
    linkActiveClass: "mui-active"
})

export default router