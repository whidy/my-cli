<template>
  <div class="news">
    <div class="section">
      <div class="inner-wrap">
        <ul class="list">
          <li v-for="(item, index) in posts" :key="index">
            <h1>
              <nuxt-link :to="{path: '/article', param: {id: item.id}}" class="title">{{ item.title }}</nuxt-link>
            </h1>
            <p class="info">Author: {{ item.author }} Date: {{ item.datePublish }}</p>
            <p class="summary">{{ item.summary }}</p>
            <br>
          </li>
        </ul>
      </div>
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
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      this.$axios.post('/posts').then((res) => {
        res.code === 200 && (this.posts = res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 50px 0;
}
.title {
  font-size: 24px;
  line-height: 48px;
}
.info {
  color: #999;
  font-size: 12px;
}
.summary {
  font-size: 14px;
  padding-top: 10px;
}
</style>
