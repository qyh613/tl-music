<template>
    <div>
        歌手
        {{qyh.name}}
        <button @click="logut">退出登录</button>


        <ul>
            <li v-for="item in da" :key="item">{{item}}</li>
        </ul>
    </div>
</template>



<script>
    import {mapGetters, mapState} from 'vuex'
export default {
    methods:{
        logut(){
            // this.$store.commit('ceshi',{
            //     qyh:{
            //         name:'sss'
            //     }
            // })

            this.$store.commit({
                type:'ceshi',
                qyh:{
                    name:'修改后的名字'
                }

            })
        }

    },
    computed:{
        /*return qyh(){
            this.$store.state.qyh.name
        }
        */
        ...mapGetters(["da"]),
        ...mapState(["qyh"])
    }
}
</script>



