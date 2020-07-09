<template>
    <div>
        <div class="ImgBox">
            <img :src="billboard.pic_s444">
        </div>
        <ul>
            <li v-for="item in list" :key="item.song_id">{{item.title}}
            <p>{{item.author}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from "../../api/music-api";

    export default {
        name: "BillDetails",
        data(){
            return{
                billboard:{},
                list:[]
            }
        },
        created() {
            getBillList(this.$route.params.type, 10).then(res => {
                console.log(res)
                this.billboard=res.billboard
                this.list=res.list
            })
        }
    }
</script>

<style scoped lang="less">
    .ImgBox {
        width: 100%;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    ul{
        padding: 10px;
        li{
            color: #555555;
            font-size: 17px;
            height: 60px;
            border-bottom: 1px solid #ccc;
            padding: 8px 0 0;

            p{
                font-size: 14px;
                color: #8b8a8a;
            }
        }
    }
</style>