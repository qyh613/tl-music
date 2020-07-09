<template>
    <div>
        <div class="SearchBgc"></div>
        <div class="search">
            <input type="text" placeholder="请输入搜索内容" v-model="KeyWord">
            <button @click="search">搜索</button>
        </div>
        <div class="singerName">
            <van-tabs v-model="active" v-if="KeyWord" @click="name">
                <van-tab v-for="item in artist" :key="item.artistid" :title="item.artistname">
                    <p v-for="(item,index) in album" :key="index">{{item.albumname}}</p>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    // 搜索页*****************************************************

    import {getsearch} from "../../api/music-api";

    export default {
        name: "SearchBody",
        data() {
            return {
                KeyWord: '',
                active: 2,
                artist: [],
                album:[],
                albumname:''
            }
        },
        methods: {
            search() {
                getsearch(this.KeyWord).then(res => {
                    console.log(res)
                    this.artist = res.artist
                    this.album = res.album
                    console.log(this.albumname)
                })
            },
            name(title,name){
                getsearch(name).then(res => {
                    this.album = res.album
                })
            }

        }
    }
</script>

<style scoped lang="less">
    .SearchBgc {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*background-color: #f9f9f9;*/
        z-index: -1;
    }

    .search {
        padding: 20px 25px;
        border-bottom: 1px solid #ccc;

        input {
            height: 30px;
            padding: 5px;
            border: 0;
            width: 80%;
        }

        button {
            height: 30px;
            width: 20%;
        }
    }
    .singerName{
        font-size: 18px;
        background-color: #fff;
    }
    .van-tabs--line {
        border-bottom: 1px solid #ccc;
    }
    p{
        padding: 10px;
        font-size: 14px;
        border-top: 2px solid #ccc;
        border-bottom: 1px solid #ccc;
        margin-top:-1px
    }
</style>