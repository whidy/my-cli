<template>
  <div class="login">
    <!-- <el-button type="primary">主要按钮</el-button> -->
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  mounted() {
    this.$axios.post('/abc', {
      a: 1,
    }, {
      timeout: 1000,
    }).then((res) => {
      console.log(res)
    })
  },
}
</script>

<style src="@/assets/styles/tailwind.css">
