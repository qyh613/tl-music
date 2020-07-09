<template>
    <div class="Operation">
        <van-icon :name="pitch?'like-o':'like'" @click="active"/>
        <van-icon name="down"/>
    </div>
</template>

<script>
    import {Dialog,Toast} from 'vant';

    // 播放页关注 和下载功能**********************************
    export default {
        name: "Operation",
        data() {
            return {
                pitch: true,

            }
        },
        methods: {
            active() {
                // this.pitch = !this.pitch
                if (this.pitch) {
                    this.pitch = !this.pitch
                    Toast({
                        message: '收藏成功',
                        icon: 'like-o',
                    });
                }else {
                    Dialog.confirm({
                        message: '您确定要取消关注吗',
                    })
                        .then(() => {
                            this.pitch = !this.pitch
                        })
                        .catch(() => {
                        });
                }



            },

        },

    }
</script>

<style scoped lang="less">
    .Operation {
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        padding: 10px;
        margin-top: 25px;
    }
</style>