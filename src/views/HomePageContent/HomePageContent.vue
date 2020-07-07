<template>
    <div>
        <BillList type='2' :size='6' title='今日榜单'></BillList>
        <BillList type='1' :size='3' title='新歌速递'></BillList>
        <Swipe></Swipe>
        <MusicList></MusicList>
        <BillList type='24' :size='6' title='热门歌单'></BillList>
    </div>
</template>


<script>
    import BillList from '../../components/BillList.vue';
    import Swipe from '../../components/Swipe.vue';
    import MusicList from '../../components/MusicList.vue';
    export default {
        components: {
            BillList,
            Swipe,
            MusicList
        },
        
    }
</script>