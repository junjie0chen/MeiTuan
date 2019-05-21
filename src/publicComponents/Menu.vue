<template>
  <div class="menu" @mouseleave="leave">
    <ul class="nav">
      <li class="navItem" v-for="(item, index) in menuList" :key="index" @mouseenter="enter(item)">
        <i :class="['type',item.type]"></i>
        <span class="navName">{{item.name}}</span>
        <span class="arrow"></span>
      </li>
    </ul>
    <div class="detail" v-if="subList">
      <template v-for="(item, index) in subList">
        <h4 class="subName" :key="index">{{item.title}}</h4>
        <router-link
          class="item"
          :to="{name: 'goods', params: {name: v}}"
          v-for="(v, i) in item.items"
          :key="v + '_' + i"
        >{{v}}</router-link>
        <!-- <span class="item" v-for="(v, i) in item.items" :key="v + '_' + i">{{v}}</span> -->
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menuList"],
  data() {
    return {
      subList: null
    };
  },
  methods: {
    enter(item) {
      this.subList = item.items;
    },
    leave() {
      this.subList = null;
    }
  }
};
</script>

<style lang="less">
.menu {
  font-size: 13px;
  // nav
  .navItem {
    position: relative;
    box-sizing: border-box;
    padding: 2px 12px;
    height: 26px;
    cursor: pointer;
    .type {
      font-size: 14px;
      font-style: normal;
      opacity: 0.3;
      margin-right: 11px;
      &:before {
        width: 14px;
        height: 14px;
        display: inline-block;
      }
    }
    // 右三角
    .arrow {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 13px;
      margin: auto;
      width: 4px;
      height: 4px;
      border-bottom: 1px solid #fff;
      border-right: 1px solid #fff;
      transform: rotate(-45deg);
    }
  }
  // subList
  .detail {
    padding: 0 30px;
    position: absolute;
    left: 230px;
    bottom: 0;
    width: 400px;
    height: 416px;
    background: #fff;
    z-index: 9999;

    .subName {
      font-size: 16px;
      font-weight: 500;
      margin-top: 24px;
      height: 22px;
      line-height: 22px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;
      color: #222;
    }

    .item {
      color: #999;
      font-size: 12px;
      line-height: 15px;
      display: inline-block;
      margin-right: 16px;
      margin-top: 10px;
      cursor: pointer;

      &:hover {
        color: #31bbac;
      }
    }
  }
}
</style>



