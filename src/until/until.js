import axios from 'axios'
import router from 'vue-router'
const baseURL = process.env.BASE_URL
import {
  Message
} from "element-ui";
const instance = axios.create({
  baseURL,
  timeout: 10000,

})

const fetch = {
  get(url, data, config, methods = 'get') {
    return new Promise((resolve, reject) => {
      instance[methods](url, {
          params: data
        }, config)
        .then(res => {
          if (res.code == 401) {
            this.$router.push({
              path: "/"
            });
          }
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
  },
  delete(url, data, config) {
    return this.get(url, data, config, 'delete')
  }

}
export const $axios = fetch;
