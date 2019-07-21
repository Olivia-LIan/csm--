<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuLIst" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>


    <!-- 6宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">名师讲堂</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotuLIst: []
    };
  },
  created() {
    this.getAllINfo();
  },
  methods: {
    getAllINfo() {
      this.$http.get("api/getlunbo")
        .then(res => {
          if (res.body.status === 0) {
            this.lunbotuLIst = res.body.message;
          }
        });
    }
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 130px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
    padding: 0 15px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell a {
    font-size: 13px
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img {
    width: 40px;
}
</style>