import {ADD_COUNTER,ADD_TO_CART} from "./mutattions-types";
export default {
  //mutation唯一的目的就是修改state中的状态
  //mutation中的每个方法尽可能完成比较单一的事件，所以添加购物车的实现不合适在这处理

  //添加数量
  [ADD_COUNTER](state,payload) {
    payload.count ++
  },
  //添加商品
  [ADD_TO_CART](state,payload) {
    payload.count = 1
    state.cartList.push(payload)
  }
}
