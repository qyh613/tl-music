<template>
    <div class="MusicList">
         
        <h3>音乐榜单 <span>更多</span></h3>
        <van-tabs v-model="active" class="TabMusic">
            <van-tab title="热歌榜">
                <MusicBill :type='2'></MusicBill>
            </van-tab>
            <van-tab title="新歌榜">
                <MusicBill :type='1'></MusicBill>

            </van-tab>
            <van-tab title="经典老歌">
                <MusicBill :type='22'></MusicBill>

            </van-tab>
        </van-tabs>
    </div>
</template>



<script>

/* Tab切换 */
import MusicBill from './MusicBill.vue'
    export default {
        data() {
            return {
                active: 2,
            };
        },
        components:{
            MusicBill
        }
    }
</script>


<style lang="less" scoped>
    .MusicList {
        padding: 5px 10px;
        background-color: #fff;
        margin-bottom: 10px;
        box-sizing: border-box;
        h3 {
            padding: 0 5px;
            margin: 15px 0;
            color: #555;
            font-weight: 700;

            span {
                float: right;
                font-size: 14px;
                color: #999;
            }
        }
    }
</style>