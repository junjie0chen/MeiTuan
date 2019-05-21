export default {
  namespaced: true, // 命名空间
  state: {
    position: {}
  },
  mutations: {
    setPosition(state, item) {
      if (Object.prototype.toString.call(item) != "[object Object]") {
        state.position.name = item;
      } else {
        state.position = item;
      }
    }
  },
  actions: {
    setPosition(ctx, item) {
      ctx.commit("setPosition", item);
    }
  }
};
