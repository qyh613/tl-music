<template>
    <div>
        <div class="Bgc"></div>
        <div class="singerName">
            <img :src="artistinfo.avatar_middle">
            <p>{{artistinfo.name}}</p>
        </div>
        <ul>
            <li v-for="item in songlist" :key="item.song_id">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    // 歌手详情页****************************
    import {getSinger} from "../../api/music-api";

    export default {
        name: "singerDetails",
        data(){
            return{
                artistinfo:{},
                songlist:[]
            }
        },
        created() {
            getSinger(this.$route.params.tinguid).then(res=>{
                console.log(res.songlist)
                this.artistinfo=res.artistinfo
                this.songlist=res.songlist
            })
        }
    }
</script>

<style scoped lang="less">
    .Bgc {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f9f9f9;
        z-index: -1;
    }
    .singerName {
        text-align: center;
        padding: 20px 0;
        img{
            border-radius: 50%;
        }
        p{
            font-size: 25px;
        }
    }
    ul{
        padding: 0px 20px;
        li{
            border-bottom: 2px solid #ccc;
            height: 45px;
            line-height: 45px;
            color: #666;
            font-size: 17px;
        }
    }
</style>