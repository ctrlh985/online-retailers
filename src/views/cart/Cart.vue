<template>
  <div id="cart">
    <!--顶部导航栏-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
      <div slot="right" @click="manageClick">管理</div>
    </nav-bar>
    <!--商品列表滚动-->
    <cart-list/>
    <!--底部导航-->
    <cart-tool-bar class="cart-toolbar"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CartList from "./childcomps/CartList";
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import CartToolBar from "./childcomps/CartToolBar";
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      Scroll,
      CartToolBar
    },
    computed: {
      // CartCount() {
        // return this.$store.state.cartList.length
        // return this.$store.getters.cartLength
      // }
      //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
      // ...mapGetters(['cartLength']),
      //如果你想将一个 getter 属性另取一个名字，使用对象形式
      ...mapGetters({
        length: 'cartLength'
      })
    },
    methods: {
      manageClick() {
        console.log('----');
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    font-weight: bold;
  }
  #cart {
    height: 100vh;
    position: relative;
  }
  .cart-toolbar {
    position: absolute;
    bottom: 49px;
    width: 100%;
  }
</style>
