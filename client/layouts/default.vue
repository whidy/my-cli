<template>
  <div id="app">
    <Headerbar />
    <nuxt />
    <Footerbar />
  </div>
</template>
<script>
import Headerbar from '@/components/Headerbar'
import Footerbar from '@/components/Footerbar'

export default {
  components: {
    Footerbar,
    Headerbar
  }
}
</script>
