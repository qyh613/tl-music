<template>
    <div class="MinImgBox">
        <img :src="ImgSrc" alt="">
    </div>
</template>

<script>
    // 播放页中间图片*************************************
    export default {
        name: "MinImg",
        props:{
            ImgSrc:[String]
        }
    }
</script>

<style scoped lang="less">
    .MinImgBox {
        text-align: center;
        margin-top: 40px;
        height: 200px;
        img{
            height: 100%;
            border-radius: 50%;
        }
    }
</style>