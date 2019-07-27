<template>
  <div class="goods-container">
    <transition 
    @before-enter = "beforeEnter"
    @enter = "enter"
    @after-enter = "afterEnter">
      <!-- 购物车小球 -->
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content photoContent">
        <swiper :swiperlist="swiperlist" id="2"></swiper>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content proContent">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价:
            <span class="old_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>
            购买数量：
            <number-tab @getNum="getNum" :maxNum="goodsinfo.stock_quantity"></number-tab>
          </p>
          <p class="btns">
            <mt-button type="primary" size="small" class="nowbuy">立即购买</mt-button>
            <mt-button type="danger" size="small" class="addcat" @click="addCart2">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间: {{ goodsinfo.add_time|dateFotmat("YYYY-MM-DD HH:mm:ss") }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="getPicDetail(id)">图文详情</mt-button>
        <mt-button type="danger" size="large" plain @click="getComments(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import { getSwiperList, getGoodsInfo } from "@/api";
import numberTab from "../subcomponents/numberTab.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      swiperlist: [],
      goodsinfo: [],
      flag:false,
      cartNum:"",
    };
  },
  components: {
    swiper,
    numberTab
  },
  created() {
    this.getSwiperList();
    this.getGoodsInfo();
  },
  methods: {
    async getSwiperList() {
      let { message } = await getSwiperList(this.id);
      message.forEach(v => {
        v.img = v.src;
      });
      this.swiperlist = message;
    },
    async getGoodsInfo() {
      let { message } = await getGoodsInfo(this.id);
      this.goodsinfo = message[0];
    },
    getPicDetail(id) {
      this.$router.push({ name: "goodsDetail", params: { id: id } });
    },
    getComments(id) {
      this.$router.push({ name: "goodsComment", params: { id: id } });
    },
    addCart2(){
      this.flag = !this.flag
      let goodsNum = {
        count:this.cartNum,
        id:this.id,
        price:this.goodsinfo.market_price,
        selected:true
      }
      this.$store.commit("addShop",goodsNum)
    },
    getNum(count){
      this.cartNum = count;
    },
    beforeEnter(el){
      el.style.transform = "translate(0,0)"
    },
    enter(el,done) {
      let ballPosition = this.$refs.ball.getBoundingClientRect()
      let badgePostion = document.querySelector("#badge").getBoundingClientRect()
      let Xcoord = badgePostion.left - ballPosition.left
      let Ycoord = badgePostion.top - ballPosition.top
      el.offsetWidth
      el.style.transform=`translate(${Xcoord}px,${Ycoord}px)`
      el.style.transition = "all 1s ease"
      done()
    },
    afterEnter(el) {
      this.flag = !this.flag
    }
  }
};
</script>

<style scoped>
.goods-container {
  text-align: left;
  background-color: #eee;
  overflow: hidden;
}
.old_price {
  color: red;
  font-size: 16px;
}
.nowbuy,
.addcat {
  margin-bottom: 5px;
  font-size: 14px;
  width: 90px;
  height: 35px;
  margin-right: 10px;
}
.proContent {
  height: 150px;
}
.mui-card-footer {
  display: block;
}
.mui-card-footer button {
  margin: 10px 0;
}
.ball {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 441px;
  left: 151px;
  z-index: 99;
  background-color: red;
  border-radius: 50%;
}
</style>