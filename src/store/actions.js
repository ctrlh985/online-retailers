import {ADD_COUNTER, ADD_TO_CART} from "./mutattions-types";

export default {
  addCart(context,payload) {
    //方法一：通过for循环判断新添加的商品是否已在购物车里，如果存在则赋值给oldProduct
    // let oldProduct = null
    // for (let item of context.state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // // 2.判断oldProduct
    // if (oldProduct) {
    //   // oldProduct.count += 1
    //   context.commit('addCounter',oldProduct)
    // }else {
    //   // payload.count = 1
    //   // state.cartList.push(payload)
    //   context.commit('addToCart',payload)
    // }

    //方法二：利用find函数查找payload中是否有该商品，
    // 在新添加的商品传入function函数中，如果item.iid === payload.iid时，
    return new Promise(((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER,oldProduct)
        resolve('商品数量+1')
      } else {
        // payload.count += 1
        // state.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('成功加入购物车！')
      }
    }))


  }
}
