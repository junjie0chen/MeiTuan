<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot title="热门城市：" :list="hotList"/>
    </el-row>
    <el-row>
      <hot title="最近访问：" :list="recentList"/>
    </el-row>
    <el-row>
      <category/>
    </el-row>
  </div>
</template>

<script>
import province from "@/components/changeCity/province.vue";
import hot from "@/components/changeCity/hot.vue";
import category from "@/components/changeCity/category.vue";

export default {
  components: {
    province,
    hot,
    category
  },
  data() {
    return {
      hotList: [],
      recentList: []
    };
  },
  created() {
    // 热门城市
    this.API.getHotCity().then(res => {
      this.hotList = res.data.data;
    });
    // 最近搜索城市
    this.API.getRecents().then(res => {
      this.recentList = res.data.data;
    });
  }
};
</script>

<style lang="less">
@import "~@/assets/css/changeCity/index.less";
</style>