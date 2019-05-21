<template>
  <!-- 热门城市和最近访问公用同一组件 -->
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item, index) in list" :key="index">
                <span @click="changePosition(item.name)">{{item.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
  export default {
    props: [
      "title",
      "list",
    ],
    methods: {
      changePosition (item) {
        this.$store.dispatch('setPosition', item)
        this.$router.push({name: 'index'})
      }
    },
  }
</script>


