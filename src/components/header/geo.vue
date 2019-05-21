<template>
  <div class="geo">
    <div class="position">
      <i class="el-icon-location"></i>
      <!-- <span>{{$store.state.position.name}}</span> -->
      {{position}}
      <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
      <div class="nearCity">
        [<a href="#" v-for="(item, index) in nearCity" :key="index" >{{ item }}</a>]
      </div>
    </div>
    <div class="user">
      <!-- 未登录 -->
      <!-- <div class="noUserName" v-if="!$store.state.userName"> -->
      <div class="noUserName" v-if="!userName">
        <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
        <router-link class="register" :to="{name: 'register'}">注册</router-link>
      </div>
      <!-- 已登录 -->
      <div v-else>
        <a href="#" class="userName">
          <!-- {{$store.state.userName}} -->
          {{userName}}
        </a>
        <a class="exit" href="#" @click="exit">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  created() {
    this.API.getPosition().then( res => {
      this.$store.dispatch('position/setPosition', res.data.data)
    })
  },
  data() {
    return {
      nearCity: ['大厂回族自治县', '廊坊', '固安县']
    }
  },
  methods: {
    exit() {
      this.$store.dispatch('user/setUserName', '')
    }
  },
  computed: {
    ...mapState({
      position: state => state.position.position.name,
      userName: state => state.user.username,
    })
  }
}
</script>
