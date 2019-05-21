<template>
  <div class="silder">
    <span class="demonstration"></span>
    <el-carousel trigger="click" height="240px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.img" :alt="item.title">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: [
    "imgList"
  ]
}
</script>
