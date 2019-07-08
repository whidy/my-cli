<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-koa-basic</h1>
      <h2 class="subtitle">My delightful Nuxt.js project</h2>
      <div class="links postcss">
        <p>hello world</p>
        <p>{{ this.$store.state.counter }}</p>
        <el-button @click="$store.dispatch('SET_RANDOM')">add after 1s</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
    }
  },
  methods: {
    do() {}
  }
}
</script>

<style>

</style>
