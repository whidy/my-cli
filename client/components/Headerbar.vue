<template>
  <header class="header">
    <el-row
      type="flex"
      class="inner-wrap"
      justify="space-between"
      align="middle">
      <el-col :span="4">
        <nuxt-link to="/" tag="div">
          <img
            class="logo"
            src="https://secure.gravatar.com/avatar/8f5246699fb182174cb6804df43078e3?s=98&d=mm&r=g"
            alt>
        </nuxt-link>
      </el-col>
      <el-col :span="20">
        <div class="nav-top">
          <ul v-if="!isLogined" class="nav-info">
            <li class="item">
              <nuxt-link to="/login">登录</nuxt-link>
            </li>
          </ul>
          <ul v-else class="nav-info">
            <li class="item">
              <el-dropdown
                class="user-settings"
                trigger="click"
                size="medium"
                @command="doUser">
                <a class="el-dropdown-link">{{ $store.state.authUser && $store.state.authUser.name }}</a>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="admin">管理后台</el-dropdown-item>
                  <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
          <ul class="nav-menu">
            <li class="item">
              <nuxt-link to="/news">新闻</nuxt-link>
            </li>
            <li class="item">
              <a href="https://www.whidy.cn">博客</a>
            </li>
            <li class="item">
              <a href="https://www.whidy.net">博客（旧）</a>
            </li>
            <li class="item">
              <a href="https://github.com/whidy">Github</a>
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
      isLogined: this.$store.state.authUser,
      bgToBlack: false,
      isScroll: false
    }
  },
  methods: {
    doUser(command) {
      this[command]()
    },
    admin() {
      this.$router.push('/admin')
    },
    async logout() {
      await this.$store.dispatch('LOGOUT', async() => {
        await this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: #000;
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
      // width: 360px;
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
