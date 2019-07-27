<template>
  <div class="cmt-Data">
    <h3 class="cmt-info">发表评论</h3>
    <hr />
    <textarea placeholder="请在此处输入评论（评论字数不可超过120个）" maxlength="120" v-model="textVal"></textarea>
    <div class="btns">
      <mt-button type="primary" size="normal" class="addbtn" @click="addList">发表评论</mt-button>
    </div>
    <p class="line">-----------------&nbsp;&nbsp;&nbsp;我是华丽的分割线&nbsp;&nbsp;&nbsp;------------------</p>
    <div class="cmt-list" v-for="(item,i) in cmtList" :key="i">
      <div class="cmt-title">{{i+1}}楼:&nbsp;&nbsp;评论人:{{item.user_name}}</div>
      <div class="cmt-Content">{{item.content ==="undefined" ? "此用户很懒，什么都没留下": item.content}}</div>
      <div class="cmt-time">评论时间{{item.add_time|dateFotmat("YYYY-MM-DD HH:mm:ss")}}</div>
    </div>
    <div class="btns">
      <mt-button type="danger" size="normal" plain class="more-btn" @click="getMore">加载更多</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { getCmtList, addList } from "../../api/index";
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
    async getCmtList() {
      let { message } = await getCmtList({
        id: this.id,
        pageindex: this.pageindex
      });
      this.cmtList = this.cmtList.concat(message);
    },
    getMore() {
      this.pageindex++;
      this.getCmtList();
    },
    addList() {
      if (this.textVal.trim() == 0) {
        return Toast("评论内容不能为空哦！");
      }
      addList(this.id, this.textVal.trim()).then(res => {
        var cmt = {
          user_name: "匿名用户",
          add_time: Date.now(),
          content: this.textVal.trim()
        };
        this.cmtList.unshift(cmt);
        this.textVal = "";
      });
    }
  },
  props: ["id"]
};
</script>

<style scoped>
.cmt-Data {
  position: relative;
  margin-top: 10px;
  text-indent: 0;
}
.cmt-Data .cmt-info {
  text-align: left;
  font-size: 18px;
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
  overflow: hidden;
}
.cmt-list .cmt-title {
  /* background-color: #26a2ff; */
  line-height: 20px;
  color: #26a2ff;
  font-weight: 700;
  border-radius: 2px;
  padding: 0 10px;
}
.cmt-list .cmt-Content {
  font-size: 13px;
  color: #333;
  /* height: 30px; */
  line-height: 20px;
  margin: 15px;
  padding: 20px 10px;
  background-color: #ddd;
  border-radius: 3px;
}
.cmt-list .cmt-time {
  text-indent: 0;
  font-size: 13px;
  color: #ccc;
  padding-right: 20px;
  float: right;
}
.btns {
  position: relative;
  height: 60px;
  margin-top: 15px;
}
.mint-button {
  margin-bottom: 5px;
  font-size: 15px;
  width: 130px;
  height: 40px;
}
.addbtn {
  position: absolute;
  right: 0;
}
.more-btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-indent: 0;
}
.line {
  font-size: 12px;
  color: #ccc;
  text-align: center;
  text-indent: 0;
  margin-bottom: 25px;
}
</style>
