<template>
  <!-- 产品列表 -->
    <div class="page-goodsList">
        <el-row>
          <!-- 面包屑 -->
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <category />
                </el-row>
                <el-row>
                    <list/>
                </el-row>
            </el-col>
            <el-col :span="4" class="right">
              <div class="map"></div>
              <dl class="youlike">
                <dt class="title">猜你喜欢</dt>
                <dd class="list"></dd>
              </dl>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import crumbs from '@/components/goodsList/crumbs.vue'
  import category from '@/components/goodsList/category.vue'
  import list from '@/components/goodsList/list.vue'

  export default {
    components: {
      crumbs,
      category,
      list
    },
  }
</script>

<style lang="less">
  @import url('~@/assets/css/goodsList/index.less');
</style>



