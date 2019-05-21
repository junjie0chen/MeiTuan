<template>
  <div class="page-login">
    <header class="header">
      <router-link :to="{name: 'index'}"></router-link>
    </header>
    <main class="login-panel">
      <div class="banner">
        <img src="@/assets/images/login/login-panel.jpg" alt>
      </div>
      <form-login />
      <!-- form表单结束 -->
    </main>
    <footer class="footer">
      <ul class="site-info">
        <li>
          <a href="#">关于美团</a>
        </li>
        <li>
          <a href="#">加入我们</a>
        </li>
        <li>
          <a href="#">商家入驻</a>
        </li>
        <li>
          <a href="#">帮助中心</a>
        </li>
        <li>
          <a href="#">美团手机版</a>
        </li>
      </ul>
      <p class="copyright">
        <span>©2019</span>
        <a href="#">美团网团购</a>
        <span>
          meituan.com
        </span>
        <a href="#">
          京ICP证070791号
        </a>
        <span>
          京公网安备11010502025545号
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
import FormLogin from '@/publicComponents/FormLogin.vue'
export default {
  components: {
    FormLogin
  }
};
</script>
<style lang="less">
@import url("~@/assets/css/public/login.less");
</style>
