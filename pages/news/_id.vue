<template>
  <div class="art">
    this. is an article dsadas of {{ $route.params.id }}
    {{ post }}
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ params, error, payload, $axios }) {
    if (payload) {
      return { post: payload }
    } else {
      const result = await $axios.get('http://localhost:5555/api/posts')
      const post = result.data.filter((item) => {
        return (item.id === parseInt(params.id))
      })
      return {
        post
      }
    }
  }
}
</script>

<style>
</style>
