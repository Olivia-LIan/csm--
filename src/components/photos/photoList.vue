<template>
  <div>
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a
          :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']"
          v-for="item in photolist"
          :key="item.id"
          @click="getPhotoList(item.id)"
        >{{ item.title }}</a>
      </div>
    </div>
    <ul>
      <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoinfo/'+item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h2 class="info-title">{{ item.title }}</h2>
          <div class="info-content">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../assets/mui-master/dist/js/mui.js";
import { getAllPhoto,getPhotoList } from "../../api/index"
export default {
  data() {
    return {
      photolist: [],
      list: []
    };
  },
  created() {
    this.getAllPhoto();
    this.getPhotoList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    mui("header,nav").on("tap", "a", function() {
      mui.openWindow({ url: this.href });
    });
  },
  methods: {
    getAllPhoto() {
      getAllPhoto().then(res => {
          res.message.unshift({ id: 0, title: "全部" });
          this.photolist = res.message;
      });
    },
    getPhotoList(cateid) {
      getPhotoList(cateid).then(res => {
          this.list = res.message;
      });
    }
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  position: relative;
  list-style: none;
  margin: 0 20px 20px;
  background-color: #ccc;
  border-radius: 5px;
  overflow: hidden;
}
li img {
  width: 100%;
  vertical-align: middle;
}
.info {
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 17px;
  font-size: 12px;
  text-align: left;
  padding: 15px 15px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  max-height: 83px;
  border-radius: 5px;
}
.info h2 {
  margin: 0;
  padding: 0;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 25px;
}
.info-content {
  text-indent: 2em;
}
</style>

