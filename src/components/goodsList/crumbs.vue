<template>

  <!-- 面包屑 -->
  <el-breadcrumb separator-class="el-icon-arrow-right" class="m-crumbs">
    <el-breadcrumb-item :to="{name: 'index'}">{{position}}美团</el-breadcrumb-item>
    <el-breadcrumb-item :to="{name: 'index'}">{{position}} {{$route.params.name}} </el-breadcrumb-item>
  </el-breadcrumb>

  <!-- <el-breadcrumb separator-class="el-icon-arrow-right" class="m-crumbs">
    <el-breadcrumb-item :to="{name: 'index'}">{{$store.state.position.name}}美团</el-breadcrumb-item>
    <el-breadcrumb-item :to="{name: 'index'}">{{$store.state.position.name}}{{$route.params.id}}</el-breadcrumb-item>
  </el-breadcrumb> -->
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
      ...mapState('position',{
        position: state => state.position.name
      })
    },
};
</script>

