import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
//1.安装vuex插件
Vue.use(Vuex)
//2.创建store对象
const state = {
  //购物车数组
  cartList: [],
  //收藏商品数组
  favorList: []
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
//3.导出
export default store
