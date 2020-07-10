<template>
    <div class="MinImgBox">
        <img :src="ImgSrc" alt="" :class="rotating?'xuanzhuan':''">
    </div>
</template>

<script>
    // 播放页中间图片*************************************
    export default {
        name: "MinImg",
        props:{
            ImgSrc:[String],
            rotating:[Boolean],
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
        .xuanzhuan {
            animation: animal 8s linear infinite;
        }

        @keyframes animal {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
    }
</style>