import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        billList:[],
        currentTime :0,
        process:null
    },
    mutations: {
        // ceshi(state, payload) {
        //     state.qyh = payload.qyh
        // }


        setCurrentTime(state,payload){
            state.currentTime=payload.currentTime;
        },
        setProess(state,payload){
            state.process=payload.process;
        }
    },
    getters: {
        da(state) {
            return state.list.sort((a, b) => {
                return a - b
            })
        },
        xiao(state) {
            return state.list.sort((a, b) => {
                return b - a
            })
        }
    }
})




