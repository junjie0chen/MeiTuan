<template>
<!--  -->
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <!-- 根据首字母分类 -->
    <dl
      class="m-category-section"
      v-for="(item, index) in cityGroup"
      :key="index"
      :id="'city-' + index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
// import api from "@/api/index.js";
export default {
  created() {
    // 先排序 再分组
    this.API.getCityList().then(res => {
      var obj = {};
      this.cityList = res.data.data
        .sort((a, b) => {
          return a.firstChar.charCodeAt() - b.firstChar.charCodeAt();
        })
        .forEach(item => {
          if (!obj[item.firstChar.toUpperCase()]) {
            obj[item.firstChar.toUpperCase()] = [];
            obj[item.firstChar.toUpperCase()].push(item);
          } else {
            obj[item.firstChar.toUpperCase()].push(item);
          }
        });
      this.cityGroup = obj;
    });
  },
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      cityGroup: {},
      cityList: []
    };
  },
  methods: {
    changeCity(item) {
      this.$store.dispatch("position/setPosition", item);
      this.$router.push({ name: "index" });
    }
  }
};
</script>


