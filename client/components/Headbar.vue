<template>
  <header class="header">
    <el-row
      type="flex"
      class="inner-wrap"
      justify="space-between"
      align="middle">
      <el-col :span="6">
        <nuxt-link to="/" tag="div">
          <img
            class="logo"
            src="https://secure.gravatar.com/avatar/8f5246699fb182174cb6804df43078e3?s=98&d=mm&r=g"
            alt>
        </nuxt-link>
      </el-col>
      <el-col :span="12">
        <div class="nav-top">
          <ul class="nav-info">
            <li class="item">
              <a
                href="//www.51.la/login?source=duanlian&redirect=https%3A%2F%2Fdwz.51.la%2Fwyla%2Flogin">注册</a>
            </li>
            <li class>
              <a
                href="//www.51.la/login?source=duanlian&redirect=https%3A%2F%2Fdwz.51.la%2Fwyla%2Flogin">登录</a>
            </li>
          </ul>
          <ul class="nav-menu">
            <li>
              <a href="//www.51.la">网站统计</a>
            </li>
            <li>
              <a href="/doc/lian-xi-wo-men.html">联系我们</a>
            </li>
            <li>
              <a href="/doc">帮助</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </header>
</template>
<script type="text/babel">
export default {
  data() {
    return {
      isLogin: false,
      bgToBlack: false,
      isScroll: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: #2f323b;
  .logo {
    width: 40px;
    // height: 60px;
  }
}
.nav-top {
  overflow: hidden;
  ul {
    float: right;
    text-align: right;
    &.nav-menu {
      width: 360px;
      a {
        padding: 0 25px;
      }
    }
    &.nav-info {
      width: 160px;
      a {
        padding: 0 15px;
      }
    }
    li {
      display: inline-block;
      a {
        color: #fff;
        height: 60px;
        line-height: 60px;
      }
    }
  }
}
</style>
