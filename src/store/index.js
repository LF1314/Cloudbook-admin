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

    plugins: [createPersistedState({
      Storage: {
        getItem: key => sessionStorage.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) => sessionStorage.set(key, value),
        removeItem: key => sessionStorage.remove(key)
      }
    })]

  }

)


export default store;
