<template>
    <div class="BillListPage">
        <BillListPage v-for="item in BillList" :key="item" :type='item'></BillListPage>
    </div>
</template>



<script>

import BillListPage from '../BillList/BillListPage.vue'
export default {
    components:{
        BillListPage
    },
    data(){
        return {
            BillList:[1,2,11,21,22,23,24,25]
        }
    }
}
</script>


<style lang="less" scoped>
    .BillListPage {
        background-color: #fff;
    }
</style>