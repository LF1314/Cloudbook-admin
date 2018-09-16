//vuex store 状态管理
import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
const state = {
  userinfo: {
    username: '',
    desc: "",
    nickname: '',
    avatar: ''
  }
}
const store = new Vuex.Store({
    state,
    mutations: {
      SETUSSERINFO(state, userdata) {
        state.userinfo = userdata
      }
    },

    plugins: [createPersistedState()]

  }

)


export default store;
