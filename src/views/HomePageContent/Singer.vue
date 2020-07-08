<template>
    <div>
        <SingerList v-for="item in list" :key="item" :tinguid="item" />
    </div>
</template>



<script>

    // 歌手页面*****************8
import SingerList from "../Singer/SingerList";

export default {
    data(){
        return{
            list:[2517 ,7994,1091,45561,2507,245815,1077,1204,1117,82366]
        }
    },
   components:{
       SingerList

   }
}
</script>


<style lang="less" scoped>

</style>