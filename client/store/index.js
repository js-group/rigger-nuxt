import Vuex from 'vuex';
import api from '../assets/js/api';
export default () => {
  return new Vuex.Store({
    'modules': {
      'index': {
        state() {
          return {
            'title': 'index'
          };
        }
      }
    },
    state() {
      0;
    },
    'actions': {
      getWindowData({ commit }) {
        commit('SET_WINDOW_DATA', 'api:' + api.testUrl);
      }
    },
    'getters': {
      getCount(state) {
        return state.count;
      }
    },
    'mutations': {
      increment(state) {
        state.count++;
      },
      SET_WINDOW_DATA(state, payload) {
        state.count = payload;
      }
    }
  });
};
