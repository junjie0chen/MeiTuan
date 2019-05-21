<template>
  <div class="page-index">
    <el-row>
      <el-col class="sidebar" :span="4.5">
        <div class="title">全部分类</div>
        <m-menu :menuList="menuList"/>
      </el-col>
      <el-col :span="19.5">
        <m-life/>
      </el-col>
    </el-row>
    <el-row>
      <container :nav="iStyle"/>
    </el-row>
    <el-row>
      <container :nav="recomment"/>
    </el-row>
  </div>
</template>

<script>

import MMenu from '@/publicComponents/Menu.vue'
import MLife from "@/components/index/life.vue";
import Container from "@/components/index/container.vue";

export default {
  components: {
    MMenu,
    MLife,
    Container
  },
  created() {
    this.API.getMenuNav().then(res=> {
      this.menuList = res.data.data
    })
  },
  data() {
    return {
      menuList: [],
      iStyle: {
        class: "iStyle",
        title: "有格调",
        list: [
          {
            name: "全部",
            type: "all"
          },
          {
            name: "约会聚餐",
            type: "food"
          },
          {
            name: "丽人SPA",
            type: "spa"
          },
          {
            name: "电影演出",
            type: "movie"
          },
          {
            name: "品质出游",
            type: "travel"
          }
        ]
      },
      recomment: {
        class: "youhui",
        title: "很优惠",
        list: [
          {
            name: "全部",
            type: "all"
          },
          {
            name: "美食",
            type: "food"
          },
          {
            name: "休闲",
            type: "xiuxian"
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
@import url("~@/assets/css/index/index.less");
</style>
