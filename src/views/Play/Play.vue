<template>
    <div>
        <Header />
        <MinImg />
        <ul class="TheLyrics">
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>
            <li>歌词</li>

        </ul>
        <Operation />
        <div class="Audio">
            <audio src="" controls></audio>
        </div>
    </div>
</template>

<script>
    import Header from "./Header";
    import MinImg from "./MinImg";
    import Operation from "./Operation";

    export default {
        name: "Play",
        components:{
            Header,
            MinImg,
            Operation,
        }
    }
</script>

<style scoped lang="less">
    .TheLyrics{
        text-align: center;
        padding: 20px 0;
    }
    .Audio {

        padding: 20px 0px 40px;
        text-align: center;
    }
</style>