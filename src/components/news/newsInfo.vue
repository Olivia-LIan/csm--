<template>
  <div class="infoContent">
    <h5>{{newsListInfo.title}}</h5>
    <p class="headerInfo">
      <span>发表时间：{{ newsListInfo.add_time|dateFotmat("YYYY-MM-DD HH:mm:ss") }}</span>
      <span>点击次数：{{newsListInfo.click}}次</span>
    </p>
    <hr />
    <div v-html="newsListInfo.content"></div>
    <comments :id="id"></comments>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

import comments from "../subcomponents/comment";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsListInfo: {}
    };
  },
  created() {
    this.getAllInfo();
  },
  methods: {
    getAllInfo() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.newsListInfo = res.body.message[0];
        } else {
          Toast("数据读取错误");
        }
      });
    }
  },
  components: {
    comments:comments
  }
};
</script>

<style>
.infoContent {
  margin: 0 15px;
  text-align: left;
  text-indent: 2em;
}
.infoContent h5 {
  font-size: 20px;
  color: red;
  padding-top: 10px;
  line-height: 20px;
  text-indent: 0;
}
.infoContent .headerInfo {
  margin-top: 10px;
  font-size: 12px;
  color: #e28731;
  display: flex;
  justify-content: space-between;
}
</style>