<template>
    <div class="m-goodsList-category">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in classicList" :key="index" >
                <m-select :title="item.title" :list="item.subList"/>
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in areaList" :key="index" >
                <m-select :title="item.title" :list="item.subList"/>
            </dd>
        </dl>
    </div>
</template>

<script>
  import MSelect from './select'
  export default {
    components: {
      MSelect,
    },
    created() {
      this.API.getClassify().then( res => {
        this.classicList = res.data.data;
      })
      this.API.getAreaList().then( res => {
        this.areaList = res.data.data;
      })
    },
    data () {
      return {
        classicList: [],
        areaList: []
      }
    }
  }
</script>

<style>

</style>
