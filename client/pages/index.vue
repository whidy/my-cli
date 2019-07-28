<template>
  <div id="app" class="home">
    <Headbar />
    <div class="inner-wrap">
      <h1 class="title">nuxt-koa-basic</h1>
      <h2 class="subtitle">My delightful Nuxt.js project</h2>
      <h2 class="subtitle">Hello <strong>{{ name }}</strong></h2>
    </div>
    <div class="inner-wrap">
      <el-form>
        <el-form-item>
          <el-button @click="testRequest">测试数据请求</el-button>
        </el-form-item>
        <ul class="list">
          <li v-for="(item, index) in posts" :key="index">
            <h1>{{ item.title }}</h1>
            <p>Author: {{ item.author }}</p>
            <br>
          </li>
        </ul>
        <el-form-item>
          <div class="links scss">
            <el-button @click="$store.dispatch('SET_RANDOM')">It will add after 1s,, now is {{ this.$store.state.counter }}</el-button>
          </div>
        </el-form-item>
      </el-form>
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
      posts: []
    }
  },
  computed: {
    name() {
      if (this.isLogined) {
        return `管理员：${this.$store.state.authUser.name}`
      }
      return '小游客(*^__^*)'
    },
    isLogined() {
      const user = this.$store.state.authUser
      if (user) {
        return true
      }
      return false
    }
  },
  methods: {
    testRequest() {
      this.$axios.post('/posts').then((res) => {
        this.posts = res
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  p {
    color: blue;
  }
}.inner-wrap {
  min-width: 1200px;
  // text-align: center;
}
.list {
  text-align: left;
  h1 {
    font-weight: bold;
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
