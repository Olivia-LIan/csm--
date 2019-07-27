<template>
  <div class="mui-numbox max" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" @change="getNum" type="number" value="1" ref="input" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../assets/mui-master/dist/js/mui.js";
export default {
  methods: {
    getNum() {
      this.$emit("getNum", parseInt(this.$refs.input.value));
    }
  },
  watch: {
    maxNum: function(newVal,oldVal) {
      mui(".max")
        .numbox()
        .setOption("max",newVal);
    }
  },
  props: ["maxNum"]
};
</script>

<style lang="">
</style>
