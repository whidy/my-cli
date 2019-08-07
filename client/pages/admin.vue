<template>
  <div class="admin">
    <nuxt />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  beforeCreate() {
    console.log(this.$route.name)
    // if (this.$route.name === 'admin') {
    //   this.$router.push({ name: 'admin-overviews' })
    // }
  }
}
</script>

<style>

</style>
