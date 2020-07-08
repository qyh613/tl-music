<template>
    <div>
        <div class="billBox">
            <h3>{{title}}
                <router-link :to="'/index/moreMore/'+type" tag="span">更多</router-link>
            </h3>
            <ul>
                <router-link v-for="item in songList" :key="item.song_id" to="/play" tag="li">
                    <img :src="item.pic_big">
                    <p>{{item.title}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>


<script>

    /* 首页布局 */
    import {getBillList} from '../api/music-api.js';

    export default {

        props: {
            title: {
                type: String,
                default: "榜单"
            },
            type: {
                type: String
            },
            size: {
                type: Number,
                default: 6
            }
        },
        data() {
            return {
                songList: [],
            }
        },
        created() {
            getBillList(this.type, this.size).then(res => {
                this.songList = res.list
            })
        },

    }
</script>


<style lang="less" scoped>
    .billBox {
        padding: 5px 10px;
        margin-bottom: 10px;
        background-color: #fff;

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

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                padding: 5px;
                width: calc(100% / 3);
                box-sizing: border-box;
                font-size: 13px;
                color: #696969;

                img {
                    width: 100%;
                }

                p {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>