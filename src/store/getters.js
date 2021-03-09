export default {
  //返回购物车中的商品数量
  cartLength(state) {
    return state.cartList.length
  },
  //返回购物车中的商品信息
  cartList(state) {
    return state.cartList
  }
}
