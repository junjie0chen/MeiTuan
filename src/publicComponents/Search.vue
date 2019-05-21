<template>
  <div class="search">
    <input
      type="text"
      class="inp"
      placeholder="搜索商家或地点"
      v-model="searchWord"
      @focus="focus"
      @blur="blur"
    >
    <button class="searchBtn">
      <i class="icon"></i>
    </button>
    <!-- 有内容的下拉框 -->
    <ul class="hasInput" v-if="isSearchList">
      <li v-for="(item, index) in searchList" :key="index">
        <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
      </li>
    </ul>
    <!-- 没内容时的下拉框 -->
    <div class="noInput" v-if="isHotWord">
      <h6>热门搜索</h6>
      <div class="hotword">
        <router-link
          :to="{name: 'goods', params: {name: item}}"
          v-for="(item, index) in hotWord"
          :key="index"
        >{{item}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchList", "hotWord"],
  data() {
    return {
      searchWord: "",
      isFocus: false //
    };
  },
  computed: {
    isSearchList() {
      return this.isFocus && this.searchWord;
    },
    isHotWord() {
      return this.isFocus && !this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      // 直接点击会先失焦
      setTimeout(() => {
        this.isFocus = false;
      }, 100);
    }
  }
};
</script>

<style lang="less">
.search {
  width: 550px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;

  .inp {
    display: inline-block;
    padding: 10px;
    width: 85%;
    height: 100%;
    line-height: 100%;
    vertical-align: top;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 15px;
  }
  .searchBtn {
    width: 15%;
    height: 100%;
    line-height: 100%;
    background: #ccc;
    border: none;
    border-radius: 0;
    .icon {
      display: inline-block;
      margin: 0 auto;
      &::before {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        border: 2px solid #fff;
        border-radius: 50%;
        clear: both;
      }
      &::after {
        display: block;
        content: "";
        width: 7px;
        height: 2px;
        background: #fff;
        transform: translate(11px, -1px) rotateZ(45deg);
      }
    }
  }
  .hasInput,
    .noInput {
      width: 84%;
      box-sizing: border-box;
      position: absolute;
      top: 70px;
      border: 1px solid #e5e5e5;
      border-top: none;
      background: #fff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      color: #999;
      text-align: left;
      z-index: 999;
    }
    .hasInput {
      li {
        &:hover {
          background-color: #f8f8f8;
          a {
            color: #31bbac;
          }
        }
        a {
          padding: 3px 10px;
          color: #333;
          line-height: 1.6;
          display: block;
        }
      }
    }
    .hotword {
      padding-top: 8px;
      font-size: 12px;
      width: 550px;
      overflow: hidden;
      height: 25px;
      box-sizing: border-box;
      text-align: left;
      padding-left: 12px;
      a {
        color: #999;
        margin-right: 10px;
        margin-bottom: 3px;
        display: inline-block;
      }
    }
    .noInput {
      padding: 10px;
      h6 {
        margin: 0;
        padding-bottom: 5px;
        font-size: 1em;
      }
      > div {
        width: auto;
        padding-top: 5px;
        margin-bottom: 5px;
        padding-left: 0;
        a {
          color: #666;
        }
      }
    }
}
</style>

