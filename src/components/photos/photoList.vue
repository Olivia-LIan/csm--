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
         @click="getPhotoList(item.id)">{{ item.title }}</a>
      </div>
    </div>
    <ul>
      <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoinfo/'+item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-content">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../assets/mui-master/dist/js/mui.js";

export default {
  data() {
    return {
      photolist:[],
      list:[]
    };
  },
  created() {
    this.getAllPhoto();
    this. getPhotoList(0)
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
      this.$http.get("api/getimgcategory").then(res => {
        if (res.body.status == 0) {
          res.body.message.unshift({ id: 0, title: "全部" });
          this.photolist = res.body.message;
        }
      });
    },
    getPhotoList(cateid){
      this.$http.get("api/getimages/"+cateid)
      .then(res => {
        if(res.body.status == 0) {
          this.list = res.body.message
        }
      })
    }
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}
img[lazy=loading] {
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
  margin: 10px;
  background-color: #ccc;
}
li img {
   width: 100%;
   vertical-align: middle;
}
.info {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  text-align: left;
  padding: 0 5px;
  background-color: rgba(0,0,0,.4);
  color: #fff;
  max-height: 85px;
}
.info h1 {
  font-size: 13px;
}

</style>

