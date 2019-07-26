<template>
  <div class="posts">
    here are posts
    <ul class="list">
      <li v-for="item in posts" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p>Author: {{ item.author }}</p>
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
        console.log(data)
      })
    }
  }
}
</script>

<style>

</style>
