<template>
  <div>
    <mt-swipe :auto="4000" :class='id == 1 ? "swiperPic" : "swiperPic1"'>
      <mt-swipe-item v-for="item in swiperlist" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    props:["swiperlist","id"]
};
</script>

<style scoped>
    .swiperPic {
      height: 130px;
    }
    .swiperPic1 {
      height: 280px;
    }
    .mint-swipe img {
      width: 100%;
      height: 100%;
    }
</style>