<template>
  <div class="form-login">
    <div class="tips" :style="{visibility : error ? 'visible' : 'hidden'}">
      <i class="tip-status"></i>
      {{error}}
    </div>
    <p class="login-type">
      <span>账号登录</span>
      <a href="#">
        <span>手机动态码登录</span>
        <i></i>
      </a>
    </p>
    <!-- ele没有对应的icon -->
    <el-input
      :class="['form-input',{error : error && !this.userName}]"
      type="text"
      v-model="userName"
      placeholder="手机号/用户名/邮箱"
    ></el-input>
    <el-input
      :class="['form-input',{error : error && !this.password}]"
      type="password"
      v-model="password"
      placeholder="密码"
    />
    <div class="forgetPwd">
      <a href="#">忘记密码？</a>
    </div>
    <el-button class="btn-login" @click="submit">登录</el-button>
    <p class="reg">
      <span>还没有账号？</span>
      <router-link :to="{name: 'register'}">免费注册</router-link>
    </p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userName: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submit() {
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      }
      if (!this.password) {
        this.error = "请输入密码";
        return false;
      }
      this.API.login({
        params: {
          userName: this.userName,
          password: this.password
        }
      }).then( res => {
        if (res.data.status == 'success') {
          let username = res.data.data;
          this.$store.dispatch('user/setUsername', username)
          this.$router.push({name: 'index'})
        } else {
          this.error = res.data.msg
        }
      });
    }
  }
};
</script>

<style lang="less">
.form-login {
  width: 270px;
  background: #fff;
  // 错误提示
  .tips {
    visibility: hidden;
    min-height: 18px;
    margin-bottom: 10px;
    padding: 10px 7px 10px 10px;
    border: 1px solid #f5d8a7;
    border-radius: 2px;
    background: #fff6db;
    font-size: 12px;
    color: #666;
    .tip-status {
      display: inline-block;
      position: relative;
      width: 17px;
      height: 17px;
      overflow: hidden;
      vertical-align: -3px;
      background: #fb8b41;
      border-radius: 50%;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 7px;
        left: 4px;
        width: 9px;
        height: 3px;
        background: #fff;
      }
    }
  }
  //
  .login-type {
    display: flex;
    justify-content: space-between;
    color: #666;
    font-size: 14px;
    a {
      position: relative;
      padding-right: 16px;
      font-size: 12px;
      color: #666;

      i {
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -8px;
        width: 14px;
        height: 14px;
        background-image: url("~@/assets/images/login/login-logo.png");
        background-position: -877px -677px;
      }
      &:hover {
        span {
          text-decoration: underline;
        }
      }
    }
  }
  // 账号密码输入框
  .el-input {
    margin: 8px 0;
  }

  /* 聚焦时 */
  .form-input input:focus {
    border-color: #2bb8aa;
  }
  // 输入错误时
  .error input {
    border-color: red;
  }

  //忘记密码
  .forgetPwd {
    padding-bottom: 8px;
    font-size: 12px;
    text-align: right;
    a {
      color: #2bb8aa;
    }
  }
  .btn-login {
    width: 100%;
    margin: 8px 0px;
    padding: 10px 20px 10px;
    border: none;
    border-bottom: 1px solid #666;
    border-radius: 2px;
    background-color: #2db3a6;
    background-image: linear-gradient(to bottom, #2ec3b4, #2db3a6);
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }

  .reg {
    color: #666;
    font-size: 14px;
    a {
      color: #2bb8aa;
    }
  }
}
</style>

