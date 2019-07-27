<template>
  <div id="content">
    <mt-header title="张张·不知春">
      <mt-button
        icon="back"
        slot="left"
        @click="back"
        class="back"
        v-if="$route.path =='/home'?false:true"
      >返回</mt-button>
    </mt-header>

    <transition>
      <router-view ></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge" ref="badge">{{$store.getters.getCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import mui from "./assets/mui-master/dist/js/mui.js";

export default {
  data() {
    return {
    };
  },
  mounted() {
    mui("header,nav").on("tap", "a", function() {
      mui.openWindow({ url: this.href });
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  }
};
</script>

<style scoped>
#content {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
.header {
  z-index: 10;
}
.back {
  margin-bottom: 0;
  width: 60px;
}
</style>
