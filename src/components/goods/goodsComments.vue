<template>
    <div class="goodscontent">
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>

<script>
import cmtbox from "../subcomponents/comment.vue"
export default {
    components:{
        cmtbox
    }
}
</script>

<style scoped>
    .goodscontent {
        margin: 0 15px;
    }
</style>
