<template>
    <div>
        <ul class="navBar">
            <li>
                <router-link to="/index">
                    <img src="../assets/logo-ea5.png" alt="logo">
                </router-link>
            </li>
            <li>
                <router-link to="/index/singer">
                    歌手
                </router-link>
            </li>
            <li>
                <router-link to="/index/bill">
                    榜单
                </router-link>
            </li>
            <li>
                <router-link to="/index/my">
                    我的
                </router-link>
            </li>
            <li>
                <router-link to="/index/search">
                    搜索
                </router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .navBar {
        height: 50px;
        font-size: 16px;
        background-color: #f9f9f9;
        display: flex;

        li {
            width: 20%;

            a {
                height: 100%;
                display: flex;
                line-height: 50px;
                align-items: center;
                justify-content: center;
                font-size: 14px;

                img {
                    vertical-align: middle;
                    height: 65%;
                }

                color: #999;
            }

        }
    }
</style>