import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        qyh: {
            name: '权一航'
        },
        list: [2, 1, 3]
    },
    mutations: {
        ceshi(state, payload) {
            state.qyh = payload.qyh
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




