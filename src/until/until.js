import axios from 'axios'
import router from 'vue-router'

import {
  Message
} from "element-ui";
const instance = axios.create({
  baseURL: '/api/admin',
  timeout: 10000,

})

const fetch = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url, {
          params: data
        }, config)
        .then(res => {
          resolve(res.data)
        })
    })

  },
  post(url, data, config, methods = 'post') {
    return new Promise((resolve, rejects) => {
      instance[methods](url, data, config)
        .then(res => {
          if (res.code == 401) {
            this.$router.push({
              path: "/"
            });
          } else {
            resolve(res.data)
          }
        }).catch(err => {
          rejects(err)
        })
    })
  },
  put(url, data, config) {
    return this.post(url, data, config, 'put')
  }

}
export const $axios = fetch;
