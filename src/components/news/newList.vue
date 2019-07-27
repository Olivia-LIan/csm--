<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time|dateFotmat("YYYY-MM-DD HH:mm:ss") }}</span>
              <span>点击次数：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getnewList } from "../../api/index.js"
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getnewList()
    },
    methods:{
        getnewList() {
          getnewList().then(res => {
            this.newsList = res.message
          })
        }
    }
};
</script>

<style scoped>
    .mui-table-view h1{
        font-size: 13px;
        line-height: 20px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .mui-table-view .mui-ellipsis{
        font-size: 12px;
        color: #ef4f4f;
        display: flex;
        justify-content: space-between;
    }
    .mui-table-view-cell > a:not(.mui-btn) {
      margin: -8px -11px;
    }
</style>