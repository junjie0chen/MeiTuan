<template>
  <div class="topBar">
    <el-row>
      <el-col :span="12">
        <m-geo/>
      </el-col>
      <el-col :span="12">
        <m-nav/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MGeo from "./geo";
import MNav from "./nav";
export default {
  components: {
    MGeo,
    MNav
  }
};
</script>
