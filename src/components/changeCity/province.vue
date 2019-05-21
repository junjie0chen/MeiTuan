<template>
  <div class="m-province">
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
    />
    <div class="remoteSearch">
      <span class>直接搜索：</span>
      <el-select
        class
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中文"
        :remote-method="remoteMethod"
      >
        <el-option v-for="(item, index) in searchList" :key="index" :value="item">
          <span @click="select(item)">{{item}}</span>
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import MSelect from "./select";
// import api from "@/api/index.js";

export default {
  components: {
    MSelect
  },
  created() {
    this.API.getProvince().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
      res.data.data.forEach(item => {
        item.cityInfoList.forEach(item => {
          this.options4.push(item.name);
        });
      });
    })
  },
  data() {
    return {
      provinceList: [], // 省份列表
      cityList: [], // 城市列表
      province: "省份",
      city: "城市",
      provinceActive: false, // 当前省份
      cityActive: false, // 当前城市
      searchList: [], // 直接搜索返回的列表
      searchWord: "", // 直接搜索的输入字
      cityDisabled: true, // 城市是否禁选
      options4: [] // 由于请求数据的形式问题，作为直接搜索的过渡变量
    };
  },
  methods: {
    select(item) {
      this.$store.dispatch("position/setPosition", item);
      this.$router.push({ name: "index" });
    },
    // 直接搜索
    remoteMethod(query) {
      // 请求ajax
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.searchList = this.options4.filter(item => {
            return item.indexOf(query) > -1;
          });
        }, 200);
      } else {
        this.searchList = [];
      }
    },
    // 改变
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity(item) {
      this.city = item.name;
      this.$store.dispatch("position/setPosition", item);
      this.$router.push({ name: "index" });
    }
  }
};
</script>


