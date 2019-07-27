<template>
  <div class="goodsBox">
    <h3>{{goodsDetail.title}}</h3>
    <hr />
    <div v-html="goodsDetail.content" class="content"></div>
  </div>
</template>

<script>
import { getGoodsDetail } from "../../api/index.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsDetail: []
    };
  },
  created() {
    this.getGoodsDetail();
  },
  methods: {
    async getGoodsDetail() {
      let { message } = await getGoodsDetail(this.id);
      this.goodsDetail = message[0];
      console.log(this.goodsDetail);
    }
  }
};
</script>

<style>
.goodsBox {
  margin: 0 10px;
}
.goodsBox h3 {
  font-size: 15px;
  margin: 15px 0;
  color: skyblue;
}
.content {
  font-size: 13px;
  text-align: left;
}
.goodsBox img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.goodsBox [align="center"] {
    margin-bottom: 0;
}
</style>