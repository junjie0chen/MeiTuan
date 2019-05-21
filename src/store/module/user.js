export default {
  namespaced: true,
  state: {
    username: ''
  },
  mutations: {
    setUsername(state, item) {
      state.username = item
    }
  },
  actions: {
    setUsername(ctx, item) {
      ctx.commit("setUsername", item)
    }
  }
};
