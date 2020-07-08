<template>
    <div class="HeaderBox">
        <router-link to="/index" tag="i">
            <van-icon name="wap-home-o" color="red"/>
        </router-link>
        <div class="SongName">歌名</div>
        <van-icon name="search" color="#999"/>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="less">

    /*播放页***********************/
    .HeaderBox {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        line-height: 30px;
        i {
            font-size: 30px;
        }
        .SongName {
            font-size: 18px;
            color: #8b8a8a;
        }
    }

</style>