<template>
    <div class="SwipeBox">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../assets/img/b1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/img/b2.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/img/b3.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>


<script>
    /* 轮播图 */
    export default {

    }
</script>



<style lang="less" scoped>
    .SwipeBox {
        padding: 10px;

        img {
            width: 100%;
        }
    }
</style>