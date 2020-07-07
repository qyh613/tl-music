<template>
    <div class="coverBox">
        <div class="content">
            <div class="cover">
                <img :src="this.billboard.pic_s192">
            </div>
            <ul class="billTitle">
                <li v-for="(item,index) in list" :key="item.song_id"><span>{{index+1}}</span>
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

/* 榜单 */
    import {
        getBillList
    } from '../../api/music-api.js'
    export default {
        data() {
            return {
                list: [],
                billboard: {}
            }
        },
        props: {
            type: {
                tyep: [String, Number]
            }
        },
        created() {
            getBillList(this.type, 3).then(res => {
                this.billboard = res.billboard
                this.list = res.list
            })
        }
    }
</script>


<style lang="less" scoped>
    .coverBox {
        padding: 15px;

        .content {
            display: flex;
            padding-bottom: 10px;
            border-bottom: 1px solid #eae5e5;

            .cover {
                display: flex;
                flex-shrink: 0;
                width: 100px;
                height: 100px;

                img {
                    width: 100%;
                    height: 100%;

                }
            }

            .billTitle {
                padding: 5px 10px;

                li {
                    font-size: 14px;
                    color: #535050;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-bottom: 5px;
                    span {
                        color: red;
                    }
                }
            }
        }

    }
</style>