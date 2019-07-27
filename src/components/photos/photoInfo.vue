<template>
  <div>
    <div class="photo-header">
      <h3>{{ photoinfos.title }}</h3>
      <div class="photo-title">
        <span>发表时间：{{ photoinfos.add_time | dateFotmat("YYYY-MM-DD HH:mm:ss") }}</span>
        <span>浏览：{{ photoinfos.click }}次</span>
      </div>
    </div>
    <hr />

    <div class="picinfos">
      <vue-preview :slides="images"></vue-preview>
    </div>

    <div class="photo-content" v-html="photoinfos.content"></div>
    <commentinfo :id="id"></commentinfo>
  </div>
</template>

<script>
import commentinfo from "../subcomponents/comment.vue";
import { getPhotoInfo,getpics } from "../../api/index.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfos: [],
      images: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getpics();
  },
  methods: {
    getPhotoInfo() {
      getPhotoInfo(this.id).then(res => {
        this.photoinfos = res.message[0];
      });
    },
    getpics() {
      getpics(this.id).then(res => {
        this.images = res.message;
        this.images.forEach(item => {
          item.w = 600;
          item.h = 400;
          item.msrc = item.src;
        });
      });
    }
  },
  components: {
    commentinfo: commentinfo
  }
};
</script>

<style>
.photo-header h3 {
  font-size: 16px;
  color: navy;
  height: 45px;
  line-height: 45px;
}
.photo-header .photo-title {
  font-size: 12px;
  color: orange;
  display: flex;
  justify-content: space-between;
  /* margin: 0; */
  margin: 0 10px;
}
hr {
  margin: 10px 0;
  padding: 0;
}
.photo-content {
  font-size: 12px;
  text-align: left;
  margin: 0 10px;
  line-height: 30px;
}
.picinfos {
  overflow: hidden;
  margin: 10px 0 10px 15px;
  padding: 0;
}
.picinfos img {
  width: 105px;
  float: left;
  margin: 5px 5px;
}
figure {
  margin: 0 !important;
}
</style>