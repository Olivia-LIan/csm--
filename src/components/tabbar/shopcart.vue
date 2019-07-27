<template>
  <div class="shopcar">
    <div class="mui-card" v-for="item in AllCar" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner carInfo">
          <mt-switch></mt-switch>
          <img :src="item.thumb_path" alt />
          <div class="carPro">
            <h3>{{item.title}}</h3>
            <p>
              价格:<span>￥{{item.sell_price}}</span>
              <number-tab style="height:25px"></number-tab>
              <a href="javascript:;">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
  </div>
</template>

<script>
import numberTab from "../subcomponents/shop-numberTab.vue";
import { getAllCar } from "@/api"
export default {
  components: {
    numberTab
  },
  data() {
      return {
          AllCar:[]
      }
  },
  created(){
      this.getAllCar()
  },
  methods:{
     async getAllCar() {
          var idArr = []
          this.$store.state.car.forEach(item => idArr.push(item.id))
          if(idArr.length <= 0) {
              return
          }
          let { message } = await getAllCar(idArr.join(","))
          this.AllCar = message
      }
  }
};
</script>

<style>
.carInfo {
  display: flex;
  align-items: center;
  text-align: left;
}
.carInfo img {
  width: 45px;
  height: 45px;
  margin: 0 10px;
}
.carInfo h3 {
  font-size: 12px;
  /* margin: 15px 0; */
}
.carInfo a {
    font-size: 12px;
    margin-left: 5px;
}
.carInfo p {
    font-size: 12px;
}
.carInfo span {
    font-size: 12px;
    color: red;
    margin-right: 5px;
}
span.mint-switch-core  {
    width: 41px;
    height: 22px;
}
span.mint-switch-core::after {
    width: 20px;
    height: 20px;
}
span.mint-switch-core::before {
    width: 40px;
    height: 22px;
}
div.mui-card-content-inner {
    padding: 10px;
}
</style>