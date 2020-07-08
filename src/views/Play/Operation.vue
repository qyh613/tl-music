<template>
    <div class="Operation">
        <van-icon name="like-o" />
        <van-icon name="down" />
    </div>
</template>

<script>
    export default {
        name: "Operation",

    }
</script>

<style scoped lang="less">
    .Operation {
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        padding: 10px;
        margin-top: 50px;
    }
</style>