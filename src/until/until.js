import axios from 'axios'

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
  post(url, data, config) {
    return new Promise((resolve, rejects) => {
      instance.post(url, data, config)
        .then(res => {
          resolve(res.data)
        }).catch(err => {
          rejects(err)
        })
    })
  }

}
export const $axios = fetch;
