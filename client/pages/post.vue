<template>
  <div class="posts">
    here are posts<br>
    =======================
    <ul class="list">
      <li v-for="(item, index) in posts" :key="index">
        <h1>{{ item.title }}</h1>
        <p>Author: {{ item.author }}</p>
        <br>
      </li>
    </ul>
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
      this.$axios.post('/posts').then((data) => {
        this.posts = data
      })
    }
  }
}
</script>

<style>

</style>
