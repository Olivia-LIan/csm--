<template>
  <div>
    <ul>
      <li v-for="(item,i) in pageInfoDate" :key="i" @click="detail(item.id)">
        <div class="info-pic">
          <img :src="item.img_url" alt />
        </div>
        <h1>{{item.title}}</h1>
        <div class="info-content">
          <p class="price">
            <span class="new">￥{{item.sell_price}}</span>
            <del class="old">￥{{item.market_price}}</del>
          </p>
          <p class="sell">
            <span>已售</span>
            <span>剩余{{item.stock_quantity}}件</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="btns" v-if="flag">
      <mt-button type="danger" size="normal" plain class="more-btn" @click="getMore">加载更多</mt-button>
    </div>
  </div>
</template>

<script>
import { getPics } from "../../api/index";
export default {
  data() {
    return {
      pageindex: 1,
      pageInfoDate: [],
      flag:true
    };
  },
  created() {
    this.getPics();
  },
  methods: {
    async getPics() {
      let { message } = await getPics(this.pageindex);
      message !== [] && (this.pageInfoDate = this.pageInfoDate.concat(message));
      message.length < 10 && (this.flag = false);
    },
    getMore() {
      this.pageindex++;
      this.getPics();
    },
    detail(id) {
      this.$router.push({name:"goodsInfo",params:{id:id}})
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 10px;
  justify-content: space-between;
}
ul li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  margin-top: 5px;
  text-align: left;
  padding: 2px;
}
.info-pic img {
  width: 100%;
  height: 100%;
}
ul li h1 {
  font-size: 14px;
  line-height: 20px;
}
ul li .info-content {
  background-color: #eee;
}
ul li .info-content p {
  margin: 0;
  padding: 5px;
}
.price .new {
  color: red;
  font-size: 15px;
  font-weight: 700;
}
.price .old {
  margin-left: 10px;
  font-size: 13px;
}
.sell {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>