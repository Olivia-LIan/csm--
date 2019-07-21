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
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.photoinfos = res.body.message[0];
        }
      });
    },
    getpics() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.images = res.body.message;
          this.images.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src;
          });
        }
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
.picinfos{
    overflow: hidden;
    margin: 10px 0 10px 15px;
    padding: 0;
}
.picinfos img {
    width: 90px;
    float: left;
    margin: 5px 12px;
}
figure {
    margin: 0!important;
}
</style>