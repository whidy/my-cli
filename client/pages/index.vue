<template>
  <div class="home">
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
          <div class="links">
            <el-button @click="$store.dispatch('SET_RANDOM')">It will add after 1s,, now is {{ this.$store.state.counter }}</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
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
        res.code === 200 && (this.posts = res.data)
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
.title {
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
