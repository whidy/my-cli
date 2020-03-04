<template>
  <div class="home">
    <el-button type="primary">主要按钮</el-button>
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
