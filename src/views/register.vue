<template>
  <div class="page-register">
    <header class="header">
      <div class="content">
        <router-link class="site-logo" :to="{name: 'index'}"></router-link>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </div>
    </header>
    <form-register />
    <footer class="footer">
      <p class="copyright">©meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import FormRegister from "@/publicComponents/FormRegister.vue";
export default {
  components: {
    FormRegister
  }
};
</script>

<style lang="less">
@import url("~@/assets/css/public/register.less");
</style>


