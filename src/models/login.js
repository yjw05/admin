import { requestLogin } from '../services/api';

export default {
  namespace: 'login',
  state: {
    loading: false,
    loginStatus: false,
  },
  reducers: {
    changeLoginStatus(state, { response }) {
      return {
        loginStatus: response.data.success,
        loading: false,
      };
    },
    changeLoadingStatus(state) {
      return {
        loading: true,
      };
    },
    logout(state) {
      return {
        loginStatus: false,
      };
    },
  },
  effects: {
    *login({ values }, { call, put }) {
      yield put({ type: 'changeLoadingStatus' });
      const response = yield call(requestLogin, values);
      console.log(response);
      yield put({
        type: 'changeLoginStatus',
        response,
      });
    },
  },
};

// export default {
// 	namespace: '',
// 	state: {},
// 	subscriptions: {
// 		setup({ dispatch, history }) {
// 		},
// 	},
// 	reducers: {
// 		update(state) {
// 			return `${state}_login`;
// 		},
// 	},
// 	effects: {
// 		*fetch({ type, payload }, { put, call, select }) {
// 		},
// 	},
// }
