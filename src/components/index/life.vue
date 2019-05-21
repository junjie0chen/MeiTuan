<template>
  <div class="life">
    <nav class="nav">
      <router-link class="takeout" :to="{name: 'index'}">美团外卖</router-link>
      <router-link :to="{name: 'index'}">猫眼电影</router-link>
      <router-link :to="{name: 'index'}">美团酒店</router-link>
      <router-link class="apartment" :to="{name: 'index'}">民宿／公寓</router-link>
      <router-link class="business" :to="{name: 'index'}">商家入驻</router-link>
      <router-link :to="{name: 'index'}">美团公益</router-link>
    </nav>
    <div class="content">
      <m-silder :imgList="imgList" />
      <div class="life-pic"></div>
      <div class="life-login">
        <!-- 未登录 -->
        <div class="notLogged" v-if="!userName">
          <img src="@/assets/images/index/avatar.jpg" alt="">
          <p>Hi！你好</p>
          <router-link :to="{name: 'register'}" class="registered">注册</router-link>
          <router-link :to="{name: 'login'}" class="login">立即登录</router-link>
        </div>
        <!-- 已登录 -->
        <div class="hasLogged" v-else>
          <img src="@/assets/images/index/head-img.png" alt="">
          <p>{{userName}}</p>
        </div>
      </div>
      <div class="life-hotel pic"></div>
      <div class="life-music pic"></div>
      <div class="life-coop pic"></div>
      <div class="life-downapp">
        <img src="@/assets/images/index/download-qr.png" alt="下载APP">
        <p>美团APP手机版</p>
        <p class="last-p">
          <span class="red">1元起</span>
          <span>吃喝玩乐</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MSilder from "@/publicComponents/Silder.vue";
import {mapState} from 'vuex'
export default {
  components: {
    MSilder
  },
  data() {
    return {
      imgList: [
        {
          title: '住酒店',
          img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',

        },
        {
          title: '吃美食',
          img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',

        },
        {
          title: '点外卖',
          img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'

        },
        {
          title: '看电影',
          img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',

        },
        {
          title: '美团排队',
          img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',

        },
      ]
    };
  },
  computed: {
    ...mapState('user',{
      userName : state => state.username
    })
  },
};
</script>
