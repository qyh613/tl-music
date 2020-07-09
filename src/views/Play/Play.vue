<template>
    <div>
        <div class="PlayBgc"></div>
        <Header :name="songinfo.title" />
        <MinImg :ImgSrc="songinfo.pic_radio"/>
        <Lyrics :content="Lyricscontent.content" v-if="Lyricscontent.content"/>
        <Operation/>
        <div class="Audio">
            <audio ref="audio" :src="bitrate.show_link" controls></audio>
        </div>
    </div>
</template>

<script>

    // 播放主体内容*************************
    import Header from "./Header";
    import MinImg from "./MinImg";
    import Operation from "./Operation";
    import Lyrics from "./Lyrics";
    import {getLyrics, getSongDetails} from "../../api/music-api";
    import {mapState} from "vuex";

    export default {
        name: "Play",
        components: {
            Header,
            MinImg,
            Operation,
            Lyrics
        },
        data(){
            return{
                songinfo:{},
                bitrate:{},
                Lyricscontent:{}
            }
        },
        created() {
            getSongDetails(this.$route.params.songid).then(res => {
                this.songinfo = res.songinfo
                this.bitrate = res.bitrate
                getLyrics(res.songinfo.lrclink).then(res=>{
                    // console.log(res)
                    this.Lyricscontent = res
                })
            });
        },
        mounted() {
            // console.log(this.$refs.audio)
            this.$refs.audio.addEventListener("timeupdate",()=>{
                // console.log(this.$refs.audio.currentTime)
                this.$store.commit("setCurrentTime",{currentTime:this.$refs.audio.currentTime})
            })
        },
        computed:{
            ...mapState(["process"])
        },
        watch:{
            process(){
                this.$refs.audio.currentTime = this.process;
            }
        }

    }
</script>

<style scoped lang="less">
    .PlayBgc {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: #f9f9f9;
    }

    .Audio {
        padding: 20px 0px 0px;
        text-align: center;

    }
</style>