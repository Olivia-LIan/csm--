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
export default {
    data(){
        return {
            newsList:null
        }
    },
    created(){
        this.getnewList()
    },
    methods:{
        getnewList(){
            this.$http.get("api/getnewslist")
            .then(res => {
                if(res.body.status == 0) {
                    this.newsList = res.body.message
                }
            })
        }
    }
};
</script>

<style scoped>
    .mui-table-view h1{
        font-size: 13px;
        text-align: left;
    }
    .mui-table-view .mui-ellipsis{
        font-size: 12px;
        color: #e28731;
        display: flex;
        justify-content: space-between;
    }
</style>