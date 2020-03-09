<template>
  <div class="h-screen flex items-center justify-center">
    <div class="lg:w-3/6 md:w-3/5 sm:w-4/5 h-16 text-center">
      <p class="text-3xl text-red-600">Ooops, Something wrong!</p>
      <p><router-link class="text-blue-300 hover:text-blue-600" :to="{name: 'Index'}">Back to home!</router-link></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
