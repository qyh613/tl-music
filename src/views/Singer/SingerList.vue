<template>
    <div>
        <router-link :to="'/index/singerDetails/'+list.ting_uid" tag="div" class="SingerList">
            <img :src="list.avatar_middle" alt="">
            <p>{{list.name}}</p>
        </router-link>
        <!--        <div class="SingerList" @click="singerDetails">-->
        <!--            <img :src="list.avatar_middle" alt="">-->
        <!--            <p>{{list.name}}</p>-->
        <!--        </div>-->
    </div>
</template>


<script>
    import {geshou} from "../../api/music-api";

    export default {
        // 歌手页****************************************************
        data() {
            return {
                list: []
            }
        },
        props: {
            tinguid: {
                type: Number
            }
        },
        created() {
            geshou(this.tinguid).then(res => {
                // console.log(res)
                this.list = res
            });
        },
        methods: {
            singerDetails() {
                console.log(1)
            }
        }
    }
</script>


<style lang="less" scoped>
    .SingerList {
        display: flex;
        padding: 10px 20px;

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }

        p {
            padding-left: 15px;
            line-height: 60px;
        }
    }

</style>