<template>
  <div class="admin">
    <div class="sidebar" :class="sideCollapse ? 'collapsed' : ''">
      <div class="brand">
        <i class="icon iconfont icon-logo" />
        <span class="logo-txt">后台管理</span>
      </div>
      <el-menu
        :router="true"
        :default-active="activedIndex"
        class="side-menu"
        :collapse="sideCollapse"
        :collapse-transition="false"
        text-color="#b4b5b7"
        active-text-color="#fff">
        <el-menu-item index="overview" :route="{path: '/admin/overviews'}">
          <i class="icon iconfont icon-gaikuang" />
          <span slot="title">概览</span>
        </el-menu-item>
        <el-menu-item index="detail-data" :route="{path: '/admin/users'}">
          <i class="icon iconfont icon-xiangqing" />
          <span slot="title">用户列表</span>
        </el-menu-item>
        <el-menu-item index="detail-visitor" :route="{path: '/admin/articles'}">
          <i class="icon iconfont icon-mingxi" />
          <span slot="title">文章列表</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="container">
      <header class="header">
        <i class="icon iconfont icon-zhankai" @click="toggleSide" />
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="19">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="5" class="collapse">
            <el-dropdown
              class="user-settings"
              trigger="click"
              size="medium"
              @command="doUser">
              <a href="javascript:;" class="el-dropdown-link">{{ $store.state.authUser && $store.state.authUser.account }}</a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </header>
      <router-view class="main">
        <div slot="Footerbar"><Footerbar /></div>
      </router-view>
    </div>
  </div>
</template>

<script>
import * as vuex from 'vuex'
import Footerbar from '@/components/Footerbar'
export default {
  head() {
    // const adminTitle = '后台管理系统'
    const name = this.activedIndex
    return {
      // title: adminTitle,
      titleTemplate: (name) => {
        return `${name}报表 - 后台管理系统`
      }
    }
  },
  layout: 'empty',
  components: {
    Footerbar
  },
  data() {
    return {
      sideCollapse: this.$store.state.sideCollapse
    }
  },
  computed: {
    activedIndex() {
      return this.$route.name
    }
  },
  // mounted() {
  //   console.log(this.rule.name)
  // },
  methods: {
    toggleSide() {
      this.sideCollapse = !this.sideCollapse
      this.$store.dispatch('SET_SIDECOLLAPSE', this.sideCollapse)
    },
    // changeruleId() {
    //   console.log('aaa')
    // },
    doUser(command) {
      this[command]()
    },
    async logout() {
      await this.$store.dispatch('LOGOUT', async() => {
        this.$cookies.remove('51LA_URI_TK', {
          domain: '.51.la'
        })
        await this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_var.scss';
.report {
  display: flex;
  .side-menu {
    margin-top: 8px;
    &:not(.el-menu--collapse) {
      width: 230px;
      min-height: 240px;
    }
  }
  .sidebar {
    min-width: 230px;
    height: 100%;
    overflow-y: auto;
    background-color: rgba(41, 45, 50, 1);
    &.collapsed {
      min-width: 64px;
      width: 64px;
      .brand {
        padding: 0;
        text-align: center;
        .icon {
          font-size: 14px;
        }
        .logo-txt {
          display: none;
        }
      }
    }
    .brand {
      height: 64px;
      line-height: 64px;
      color: white;
      padding-left: 24px;
      color: rgba(255, 255, 255, 1);
      background: #30353A;
      .icon {
        font-size: 24px;
        // position: relative;
        // &::before {
        //   position: absolute;
        //   margin-top: -2px;
        // }
      }
      .logo-txt {
        padding-left: 12px;
      }
    }
  }
  .container {
    min-width: 0;
    height: 100%;
    background-color: rgba(240, 242, 245, 1);
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    align-items: center;
    padding: 0 24px 0 0;
    background-color: #fff;
    box-shadow: 0 3px 5px rgba(128, 128, 128, 0.1);
    position: relative;
    z-index: 1001;
    .icon-zhankai {
      cursor: pointer;
      padding: 0 24px;
    }
    .el-row {
      flex: 1;
    }
    .collapse {
      text-align: right;
      .user-settings {
        margin-left: 10px;
      }
    }
  }
  .main {
    overflow-y: auto;
  }

  .crumb-wrap {
    background-color: #fff;
    padding: 16px 32px 20px;
    .datePicker {
      vertical-align: bottom;
    }
    .title {
      color: $cf-gray;
    }
    .filter {
      margin-top: 14px;
      .el-form-item {
        margin-bottom: 0;
      }
    }
  }

  .section {
    margin: 24px;
  }

  .footer .inner-wrap {
    width: auto;
  }
}
</style>

<style lang="scss" scoped>
body,
.el-main {
  background-color: rgba(240, 242, 245, 1);
}
.el-tooltip__popper {
  z-index: 2099;
}
</style>
