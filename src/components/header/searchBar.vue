<template>
  <div class="searchBar">
    <el-row>
      <!-- logo图标 -->
      <el-col :span="3" class="logo">
        <router-link :to="{name: 'index'}">
          <img src="@/assets/images/index/logo.png" alt>
        </router-link>
      </el-col>
      <!-- 搜索框 -->
      <el-col :span="11.5" class="content">

        <search :searchList="searchList" :hotWord='hotWord' />

        <!-- 搜索框下面的热门搜索 -->
        <p class="hotword">
          <router-link
            :to="{name: 'goods', params: {name: item}}"
            v-for="(item, index) in hotWord"
            :key="index"
          >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Search from '@/publicComponents/Search.vue'

export default {
  components: {
    Search
  },
  created() {
    this.API.getSearchWord().then( res => {
      this.searchList = res.data.data.list
    })
    this.API.getSearchHotWords().then( res => {
      this.hotWord = res.data.data
    })
  },
  data() {
    return {
      searchList: [], // 搜索列表
      hotWord: [],  // 热门搜索
    };
  },
};
</script>