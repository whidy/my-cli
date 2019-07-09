<template>
  <div id="app" class="home">
    <Headbar />
    <div class="inner-wrap">
      <h1 class="title">nuxt-koa-basic</h1>
      <h2 class="subtitle">My delightful Nuxt.js project</h2>
      <h2 class="subtitle">hello world</h2>

      <div class="links scss">
        <p>{{ this.$store.state.counter }}</p>
        <el-button @click="$store.dispatch('SET_RANDOM')">add after 1s</el-button>
      </div>
      <div class="test">
        <nuxt-link to="/login" tag="p">超管登录</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Headbar from '@/components/Headbar'

export default {
  components: {
    Headbar
  },
  data() {
    return {
    }
  },
  methods: {
    doa() {}
  }
}
</script>
<style lang="scss" scoped>
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
