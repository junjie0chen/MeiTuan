<template>
  <div class="m-header">
    <el-row>
      <to-bar/>
    </el-row>
    <el-row>
      <search-bar/>
    </el-row>
  </div>
</template>

<script>
import toBar from "./topBar";
import searchBar from "./searchBar";
export default {
  components: {
    toBar,
    searchBar
  }
};
</script>

<style lang="less">
@import url("~@/assets/css/public/header/index.less");
</style>