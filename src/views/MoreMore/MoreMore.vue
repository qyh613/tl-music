<template>
    <div class="moreListBox">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="moreList">
                <div v-for="item in list" :key="item.song_id">
                    <img :src="item.pic_big">
                    <p>{{item.title}}</p>
                </div>
            </van-list>
        </van-pull-refresh>

    </div>
</template>

<script>
    // 更多页************
    import {getBillList} from '../../api/music-api.js'
    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                page: 0
            }
        },
        
        methods: {
            onLoad() {
                getBillList(this.$route.params.type, 10, this.page).then(res => {
                    this.list = this.list.concat(res.list)
                    this.loading = false
                })

                this.page += 10;
            },
            onRefresh() {
                this.page = 0;
                this.list = [];
                this.refreshing = false
                this.onLoad()
            }
        },
    }
</script>



<style lang="less" scoped>
    .moreListBox {
        background-color: #fff;

        .moreList {
            display: flex;
            flex-wrap: wrap;

            div {
                width: calc(100% / 2);
                padding: 10px 29px;
                box-sizing: border-box;
            }
        }
    }
</style>