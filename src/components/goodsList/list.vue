<template>
    <div class="m-goodsList-list">
        <ul>
            <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">
                {{item.name}}
            </li>
        </ul>
        <el-row>
            <item v-for="(item, index) in goodsList" :key="index" :meta="item"/>
        </el-row>
    </div>
</template>

<script>
  import Item from './item'
  // import api from '@/api/index.js'

  export default {
    components: {
      Item
    },
    created () {
        this.API.getGoodsList().then( res => {
            this.goodsList = res.data.data
        })
    }, 
    data () {
      return {
        goodsList: [],
        nav: [
          {
            key: 's-default',
            name: '智能排序',
            active: true
          }, {
            key: 's-price',
            name: '价格最高',
            active: false
          }, {
            key: 's-score',
            name: '人气最高',
            active: false
          }, {
            key: 's-comment',
            name: '评论最高',
            active: false
          }
        ],
      }
    },
  }
</script>
