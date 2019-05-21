<template>
  <!-- 选择框 -->
  <div class="choose-wrap">
    <div
      :class="['choose',disabled ? 'disabled' : '']"
      @click="showWrapper"
      v-document-click="documentClick"
    >
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <!-- 下拉框 -->
      <div :class="['mt-content', {'active': showWrapperActive}]">
        <h4>{{title}}</h4>
        <div class="wrapper">          
          <div class="col" v-for="(items, index) in colList" :key="index">
            <span
              :class="['mt-item', {'active': item.name == value} ]"
              v-for="(item, index) in items" :key="index"
              @click.stop="changeValue(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "list",
    "value",
    "title",
    "showWrapperActive",
    "disabled",
  ],
  computed: {
    colList () {
      let col = Math.ceil(this.list.length / 12);
      let result = [];
      for (let i = 0; i < col; i++) {
        result.push(this.list.slice(i * 12, i * 12 + 12));
      }
      return result;
    }
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },

    documentClick() {
      this.$emit("change_active", false);
    },

    changeValue(item) {
      this.$emit("change", item);
      this.$emit("change_active", false);
    }
  }
};
</script>

