<template>
  <div class="infoContent">
    <h3>{{newsListInfo.title}}</h3>
    <p class="headerInfo">
      <span>发表时间：{{ newsListInfo.add_time|dateFotmat("YYYY-MM-DD HH:mm:ss") }}</span>
      <span>点击次数：{{newsListInfo.click}}次</span>
    </p>
    <hr />
    <div v-html="newsListInfo.content" id="newscontent"></div>
    <div class="floor">----本文由不知春出品，内容仅供参考----</div>
    <comments :id="id"></comments>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

import comments from "../subcomponents/comment";

import { getAllnews } from "../../api/index.js"

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsListInfo: {}
    };
  },
  created() {
    this.getAllnews();
  },
  methods: {
    // getAllInfo() {
    //   this.$http.get("api/getnew/" + this.id).then(res => {
    //     if (res.body.status == 0) {
    //       this.newsListInfo = res.body.message[0];
    //     } else {
    //       Toast("数据读取错误");
    //     }
    //   });
    // }

  getAllnews() {
    getAllnews(this.id).then(res => {
      this.newsListInfo = res.message[0]
    })
  }
    // async getAllInfo() {
    //   let { message } = await getAllInfo(this.id)
    //   this.newsListInfo = message[0]
    // }
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
.infoContent h3 {
  font-size: 18px;
  color: #333;
  padding-top: 10px;
  line-height: 25px;
  text-indent: 0;
}
.infoContent .headerInfo {
  margin-top: 10px;
  font-size: 12px;
  color: #ef4f4f;
  display: flex;
  justify-content: space-between;
  text-indent: 0;
}
hr {
  color: #ccc;
}
#newscontent p {
  color: #333;
}
.floor {
  font-size: 12px;
  color: #ccc;
  text-align: center;
  text-indent: 0;
  margin-top: 15px;
}
</style>