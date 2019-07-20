<template>
  <div class="cmt-Data">
    <h3 class="cmt-info">发表评论</h3>
    <textarea placeholder="请在此处输入评论（评论字数不可超过120个）" maxlength="120" v-model="textVal"></textarea>
    <mt-button type="primary" size="large" class="cmt-btn" @click="addList">发表评论</mt-button>
    <div class="cmt-list" v-for="(item,i) in cmtList" :key="i">
      <div
        class="cmt-title"
      >第{{i+1}}楼:&nbsp;&nbsp;评论人:{{item.user_name}} &nbsp;&nbsp;评论时间{{item.add_time|dateFotmat("YYYY-MM-DD HH:mm:ss")}}</div>
      <div class="cmt-Content">{{item.content ==="undefined" ? "此用户很懒，什么都没留下": item.content}}</div>
    </div>
    <mt-button type="danger" size="large" plain class="more-btn" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1,
      cmtList: [],
      textVal: ""
    };
  },
  created() {
    this.getCmtList();
  },
  methods: {
    getCmtList() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(res => {
          if (res.body.status == 0) {
            this.cmtList = this.cmtList.concat(res.body.message);
          } else {
            Toast("获取信息失败");
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getCmtList();
    },
    addList() {
      if (this.textVal.trim() == 0) {
        return Toast("评论内容不能为空哦！");
      }
      this.$http
        .post(
          "api/postcomment/" + this.id,
          { content: this.textVal.trim() },
          { emulateJSON: true }
        )
        .then(res => {
          if (res.body.status == 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.textVal.trim()
            };
            this.cmtList.unshift(cmt)
            this.textVal = "";
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style>
.cmt-Data {
  margin-top: 10px;
  text-indent: 0;
}
.cmt-Data .cmt-info {
  text-align: left;
  font-size: 16px;
  color: #000;
}
.cmt-Data textarea {
  height: 85px;
  margin-bottom: 0;
  font-size: 13px;
}
.cmt-list {
  margin-top: 10px;
  text-align: left;
  font-size: 13px;
}
.cmt-list .cmt-title {
  background-color: #ccc;
  line-height: 30px;
}
.cmt-list .cmt-Content {
  font-size: 13px;
  color: skyblue;
  height: 30px;
  line-height: 30px;
  text-indent: 2em;
}
.more-btn {
  margin-bottom: 5px;
}
</style>
