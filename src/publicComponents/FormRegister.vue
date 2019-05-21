<template>
  <main class="form">
    <el-form
      :model="registerForm"
      status-icon
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input
          type="text"
          class="form-input"
          v-model="registerForm.userName"
          auto-complete="off"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          class="form-input"
          v-model="registerForm.password"
          auto-complete="off"
          @input="input"
        />
      </el-form-item>
      <div class="pw-strength">
        <div :class="['bar', strengthClass]"></div>
        <div class="letter">
          <span>弱</span>
          <span>中</span>
          <span>强</span>
        </div>
      </div>
      <el-form-item label="确认密码" prop="rePassword">
        <el-input
          type="password"
          class="form-input"
          v-model="registerForm.rePassword"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="register-btn" @click="submitForm('registerForm')">同意以下协议并注册</el-button>
      </el-form-item>
    </el-form>
    <div class="protocol">
      <a href="http://www.meituan.com/about/terms">《美团网用户协议》</a>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    // element-ui from表单的校验规则
    // 用户名校验规则
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母、数字、下划线组成"));
      } else {
        // 如果不是上面两种情况就通过
        callback();
      }
    };
    // 密码校验规则
    var validatePass = (rule, value, callback) => {
      let reg = /^.*(?=.*\d)(?=.*[_])(?=.*[a-z]).*$/,
        strong = reg.test(this.registerForm.password);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!strong || (value.length < 6 || value.length > 16)) {
        callback(new Error("密码必须为6-16位的字母、数字、下划线组成"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    // 确认密码校验规则
    var validateRePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validateRePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.API.register({ params: this.registerForm }).then(res => {
            this.router.push({ name: "login" });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    input() {
      this.$emit("StrengthCheck");
      let reg = /^\w*(?=.*\d)(?=.*[_])(?=.*[a-z])\w*$/,
        strong = reg.test(this.registerForm.password);
      if (this.registerForm.password.length > 10 && strong) {
        this.strengthClass = "strong";
      } else if (this.registerForm.password == "") {
        this.strengthClass = "";
      } else if (this.registerForm.password.length < 6) {
        this.strengthClass = "week";
      } else {
        this.strengthClass = "normal";
      }
    }
  }
};
</script>

<style lang="less">
.form {
  margin: 0 auto 30px;
  padding-top: 30px;
  width: 980px;
  min-height: 300px;
  .el-form-item {
    margin-bottom: 16px;
    .el-input {
      width: 248px;

      input {
        border-color: #aaa;
        border-radius: 0;
      }
    }
    // 错误提示
    .el-form-item__error {
      top: 28%;
      left: 29%;
    }
  }
  // 密码强度
    .pw-strength {
      position: relative;
      margin: 0 0 8px 100px;
      width: 248px;
      // width: 100%;
      background: #eee;

      .bar {
        width: 0;
        height: 20px;
        transition: all 0.4s linear;
        &.week {
          width: 82px;
          background: #f76120;
        }
        &.normal {
          width: 164px;
          background: #ff8900;
        }
        &.strong {
          width: 248px;
          background: #5bab3c;
        }
      }
      .letter {
        position: absolute;
        top: 0;
        left: 0;
        span {
          display: inline-block;
          width: 82px;
          text-align: center;
          border-right: 2px solid #fff;
          box-sizing: border-box;
          &:last-child {
            border: none;
          }
        }
      }
    }

  // 注册按钮
  .register-btn {
    background-image: linear-gradient(to bottom, #2ec3b4, #2db3a6);
    color: #fff;
    border-bottom: 1px solid #008177;
    border-radius: 2px;
    &:hover {
      // 元素会刷新 建议不使用
      // background : #2db3a6;
    }
    span {
      font-size: 14px;
      font-weight: 700;
    }
  }

  // 协议
  .protocol {
    margin-left: 100px;
    a {
      font-size: 13px;
      color: #31bbac;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>


