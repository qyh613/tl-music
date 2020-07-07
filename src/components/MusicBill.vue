<template>
    <div class="MusicListBox">
        

        <div class="MusicList" v-for="item in list1" :key="item.song_id">
            <div class="coverImg">
                <img :src="item.pic_small">
            </div>
            <div class="coverContent">
                <h4>{{item.title}}</h4>
                <p>{{item.author}}</p>
            </div>
        </div>
    </div>
</template>



<script>

    /* tab切换 */
    import {
        getBillList
    } from '../api/music-api.js';
    export default {
        props: {
            type: {
                type: Number
            }
        },
        data() {
            return {
                list1: [],
                
            }
        },
        created() {
            getBillList(this.type, 4).then(res => {
                this.list1 = res.list
            })
        },
        
    }
</script>



<style lang="less" scoped>
    .MusicListBox {
        margin-top: 5px;

        .MusicList {
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid #f8f5f5;

            .coverImg {
                width: 50px;
                height: 50px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .coverContent {
                padding: 3px 10px;

                h4 {
                    color: #555;
                }

                p {
                    padding-top: 5px;
                    color: #999;
                    font-size: 13px;
                }
            }
        }
    }
</style>