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
      <div class="test">
        <p>blue font</p>
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
<style lang="postcss" scoped>
.test {
  p {
    color: blue;
  }
}
</style>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
