import Vue from 'vue'
import axios from './axios'

let Func = {
  // 插件必须有一个install函数
  install(Vue) {
    Vue.prototype.API = {
      // 登录 --------------------------------------------------------
      login(params) {
        return axios.get("/api/meituan/login", params);
      },
      // 注册 -----------------------------------------------
      register(params) {
        return axios.get("/api/meituan/register", params);
      },
      // 搜索框列表数据获取  ------------------------------------  header/searchBar.vue
      getSearchWord() {
        return axios.get("/api/meituan/header/search.json");
      },
      // 查询最近热门搜索   -------------------------------------  header/searchBar.vue
      getSearchHotWords() {
        return axios.get("/api/meituan/header/searchHotWords.json");
      },
      // 首页左侧导航条 导航数据  -------------------------------------  index/menu/vue
      getMenuNav() {
        return axios.get("/api/meituan/index/nav.json");
      },
      // 首页下方（有格调内容区数据获取）------------------------------  index/container.vue
      getResultsByKeywords() {
        return axios.get("/api/meituan/index/resultsByKeywords.json");
      },
      // 获取城市列表 --------------------------------   changeCity/category.vue
      getCityList() {
        return axios.get("/api/meituan/city/cityList.json");
      },
      // 获取热门城市 --------------------------------   page/changeCity.vue
      getHotCity() {
        return axios.get("/api/meituan/city/hot.json");
      },
      // 获取省份列表 ----------------------------------  changeCity/province
      getProvince() {
        return axios.get("/api/meituan/city/province.json");
      },
      // 最近搜索城市 ----------------------------------   page/changeCity.vue
      getRecents() {
        return axios.get("/api/meituan/city/recents.json");
      },
      // 产品展示列表数据获取 ----------------------------  goodsList/list.vue
      getGoodsList() {
        return axios.get("/api/meituan/list/goodsList.json");
      },
      // 获取分类列表 ----------------------------------------  goodsList/category.vue
      getClassify() {
        return axios.get("/api/meituan/list/classify.json");
      },
      // 获取区域列表 ----------------------------------------  goodsList/category.vue
      getAreaList() {
        return axios.get("/api/meituan/list/areaList.json");
      },
      // 获取当前位置信息 ----------------------------   header/geo.vue
      getPosition() {
        return axios.get("/api/meituan/city/getPosition.json");
      },
      // 获取商品详情信息
      getDetail() {
        return axios.get("/api/meituan/product/detail.json");
      }
    };
  }
};
Vue.use(Func);