<template>
  <div class="art">
    this. is an article dsadas of {{ $route.params.id }}
    {{ user }}
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ params, error, payload, $axios }) {
    if (payload) {
      return { user: payload }
    } else {
      return {
        user: await $axios.get('http://localhost:5555/api/posts')
      }
    }
  }
}
</script>

<style>
</style>
