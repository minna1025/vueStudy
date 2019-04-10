import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    popupShow: false,
    login: false,
    // login: true,
    sort: 'date',
    tweets: [],
    
  },
  mutations: {
    login (state) {
      !state.login
    },
    popupShow (state) {
      !state.popupShow
    }
  }
})