import Vue from 'vue'
import { Message } from 'element-ui'

export const strict = true

export const state = () => ({
  counter: 0
})

export const mutations = {
  ADD(state, number = 0) {
    state.counter += number
  }
}

export const getters = {
  GET_COUNTER(state) {
    return state.counter
  }
}

export const actions = {
  // https://zh.nuxtjs.org/examples/auth-routes/#nuxtserverinit-%E6%96%B9%E6%B3%95
  nuxtServerInit({ commit }, { req }) {

  },
  async SET_RANDOM({ commit, $axios }) {
    let number
    await new Promise(resolve => setTimeout(function() {
      number = Math.random()
      resolve()
    }, 1000))
    commit('ADD', number)
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
