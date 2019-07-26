<template>
  <div class="login">
    <el-row
      class="login-row"
      type="flex"
      justify="center"
      align="middle">
      <el-col :xs="{span: 14}" :sm="{span: 10}" :lg="{span: 6}">
        <el-card>
          <el-form ref="user" :model="user" @keyup.enter.native="!logging && login()">
            <el-form-item
              prop="account"
              :rules="[{ required: true, message: '请填写用户名'}]">
              <el-col :span="24">
                <el-input
                  v-model="user.account"
                  autofocus
                  placeholder="用户名" />
              </el-col>
            </el-form-item>
            <el-form-item
              prop="password"
              :rules="[{ required: true, message: '请填写密码'}]">
              <el-col :span="24">
                <el-input
                  v-model="user.password"
                  type="password"
                  placeholder="密码" />
              </el-col>
            </el-form-item>
            <el-row>
              <el-col :span="24">
                <el-button
                  type="primary"
                  class="login-btn"
                  :loading="logging"
                  @click="login">
                  登录
                </el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        account: '',
        password: ''
      },
      logging: false,
      rules: {}
    }
  },
  layout() {
    return 'empty'
  },
  methods: {
    login() {
      this.$axios.post('/auth/login', {
        name: this.user.account
      }).then((res) => {
        this.$store.commit('USER', res.data)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  // background: url(~assets/img/login-bg.jpg) no-repeat center center fixed;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .login-row {
    height: 100%;
    flex-direction: column;
  }
}
.el-card {
  background-color: rgba(255, 255, 255, 0.5);
  .el-form {
    margin-top: 4%;
    margin-bottom: 4%;
    .captcha {
      background-color: rgba(255, 255, 255, 0.5);
      max-height: 32px;
      cursor: pointer;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
