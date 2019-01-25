export default {
  namespace: 'ui',
  state: {
    collapsed: false,
  },
  reducers: {
    changeCollapse(state) {
      return {
        collapsed: !state.collapsed,
      };
    },
    // update(state) {
    //   return `${state}_login`;
    // },
  },
  //   effects: {
  //     *fetch({ type, payload }, { put, call, select }) {},
  //   },
};
